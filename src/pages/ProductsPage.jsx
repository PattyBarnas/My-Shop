import React, { useState, Suspense } from "react";
import NavBar from "../ui/NavBar";
import { useCart } from "../store/CartContext";
import ProductList from "../features/Products/ProductList";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import LandingPage from "../features/LandingPage/LandingPage";
import Everything from "../features/LandingPage/Everything";
import Quality from "../features/LandingPage/Quality";

function ProductsPage() {
  const { products } = useLoaderData();
  return (
    <>
      <LandingPage />
      <Quality />
      <Everything />
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={products}>
          {(loadedProducts) => <ProductList products={loadedProducts} />}
        </Await>
      </Suspense>
    </>
  );
}

export default ProductsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/products");
  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: "Could not fetch products." },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.products;
  }
}

export function loader() {
  return defer({
    products: loadEvents(),
  });
}
