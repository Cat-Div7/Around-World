import { CountryCard } from "@components";

export const CountryList = () => {
  return (
    <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(min(260px,100%),1fr))] gap-x-6 gap-y-12 pb-1 md:mt-12 md:gap-x-10 md:gap-y-16 lg:gap-x-5 lg:gap-y-15">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};
