"use client";
import Image from "next/image";
import "../product.css";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams, useSearchParams } from "next/navigation";

import React, { useState } from "react";
import { Button } from "@/components/shared/Button";
import RatingAndReviews from "@/components/products/RatingAndReviews";
import MoreProductDetails from "@/components/products/MoreProductDetails";
import Faqs from "@/components/Faqs";
import { ProductsData } from "@/libs/data/products/products";
import { ProductDto } from "@/libs/types/Dtos/product.dto";
import Alert from "@/components/alert/Alert";
import { useRouter } from "next/navigation";

const ProductDetail = (): JSX.Element => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [page, setPage] = useState("");
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  const renderCurrentPage = (): React.ReactNode => {
    switch (page) {
      case "productDetails":
        return <MoreProductDetails />;
      case "ratingAndReview":
        return <RatingAndReviews />;
      case "faq":
        return <Faqs />;
      default:
        return <RatingAndReviews />;
    }
  };

  const product = (): ProductDto | null => {
    const productId = Number(id);
    if (isNaN(productId)) {
      console.log("product was not a number", id);
      return null;
    }
    let productData: ProductDto | null = null;
    ProductsData.filter((x) => x.id == productId).map((product) => {
      productData = product;
    });
    return productData;
  };

  if (product() == null) {
    const alert = (
      <Alert errorMessage="Product Not found! Navigating to Product page..." />
    );
    setTimeout(() => {
      router.push("/products");
    }, 2000);
    return alert;
  }

  return (
    <>
      <div className="details-display my-8 px-6 pb-10 ">
        <div className="details-images">
          <Image
            className="details-image"
            src={product()?.productImg!}
            width={1980}
            height={2880}
            alt=""
          />
          <Image
            className="details-image"
            src="/images/details2.png"
            width={152}
            height={167}
            alt=""
          />
          <Image
            className="details-image"
            src="/images/details3.png"
            width={152}
            height={167}
            alt=""
          />
          <Image
            className="details-image"
            src="/images/details4.png"
            width={152}
            height={167}
            alt=""
          />
        </div>
        <div className="product-details flex flex-col gap-2">
          <h1 className="text-3xl md:text-[2.5rem]">
            One Life Graphic T-shirt
          </h1>
          <div className="product-stars">
            <Image src="/images/Star-1.png" width={24} height={24} alt="" />
            <Image src="/images/Star-2.png" width={24} height={24} alt="" />
            <Image src="/images/Star-3.png" width={24} height={24} alt="" />
            <Image src="/images/Star-4.png" width={24} height={24} alt="" />
            <Image src="/images/Star-6.png" width={9} height={17} alt="" />
            <p>{product()?.rating}</p>
          </div>
          <p className="product-price">${product()?.price}</p>
          <p className="product-text">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="my-3" />
          <div className="color-section">
            <p className="product-text my-3">Select Colors</p>
            <div className="colors">
              <div className="flex items-center justify-center w-10 h-10 bg-[#4f4631] rounded-full">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame">
                    <path
                      id="Vector"
                      d="M14.5306 5.03063L6.5306 13.0306C6.46092 13.1005 6.37813 13.156 6.28696 13.1939C6.1958 13.2317 6.09806 13.2512 5.99935 13.2512C5.90064 13.2512 5.8029 13.2317 5.71173 13.1939C5.62057 13.156 5.53778 13.1005 5.4681 13.0306L1.9681 9.53063C1.89833 9.46087 1.84299 9.37804 1.80524 9.28689C1.76748 9.19574 1.74805 9.09804 1.74805 8.99938C1.74805 8.90072 1.76748 8.80302 1.80524 8.71187C1.84299 8.62072 1.89833 8.53789 1.9681 8.46813C2.03786 8.39837 2.12069 8.34302 2.21184 8.30527C2.30299 8.26751 2.40069 8.24808 2.49935 8.24808C2.59801 8.24808 2.69571 8.26751 2.78686 8.30527C2.87801 8.34302 2.96083 8.39837 3.0306 8.46813L5.99997 11.4375L13.4693 3.96938C13.6102 3.82848 13.8013 3.74933 14.0006 3.74933C14.1999 3.74933 14.391 3.82848 14.5318 3.96938C14.6727 4.11028 14.7519 4.30137 14.7519 4.50063C14.7519 4.69989 14.6727 4.89098 14.5318 5.03188L14.5306 5.03063Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <circle cx="18.5" cy="18.5" r="18.5" fill="#31344F" />
              </svg>
            </div>
          </div>
          <hr className="my-2" />
          <div className="">
            <p className="my-1">Choose Size</p>
            <div className="w-full flex gap-3 flex-wrap">
              <Button
                className="capitalize hover:bg-accent-light hover:text-white px-8 py-3 border border-border"
                label="small"
              />
              <Button
                className="capitalize hover:bg-accent-light hover:text-white px-8 py-3 border border-border"
                label="medium"
              />
              <Button
                style={{ backgroundColor: "black" }}
                className="bg-accent-light text-white px-8 py-3 border"
                label="Large"
              />

              <Button
                className="capitalize  hover:bg-accent-light hover:text-white px-8 py-3 border border-border"
                label="x-large"
              />
            </div>
          </div>
          <br className="border" />
          <div className="quantity flex flex-wrap gap-4">
            <div className="w-[35%]">
              <Image src="/images/minus.png" width={24} height={24} alt="" />
              <p>{productQuantity}</p>
              <Image src="/images/plus.png" width={24} height={24} alt="" />
            </div>
            <Button
              className="w-[65%] capitalize md:px-12 text-white bg-accent"
              link={`/cart?productId=${"product.productId"}?category=${"product.category"}`}
              label="Add to Cart"
            />
          </div>
        </div>
      </div>

      <section className="w-full min-h-screen p-3">
        <ul className="flex justify-between items-center p-4 my-5 border border-b-4">
          <li
            className="cursor-pointer"
            onClick={() => setPage("productDetails")}
          >
            Product Details
          </li>
          <li
            className="cursor-pointer"
            onClick={() => setPage("ratingAndReview")}
          >
            Rating & Reviews
          </li>
          <li className="cursor-pointer" onClick={() => setPage("faq")}>
            FAQs
          </li>
        </ul>
        <div>{renderCurrentPage()}</div>
      </section>
    </>
  );
};

export default ProductDetail;
