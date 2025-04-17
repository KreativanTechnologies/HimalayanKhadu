"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function CheckAuth({ isAuthenticated, user, children }) {
  const pathname = usePathname();
  const router = useRouter();

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