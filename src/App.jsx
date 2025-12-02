import {
  Header,
  SearchInput,
  RegionMenu,
  CountryList,
  ShowMessage,
} from "@components";
import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://restcountries.com/v3.1/lang/english";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchData = async () => {
      try {
        const response = await axios.get(URL, { signal });
        const data = response.data;
        setCountries(data);
        setFilteredCountries(data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
          return;
        }
        setIsError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div className="font-inter min-h-screen w-full bg-gray-100 transition-all dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        {isError && <ShowMessage message="Something went wrong!" />}
        {isLoading && <ShowMessage message="Loading countries data...!" />}
        {!isError && !isLoading && (
          <>
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <SearchInput
                countries={countries}
                filterCountries={setFilteredCountries}
              />
              <RegionMenu
                countries={countries}
                filterCountries={setFilteredCountries}
              />
            </div>
            <CountryList data={filteredCountries} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
