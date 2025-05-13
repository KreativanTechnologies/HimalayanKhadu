"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function CheckAuth({ isAuthenticated, user, children }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && pathname === "/Dashboard") {
      router.push("/Login");
      return;
    }

    if (isAuthenticated && (pathname.includes("Login") || pathname.includes("Signup"))) {
      if (user?.role === "admin") {
        router.push("/Dashboard");
      } else {
        router.push("/");
      }
      return;
    }

    if (isAuthenticated && pathname === "/") {
      if (user?.role === "admin") {
        router.push("/Dashboard");
      }
    }

    if (isAuthenticated && user?.role !== "admin" && pathname === "/Dashboard") {
      router.push("/");
    }

  }, [isAuthenticated, pathname, user, router]);

  return <>{children}</>;
}

export default CheckAuth;
