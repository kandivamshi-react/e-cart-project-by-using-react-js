import React, { useState } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp } from "@clerk/clerk-react";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import ProtectedLayouts from "./component/layouts/ProtectedLayouts";

export default function App() {
  const [product,setProduct] = useState("")
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected */}
      <Route element={<ProtectedLayouts />}>
        <Route path="/products" element={<Products product={product}  />} />
        <Route path="/add-product" element={<AddProduct product={product} setProduct={setProduct} />} />
      </Route>
      

      {/* Catch all */}
      <Route
        path="/"
        element={
          <>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
            <SignedIn>
              <Navbar />
              <Navigate to="/products" />
            </SignedIn>
          </>
        }
      />
    </Routes>
  );
}
