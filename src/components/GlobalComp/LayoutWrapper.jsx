"use client";
import { useDispatch, useSelector } from "react-redux";
import CheckAuth from "./checkAuth"; // adjust the path if needed
import { usePathname } from "next/navigation";
import { checkAuth, resetTokenAndCredentials } from "@/store/auth-slice";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/Dashboard");

  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        dispatch(checkAuth(JSON.parse(token)));
      } catch (error) {
        console.log("Error parsing token:", error);
      }
    } else {
      // force loading to false if no token
      dispatch(resetTokenAndCredentials());
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <>
      {!hideLayout && <Navbar />}
      <CheckAuth isAuthenticated={isAuthenticated} user={user} isLoading={isLoading}>
        {children}
      </CheckAuth>
      {!hideLayout && <Footer />}
    </>
  );
}
