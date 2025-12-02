import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://restcountries.com/v3.1";
const CACHE_PREFIX = "countries_cache_";
const CACHE_EXPIRY = 1000 * 60 * 60 * 24; // 24 hours

const getCachedData = (key) => {
  try {
    const cached = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const isExpired = Date.now() - timestamp > CACHE_EXPIRY;

    if (isExpired) {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }
    return data;
  } catch (error) {
    console.error("Error reading cache:", error);
    return null;
  }
};

const setCachedData = (key, data) => {
  try {
    localStorage.setItem(
      `${CACHE_PREFIX}${key}`,
      JSON.stringify({ data, timestamp: Date.now() }),
    );
  } catch (error) {
    console.error("Error setting cache:", error);
  }
};

/**
 * Custom hook for fetching data from REST Countries API with caching
 * @param {string} endpoint - API endpoint ('lang/english', 'name/countryName')
 * @param {boolean} skipInitialFetch - Skip fetching on mount (useful for Country page)
 * @returns {Object} - { data, filteredData, setFilteredData, isLoading, isError, refetch }
 */

export const useFetch = (endpoint, skipInitialFetch = false) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(!skipInitialFetch);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(
    async (signal) => {
      try {
        setIsLoading(true);
        setIsError(false);

        // Check cache first
        const cachedData = getCachedData(endpoint);
        if (cachedData) {
          console.log("Loading from cache:", endpoint);
          setData(cachedData);
          setFilteredData(cachedData);
          setIsLoading(false);
          return;
        }

        // Fetch from API if not cached
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`, {
          signal,
        });

        console.log("Fetching from API on: ", endpoint);

        // Cache the data
        setCachedData(endpoint, response.data);

        setData(response.data);
        setFilteredData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
          return;
        }
        console.error("Fetch error:", err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [endpoint],
  );

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Only fetch if not skipping initial fetch
    if (!skipInitialFetch) {
      fetchData(signal);
    }

    return () => controller.abort();
  }, [endpoint, fetchData, skipInitialFetch]);

  return {
    data,
    filteredData,
    setFilteredData,
    isLoading,
    isError,
    refetch: fetchData, // Manual refetch
  };
};
