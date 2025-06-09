import { useMemo } from "react";
import { useLocation } from "react-router-dom";

// Custom Hook for routes
const useRoutes = () => {
  const { pathname } = useLocation();

  return useMemo(
    () => [
      { label: "Home", active: pathname === "/", href: "/" },
      { label: "Products", active: pathname === "/products", href: "/products" },
      { label: "Contact", active: pathname === "/contact", href: "/contact" },
      { label: "About", active: pathname === "/about", href: "/about" },
      { label: "Sign up", active: pathname === "/signup", href: "/signup" },
    ],
    [pathname]
  );
};

export default useRoutes;
