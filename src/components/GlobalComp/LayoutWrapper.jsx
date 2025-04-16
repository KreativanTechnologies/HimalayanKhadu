"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { checkAuth } from "../../store/auth-slice";


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
      console.log("Token not found in sessionStorage.");
    }
  }, [dispatch]);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}