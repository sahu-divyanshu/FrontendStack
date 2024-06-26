import BrandLogo from "@/Assets/BrandLogo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const routeItems = [
    {
      routeId: 0,
      routeName: "Home",
      routePath: "/",
    },
    {
      routeId: 1,
      routeName: "Gallery",
      routePath: "/gallery",
    },
    {
      routeId: 2,
      routeName: "About",
      routePath: "/about",
    },
    {
      routeId: 3,
      routeName: "FAQ",
      routePath: "/faq",
    },
  ];

  return (
    <header className="relative mt-8 flex w-full max-w-[1200px] items-center justify-center rounded-lg border-2 border-Border bg-Nav md:px-8">
      <nav className="flex h-10 w-full items-center justify-between gap-x-2 px-4">
        <img
          src={BrandLogo}
          alt="FrontendStackLogo"
          className="size-7 cursor-pointer"
        />
        <ul className="hidden w-full justify-end gap-x-12 overflow-hidden sm:flex">
          {routeItems.map((item) => (
            <li key={item.routeId} className="cursor-pointer">
              <NavLink
                to={item.routePath}
                className={({ isActive }) =>
                  isActive ? "active text-Logo" : "text-white"
                }
              >
                {item.routeName}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="relative flex w-6 flex-col items-center gap-y-1.5 md:hidden"
          onClick={() => setIsActive(!isActive)}
        >
          <span
            className={`block h-0.5 w-6 rounded-md transition-transform duration-300 ease-in-out ${
              isActive ? "absolute rotate-45 bg-gray-500 " : "bg-Logo"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-md transition-transform duration-300 ease-in-out ${
              isActive ? "absolute -rotate-45 bg-gray-500 " : "bg-Logo"
            }`}
          ></span>
        </button>
      </nav>
      {isActive && (
        <div className="absolute top-14 flex w-full flex-col items-center justify-center rounded-lg border-2 border-Border bg-Nav py-6 md:hidden ">
          <ul className="flex w-full flex-col items-center justify-center space-y-6">
            {routeItems.map((item) => (
              <li
                key={item.routeId}
                className={"cursor-pointer text-3xl font-medium"}
              >
                <NavLink
                  to={item.routePath}
                  className={({ isActive }) =>
                    isActive ? "text-Logo" : "text-white"
                  }
                >
                  {item.routeName}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
