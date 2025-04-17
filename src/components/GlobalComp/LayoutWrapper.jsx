"use client";

import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import CheckAuth from "./checkAuth"; // adjust the path if needed
import { checkAuth } from "@/store/auth-slice";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/Dashboard");

  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        dispatch(checkAuth(JSON.parse(token)));
      } catch (error) {
        console.log("Error parsing token:", error);
      }
    }
  }, [dispatch]);

  const content = isDashboard ? (
    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
      {children}
    </CheckAuth>
  ) : (
    children
  );

  return (
    <>
      {!isDashboard && <Navbar />}
      {content}
      {!isDashboard && <Footer />}
    </>
  );
}
