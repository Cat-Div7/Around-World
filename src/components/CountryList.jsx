import { CountryCard , EmptySearch } from "@components";
import { Fragment } from "react";

export const CountryList = ({ data }) => {
  return (
    <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-x-6 gap-y-12 pb-1 md:mt-12 md:gap-x-10 md:gap-y-16 lg:gap-x-5 lg:gap-y-15">
      {data && data.length ? (
        data.map((country) => (
          <Fragment key={country.name.official}>
            <CountryCard
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flags.svg}
            />
          </Fragment>
        ))
      ) : (
        <EmptySearch />
      )}
    </div>
  );
};
