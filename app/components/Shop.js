"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Skyline Sweat",
    price: "$607.60",
    image: "/images/grid1.png",
    category: "women",
  },
  {
    id: 2,
    name: "Nightfall Hoodie",
    price: "$607.60",
    image: "/images/grid2.png",
    category: "men",
  },
  {
    id: 3,
    name: "Moss Layer",
    price: "$607.60",
    image: "/images/grid3.png",
    category: "men",
  },
  {
    id: 4,
    name: "Gradient Sweat",
    price: "$607.60",
    image: "/images/grid4.png",
    category: "women",
  },
  {
    id: 5,
    name: "Eco Fleece",
    price: "$607.60",
    image: "/images/grid5.png",
    category: "men",
  },
  {
    id: 6,
    name: "Blue Edge",
    price: "$320.00",
    image: "/images/grid6.png",
    category: "men",
  },
  {
    id: 7,
    name: "Ash hoodie",
    price: "$320.00",
    image: "/images/grid7.png",
    category: "men",
  },
  {
    id: 8,
    name: "Neon Fade",
    price: "$320.00",
    image: "/images/grid8.png",
    category: "women",
  },
  {
    id: 9,
    name: "Pacific Knit",
    price: "$320.00",
    image: "/images/grid9.png",
    category: "women",
  },
  {
    id: 10,
    name: "Citrus Edge",
    price: "$320.00",
    image: "/images/grid10.png",
    category: "men",
  },

  {
    id: 11,
    name: "Pine fleece",
    price: "$320.00",
    image: "/images/grid11.png",
    category: "women",
  },
  {
    id: 12,
    name: "Fushion Crew",
    price: "$320.00",
    image: "/images/grid12.png",
    category: "women",
  },
  {
    id: 13,
    name: "Terra Bag",
    price: "$820.00",
    image: "/images/bag1.png",
    category: "bags",
  },
  {
    id: 14,
    name: "Vintage Tote",
    price: "$520.00",
    image: "/images/bag2.png",
    category: "bags",
  },
  {
    id: 15,
    name: "Modern Duo",
    price: "$300.00",
    image: "/images/bag3.png",
    category: "bags",
  },
  {
    id: 16,
    name: "Amber Carry",
    price: "$450.00",
    image: "/images/bag4.png",
    category: "bags",
  },
  {
    id: 17,
    name: "Classic Arc",
    price: "$320.00",
    image: "/images/bag5.png",
    category: "bags",
  },
  {
    id: 18,
    name: "Creasent Bag",
    price: "$607.00",
    image: "/images/bag6.png",
    category: "bags",
  },
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="w-full">
      {/* HERO */}
      <div className="w-full h-[40vh] bg-gray-100 flex flex-col gap-4 items-center justify-center px-6 text-center">
        <h2 className="text-black text-5xl font-semibold">Made for you</h2>
        <p className="font-light max-w-xl text-gray-600">
          Since 1963, we’ve pioneered the creation of beautiful clothing and
          bags for all members of the family.
        </p>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-[1440px] mx-auto flex gap-10 px-10 py-16">
        {/* LEFT FILTER */}
        <div className="w-1/4">
          <h2 className="text-4xl font-light mb-2">All Products</h2>
          <p className="text-xl font-extralight text-gray-500 mb-6">
            Shop now, not later. Browse the best of our favorite sale styles and brands.
          </p>

          <div className="flex flex-col gap-4">
            {["all", "women", "men", "bags"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-left flex items-center gap-2 px-2 py-2 border-b-[0.1px] border-gray-100 ${
                  selectedCategory === cat
                    ? "font-light text-black text-2xl"
                    : "text-gray-500 text-xl"
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full border ${
                    selectedCategory === cat
                      ? "bg-black"
                      : "border-gray-400"
                  }`}
                />
                {cat === "all"
                  ? "All products"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="w-3/4 grid grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
            key={product.id}
            className="w-full h-[380px] rounded-[30px] relative overflow-hidden group cursor-pointer bg-gray-100"
            >
            {/* PRODUCT IMAGE */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"
            />

            {/* HOVER OVERLAY */}
            <div className="absolute bottom-0 left-0 h-[70px] w-full bg-black rounded-b-[30px] flex items-center justify-center
                transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <Link href="/product" className="text-white text-sm tracking-wide">
                  <h2 >
                  View Product · {product.price}
                  </h2>
                </Link>
            </div>

            {/* PRODUCT INFO (always visible) */}
            <div className="absolute top-4 left-4">
                <h3 className="text-black font-medium bg-white/80 px-3 py-1 rounded-full text-sm">
                {product.name}
                </h3>
            </div>
            </div>
          ))}
        </div>

      </div>

      <div className=" w-full bg-gray-100 m-auto h-[30vh] flex items-center">
        <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center border-r-[0.1px] border-black">
            <ScrollReveal className="flex gap-3">
            <div>
              <img src="/images/shipping.svg" alt="logo" className="h-[30px] w-[30px]"/>
            </div>
            <div>
              <h2 className="text-xl">Free Shipping</h2>
              <h3 className="text-sm font-extralight">Orders above $200</h3>
            </div>
            </ScrollReveal>
        </div>
        <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center border-r-[0.1px] border-black">
          <ScrollReveal className="flex gap-3">
          <div>
              <img src="/images/shipping2.svg" alt="logo" className="h-[30px] w-[30px]"/>
            </div>
            <div>
              <h2 className="text-xl">Money-back</h2>
              <h3 className="text-sm font-extralight">30 days Guarantee</h3>
            </div>
          </ScrollReveal>
        </div>
        <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center border-r-[0.1px] border-black">
          <ScrollReveal className="flex gap-3">
            <div>
              <img src="/images/shipping3.svg" alt="logo" className="h-[30px] w-[30px]"/>
            </div>
            <div>
              <h2 className="text-xl">Premium support</h2>
              <h3 className="text-sm font-extralight">Phone and email suport</h3>
            </div>
          </ScrollReveal>
        </div>
        <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center ">
          <ScrollReveal className="flex gap-3">
            <div>
              <img src="/images/shipping4.svg" alt="logo" className="h-[30px] w-[30px]"/>
            </div>
            <div>
              <h2 className="text-xl">Secure Payment</h2>
              <h3 className="text-sm font-extralight">Secured by Stripe</h3>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
