"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function CheckAuth({ isAuthenticated, user, children, isLoading }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isLoginOrSignup = pathname.includes("Login") || pathname.includes("Signup");
    const isDashboard = pathname === "/Dashboard";

    if (isDashboard) {
      if (!isAuthenticated) {
        router.push("/Login");
      } else if (user?.role !== "admin") {
        router.push("/");
      }
    } else if (isAuthenticated && isLoginOrSignup) {
      router.push(user?.role === "admin" ? "/Dashboard" : "/");
    }
  }, [isAuthenticated, user, pathname, router]);

  return <>{children}</>;
}
export default CheckAuth;