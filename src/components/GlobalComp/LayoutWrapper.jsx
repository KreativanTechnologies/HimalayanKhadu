"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function CheckAuth({ isAuthenticated, user, children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isAuthPage = pathname.includes("Login") || pathname.includes("Signup");
    const isDashboard = pathname === "/Dashboard";
    const isHome = pathname === "/";

    if (!isAuthenticated && isDashboard) {
      router.push("/Login");
      return;
    }

    if (isAuthenticated) {
      if (isAuthPage) {
        router.push(user?.role === "admin" ? "/Dashboard" : "/");
        return;
      }

      if (isHome && user?.role === "admin") {
        router.push("/Dashboard");
        return;
      }

      if (isDashboard && user?.role !== "admin") {
        router.push("/");
        return;
      }
    }
  }, [isAuthenticated, pathname, user, router]);

  return <>{children}</>;
}

export default CheckAuth;
