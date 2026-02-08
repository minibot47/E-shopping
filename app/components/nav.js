"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Nav() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { cart, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  // Cart item quantity handlers
  const handleCartIncrement = (index) => {
    updateQuantity(index, cart[index].quantity + 1);
  };

  const handleCartDecrement = (index) => {
    if (cart[index].quantity > 1) {
      updateQuantity(index, cart[index].quantity - 1);
    }
  };

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
                {getTotalItems()}
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
        className={`fixed top-0 right-0 h-full w-full sm:w-[70vw] md:w-[50vw] lg:w-[35vw] flex flex-col border-[0.2px] border-gray-100 bg-white z-50 transform transition-transform duration-300
        ${rightOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="p-4 sm:p-5 flex gap-4 border-b items-center justify-between border-gray-100">
          <div className="flex gap-2">
            <h2 className="text-lg sm:text-xl">Your Cart</h2>
            <div className="text-black rounded-full w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] flex items-center justify-center bg-gray-100 text-sm">
              {getTotalItems()}
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
        <div className="flex-1 p-4 sm:p-5 border-b border-gray-100 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-lg sm:text-xl mb-4">Your Cart is Empty</h2>
              <p className="text-sm sm:text-base text-gray-500">Add some items to the cart.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 border-b border-gray-100 pb-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-medium">{item.name}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">Size: {item.size} • Color: {item.color}</p>
                      <p className="text-sm sm:text-base font-medium mt-1">{item.price}</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-md px-2 py-1">
                        <button 
                          onClick={() => handleCartDecrement(index)}
                          className="text-sm sm:text-base"
                        >
                          −
                        </button>
                        <span className="text-xs sm:text-sm min-w-[20px] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => handleCartIncrement(index)}
                          className="text-sm sm:text-base"
                        >
                          +
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-xs sm:text-sm text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-4 sm:p-5 flex flex-col gap-3">
          <div className="flex justify-between text-base sm:text-lg">
            <h2>Subtotal:</h2>
            <h2>${getTotalPrice().toFixed(2)}</h2>
          </div>
          <button 
            disabled={cart.length === 0}
            className={`w-full h-[45px] sm:h-[50px] text-white text-lg sm:text-xl rounded-[5px] transition-colors ${
              cart.length === 0 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-gray-900 hover:bg-gray-800"
            }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}