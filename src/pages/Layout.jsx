import { Outlet } from "react-router-dom";
import { Header } from "@components";

export const Layout = () => {
  return (
    <div>
      <div className="font-inter min-h-screen w-full bg-gray-100 transition-all dark:bg-gray-900 dark:text-gray-100">
        <Header />
        <div className="container mx-auto px-5 md:px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
