import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Navigate, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";

function AppLayout() {
  const [isUser, setIsUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUser(user);
      } else {
        setIsUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isUser ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default AppLayout;
