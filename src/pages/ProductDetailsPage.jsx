import React, { Suspense } from "react";
import ProductItem from "../features/Products/ProductItem";
import { useLoaderData, Await, defer } from "react-router-dom";

function ProductDetailsPage() {
  const { product } = useLoaderData("product-detail");
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
      <Await resolve={product}>
        {(loadedProductDetails) => (
          <ProductItem product={loadedProductDetails} />
        )}
      </Await>
    </Suspense>
  );
}

export default ProductDetailsPage;

async function loadProductDetails(id) {
  const response = await fetch(`http://localhost:8080/products/${id}`);

  if (!response.ok) {
    throw json({ message: "Could not fetch product details", status: 500 });
  } else {
    const resData = await response.json();

    return resData.product;
  }
}

export async function loader({ params }) {
  const id = params.prodId;

  return defer({
    product: await loadProductDetails(id),
  });
}
