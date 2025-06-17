import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  useEffect(() => {
    if (!isAuthenticated && pathname === "/Dashboard") {
      navigate("/Login");
      return;
    }

    if (
      isAuthenticated &&
      (pathname.includes("Login") || pathname.includes("Signup"))
    ) {
      if (user?.role === "admin") {
        navigate("/Dashboard");
      } else {
        navigate("/");
      }
      return;
    }

    if (isAuthenticated && pathname === "/") {
      if (user?.role === "admin") {
        navigate("/Dashboard");
      }
    }

    if (
      isAuthenticated &&
      user?.role !== "admin" &&
      pathname === "/Dashboard"
    ) {
      navigate("/");
    }
  }, [isAuthenticated, pathname, user, navigate]);

  return <>{children}</>;
}

export default CheckAuth;
