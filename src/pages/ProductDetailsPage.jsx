import React, { Suspense } from "react";
import ProductItem from "../features/Products/ProductItem";
import { useLoaderData, Await } from "react-router-dom";

function ProductDetailsPage() {
  const { products, productDetail } = useLoaderData("product-details");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={products}>
          {(loadedProduct) => <ProductItem products={loadedProduct} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading....</p>}>
        <Await resolve={productDetail}>
          {(loadedProductDetails) => (
            <ProductItem productDetail={loadedProductDetails} />
          )}
        </Await>
      </Suspense>
      );
    </>
  );
}

export default ProductDetailsPage;

async function loadProductDetails(id) {
  const response = await fetch(`http://localhost:8080/product/${id}`);

  if (!response.ok) {
    throw json({ message: "Could not fetch product details", status: 500 });
  } else {
    const resData = await response.json();
    return resData.productDetails;
  }
}

export async function loader({ request, params }) {
  const id = params.prodId;
  console.log(id);

  return defer({
    products: loadedProduct(),
    productDetails: await loadProductDetails(id),
  });
}
