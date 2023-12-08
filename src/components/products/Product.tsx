"use client";

import React, { useState } from "react";
import { ProductDto } from "../../libs/types/Dtos/product.dto";
// @ts-ignore
import Image from "next/image";
import Link from "next/link";
import { Button } from "../shared/Button";
import ConfigureProtocol from "../auth/ConfigureProtocol";

const Product: React.FC<{ productData: ProductDto[] }> = ({
  productData,
}): JSX.Element => {
  const [url, setUrl] = useState("");
  const [modal, setModal] = useState(false);
  if (productData.length <= 0) {
    return <p>No product found.</p>;
  }

  return (
    <>
      {productData &&
        productData.map((product) => (
          <div
            className="w-[18.4375rem] mx-1 mt-5 h-[28.57025rem] flex flex-col"
            key={product.id}
          >
            <Image
              src={product.productImg}
              width={product.width}
              height={product.height}
              alt={product.title}
              className="w-[18.4375rem] max-h-[18.625rem] flex pt-0 mt-4 pr-[0.8125rem] pb-[0.875rem] flex-col justify-center rounded-[1.25rem] bg-[#F0EEED] items-center"
            />
            <div className="flex flex-col items-start justify-start px-2 mt-3">
              <p className="text-lg font-[400] capitalize">{product.title}</p>
              <div className="flex items-center justify-center h-12 gap-1">
                {product.images.map((img) => (
                  <Image
                    key={img.key}
                    src={img.value}
                    width={23}
                    height={21}
                    alt="Stars"
                  />
                ))}
                <span className="text-sm font-[300]">{product.rating}</span>
              </div>
              <p className="text">${product.price}</p>
            </div>

            <div className="w-auto h-[3.3rem] px-[2.3rem] py-3 bg-accent rounded-[1.5rem] mt-4 justify-center items-center gap-[5px] inline-flex">
              <button
                onClick={() => setModal(true)}
                className="text-white text-xs font-normal font-['Poppins']"
              >
                Details
              </button>
              <Image
                src="/images/link-to.png"
                alt=""
                width={9.8}
                height={8.52}
              />
            </div>
          </div>
        ))}
      {modal ? <ConfigureProtocol link={url} /> : null}
    </>
  );
};

export default Product;
