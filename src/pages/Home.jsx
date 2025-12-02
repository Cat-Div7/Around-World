import { SearchInput, RegionMenu, CountryList, ShowMessage } from "@components";
import { useFetch } from "@hooks";

export const Home = () => {
  const {
    data: countries,
    filteredData: filteredCountries,
    setFilteredData: setFilteredCountries,
    isLoading,
    isError,
  } = useFetch("lang/english");

  return (
    <>
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
    </>
  );
};
