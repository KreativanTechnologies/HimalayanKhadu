import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  useEffect(() => {
    const isAuthPage = pathname.includes("Login") || pathname.includes("Signup");
    const isDashboard = pathname === "/Dashboard";
    const isHome = pathname === "/";

    if (!isAuthenticated && isDashboard) {
      navigate("/Login");
      return;
    }

    if (isAuthenticated) {
      if (isAuthPage) {
        navigate(user?.role === "admin" ? "/Dashboard" : "/");
        return;
      }

      if (isHome && user?.role === "admin") {
        navigate("/Dashboard");
        return;
      }

      if (isDashboard && user?.role !== "admin") {
        navigate("/");
        return;
      }
    }
  }, [isAuthenticated, pathname, user, navigate]);

  return <>{children}</>;
}

export default CheckAuth;
