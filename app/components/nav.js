"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[8vh] w-full text-black flex justify-between border-b border-gray-100">
        <div className="max-w-[1440px] w-full grid grid-cols-3 lg:flex m-auto h-full px-3 sm:px-5">
          
          {/* MOBILE HAMBURGER / LEFT LINKS */}
          <div className="flex items-center lg:w-1/3">
            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-6 h-6 flex flex-col justify-center gap-1 lg:hidden"
            >
              <span className="w-full h-0.5 bg-black transition-all"></span>
              <span className="w-full h-0.5 bg-black transition-all"></span>
              <span className="w-full h-0.5 bg-black transition-all"></span>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-7">
              <Link href="/Shop" className="text-lg font-extralight">Shop</Link>
              <Link href="/About" className="text-lg font-extralight">About</Link>
              <Link href="/Contact" className="text-lg font-extralight">Contact</Link>
            </div>
          </div>

          {/* LOGO - Centered */}
          <Link href="/" className="flex lg:w-1/3 items-center justify-center">
            <img src="/images/mini.png" alt="LOGO" className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] lg:h-[90px] lg:w-[90px]" />
          </Link>

          {/* ICONS - Right aligned */}
          <div className="flex lg:w-1/3 items-center gap-3 sm:gap-5 justify-end">
            {/* SEARCH */}
            <img
              src="/images/search.svg"
              alt="search"
              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] cursor-pointer"
              onClick={() => setLeftOpen(true)}
            />

            {/* CART */}
            <div
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              onClick={() => setRightOpen(true)}
            >
              <img src="/images/cart.png" alt="cart" className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" />
              <div className="text-white text-xs sm:text-sm rounded-full w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] flex items-center justify-center bg-black">
                0
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed top-[8vh] left-0 right-0 bg-white z-40 border-b border-gray-100 lg:hidden">
          <div className="flex flex-col p-5 gap-4">
            <Link 
              href="/Shop" 
              className="text-lg font-extralight"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/About" 
              className="text-lg font-extralight"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/Contact" 
              className="text-lg font-extralight"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* OVERLAY */}
      {(leftOpen || rightOpen) && (
        <div
          className="fixed inset-0 bg-black/70 z-50"
          onClick={() => {
            setLeftOpen(false);
            setRightOpen(false);
          }}
        />
      )}

      {/* LEFT SIDEBAR (SEARCH) */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[70vw] md:w-[50vw] lg:w-[35vw] bg-white z-50 transform transition-transform duration-300
        ${leftOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-5 flex gap-4 border-b items-center justify-between border-gray-100">
          <h2 className="text-lg sm:text-xl">Search Products</h2>
          <button
            onClick={() => setLeftOpen(false)}
            className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]"
          >
            <img src="/images/cancel.png" alt="close search" />
          </button>
        </div>

        {/* SEARCH INPUT */}
        <div className="p-4 sm:p-5 flex gap-2 items-center">
          <img src="/images/search.svg" alt="search" className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 outline-none text-sm sm:text-base"
          />
        </div>
      </div>

      {/* RIGHT SIDEBAR (CART) */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[70vw] md:w-[50vw] lg:w-[35vw] flex flex-col bg-white z-50 transform transition-transform duration-300
        ${rightOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-5 flex gap-4 border-b items-center justify-between border-gray-100">
          <div className="flex gap-2">
            <h2 className="text-lg sm:text-xl">Your Cart</h2>
            <div className="text-black rounded-full w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] flex items-center justify-center bg-gray-100">
              0
            </div>
          </div>
          <button
            onClick={() => setRightOpen(false)}
            className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px]"
          >
            <img src="/images/cancel.png" alt="close cart" />
          </button>
        </div>

        {/* BODY */}
        <div className="flex-1 p-4 sm:p-5 border-b border-gray-100 flex flex-col items-center justify-center overflow-y-auto">
          <h2 className="text-lg sm:text-xl mb-4">Your Cart is Empty</h2>
          <p className="text-sm sm:text-base text-gray-500">Add some items to the cart.</p>
        </div>

        {/* FOOTER */}
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex justify-between text-base sm:text-lg">
            <h2>Subtotal:</h2>
            <h2>$0</h2>
          </div>
          <button className="w-full h-[45px] sm:h-[50px] bg-gray-900 text-white text-lg sm:text-xl rounded-[5px]">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}