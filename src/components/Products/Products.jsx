"use client"
import React from "react";
import star from "@/assets/star.png"
import Image from "next/image";
import { useRouter } from "next/navigation";

function Products({data}) {
    const router = useRouter()
  return (
    <div className="apple__wrapper">
      {data?.products?.map((item) => (
        <div className="apple__card" key={item.id}>
          <img onClick={()=> router.push(`/product/${item.id}`)} src={item.thumbnail} alt="" />
          <div className="apple__titles">
            <p className="apple__title">{item.title}</p>
            <Image src={star} alt="" />
            <p className="apple__desc">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
