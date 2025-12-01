export const CountryCard = () => {
  return (
    <a href="#">
      <div className="h-full rounded-lg bg-gray-50 p-3 pb-9 shadow-md dark:bg-gray-800">
        <div className="mb-4 aspect-4/3 w-full overflow-hidden rounded-lg">
          <img
            className="h-full w-full object-cover"
            src="https://placehold.co/264x160"
            alt="placeholder"
            loading="lazy"
          />
        </div>
        <h2 className="mb-4 ml-3 text-lg font-extrabold">Egypt</h2>
        <div className="ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light">1000</span>
          </p>{" "}
          <p>
            <span className="font-semibold">Region: </span>
            <span className="font-light">Africa</span>
          </p>{" "}
          <p>
            <span className="font-semibold">Capital: </span>
            <span className="font-light">Cairo</span>
          </p>
        </div>
      </div>
    </a>
  );
};
