"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

function CheckAuth({ isAuthenticated, user, children }) {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const isLoginOrSignup = pathname.includes("Login") || pathname.includes("Signup");
    const isAdminRoute = pathname.includes("admin");

    if (!isAuthenticated) {
      if (!isLoginOrSignup) {
        router.push("/Login");
      }
    } else {
      if (isLoginOrSignup) {
        router.push(user?.role === "admin" ? "/Dashboard" : "/");
      } else if (isAdminRoute && user?.role !== "admin") {
        router.push("/unAuthPage");
      } else if (pathname === "/" && user?.role === "admin") {
        router.push("/Dashboard");
      }
    }
  }, [isAuthenticated, user, pathname, router]);

  return <>{children}</>;
}

export default CheckAuth;