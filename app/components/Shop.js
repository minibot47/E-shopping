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
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="w-full">
      {/* HERO */}
      <div className="w-full h-[30vh] sm:h-[35vh] lg:h-[40vh] bg-gray-100 flex flex-col gap-3 sm:gap-4 items-center justify-center px-4 sm:px-6 text-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/contact.jpg)'}}>
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Made for you</h2>
        <p className="font-light text-sm sm:text-base max-w-xl text-gray-600 px-4">
          Since 1963, we've pioneered the creation of beautiful clothing and
          bags for all members of the family.
        </p>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
        {/* MOBILE FILTER TOGGLE */}
        <div className="lg:hidden w-full">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="w-full bg-gray-100 text-black px-4 py-3 rounded-lg flex items-center justify-between"
          >
            <span className="text-lg font-medium">
              Filter ({selectedCategory === "all" ? "All products" : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)})
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${mobileFilterOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* LEFT FILTER - Desktop always visible, Mobile collapsible */}
        <div className={`w-full lg:w-1/4 ${mobileFilterOpen ? "block" : "hidden"} lg:block`}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-2">All Products</h2>
          <p className="text-base sm:text-lg lg:text-xl font-extralight text-gray-500 mb-4 sm:mb-6">
            Shop now, not later. Browse the best of our favorite sale styles and brands.
          </p>

          <div className="flex flex-col gap-3 sm:gap-4">
            {["all", "women", "men", "bags"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setMobileFilterOpen(false); // Close mobile filter after selection
                }}
                className={`text-left flex items-center gap-2 px-2 py-2 border-b-[0.1px] border-gray-100 ${
                  selectedCategory === cat
                    ? "font-light text-black text-lg sm:text-xl lg:text-2xl"
                    : "text-gray-500 text-base sm:text-lg lg:text-xl"
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border ${
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
        <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full h-[300px] sm:h-[350px] lg:h-[380px] rounded-[20px] sm:rounded-[30px] relative overflow-hidden group cursor-pointer bg-gray-100"
            >
              {/* PRODUCT IMAGE */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute bottom-0 left-0 h-[60px] sm:h-[70px] w-full bg-black rounded-b-[20px] sm:rounded-b-[30px] flex items-center justify-center
                transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                <Link href="/Product" className="text-white text-xs sm:text-sm tracking-wide">
                  <h2>
                    View Product · {product.price}
                  </h2>
                </Link>
              </div>

              {/* PRODUCT INFO (always visible) */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <h3 className="text-black font-medium bg-white/80 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="w-full bg-gray-100 m-auto h-auto py-8 sm:py-0 sm:h-[30vh] flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-[50%] text-black p-4 sm:p-5 flex items-center gap-4 sm:gap-5 justify-center border-b sm:border-b-0 sm:border-r-[0.1px] border-black">
          <ScrollReveal className="flex gap-3 items-center">
            <div className="flex-shrink-0">
              <img src="/images/shipping.svg" alt="logo" className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]"/>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl">Free Shipping</h2>
              <h3 className="text-xs sm:text-sm font-extralight">Orders above $200</h3>
            </div>
          </ScrollReveal>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-[50%] text-black p-4 sm:p-5 flex items-center gap-4 sm:gap-5 justify-center border-b sm:border-b-0 lg:border-r-[0.1px] border-black">
          <ScrollReveal className="flex gap-3 items-center">
            <div className="flex-shrink-0">
              <img src="/images/shipping2.svg" alt="logo" className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]"/>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl">Money-back</h2>
              <h3 className="text-xs sm:text-sm font-extralight">30 days Guarantee</h3>
            </div>
          </ScrollReveal>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-[50%] text-black p-4 sm:p-5 flex items-center gap-4 sm:gap-5 justify-center border-b sm:border-b-0 sm:border-r-[0.1px] border-black">
          <ScrollReveal className="flex gap-3 items-center">
            <div className="flex-shrink-0">
              <img src="/images/shipping3.svg" alt="logo" className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]"/>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl">Premium support</h2>
              <h3 className="text-xs sm:text-sm font-extralight">Phone and email support</h3>
            </div>
          </ScrollReveal>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-[50%] text-black p-4 sm:p-5 flex items-center gap-4 sm:gap-5 justify-center">
          <ScrollReveal className="flex gap-3 items-center">
            <div className="flex-shrink-0">
              <img src="/images/shipping4.svg" alt="logo" className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]"/>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl">Secure Payment</h2>
              <h3 className="text-xs sm:text-sm font-extralight">Secured by Stripe</h3>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}