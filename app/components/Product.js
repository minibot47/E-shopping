"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Product() {
    const [rightOpen, setRightOpen] = useState(false);

    return(
        <div className="w-full mt-6 sm:mt-8 lg:mt-10">
            <div className="w-full max-w-[1440px] m-auto flex flex-col gap-4 sm:gap-5 p-4 sm:p-5">
                <h3 className="text-xs sm:text-sm lg:text-base">Home - product - Nightfall Hoodie</h3>
                
                {/* PRODUCT SECTION */}
                <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-0">
                    {/* LEFT - IMAGES */}
                    <div className="w-full lg:w-1/2 flex h-full gap-2">
                        {/* Thumbnails - Hide on mobile, show on tablet+ */}
                        <div className="hidden sm:flex w-[12%] h-full flex-col gap-3 sm:gap-5">
                            <div className="w-full h-[60px] sm:h-[80px] bg-yellow-100 bg-cover bg-center bg-no-repeat rounded-[7px]" style={{backgroundImage: 'url(/images/product1.png)'}}></div>
                            <div className="w-full h-[60px] sm:h-[80px] bg-yellow-100 bg-cover bg-center bg-no-repeat rounded-[7px]" style={{backgroundImage: 'url(/images/product2.png)'}}></div>
                            <div className="w-full h-[60px] sm:h-[80px] bg-yellow-100 bg-cover bg-center bg-no-repeat rounded-[7px]" style={{backgroundImage: 'url(/images/product3.png)'}}></div>
                        </div>
                        {/* Main Image */}
                        <div className="w-full sm:w-[88%] h-[50vh] sm:h-[60vh] lg:h-[70vh] bg-red-500 bg-cover bg-center bg-no-repeat rounded-[12px]" style={{backgroundImage: 'url(/images/product3.png)'}}>
                        </div>
                    </div>

                    {/* RIGHT - PRODUCT INFO */}
                    <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-20 text-black">
                        {/* Header */}
                        <div className="border-b border-gray-100 pb-4">
                            <p className="text-xs sm:text-sm text-[#FF7B54] mb-1">Out of stock</p>
                            <h2 className="text-xl sm:text-2xl font-medium">Nightfall Hoodie</h2>
                            <p className="text-xl sm:text-2xl mt-1">$607.60</p>
                        </div>

                        {/* Description */}
                        <div className="py-4 sm:py-6 border-b border-gray-100">
                            <p className="text-sm sm:text-base leading-relaxed">
                                Modern hoodie with sleek detailing and a versatile zip design. A great
                                addition for cozy evenings or casual outings, blending functionality and
                                fashion.
                            </p>
                        </div>

                        {/* Size */}
                        <div className="py-4 sm:py-6 border-b border-gray-100">
                            <p className="text-xs sm:text-sm mb-3">Size</p>
                            <div className="flex gap-2 sm:gap-3">
                                <button className="px-4 sm:px-5 py-2 rounded-[7px] bg-[#D1B7A4] text-xs sm:text-sm font-light">
                                    Small
                                </button>
                                <button className="px-4 sm:px-5 py-2 rounded-[7px] bg-gray-100 text-xs sm:text-sm font-light">
                                    Medium
                                </button>
                                <button className="px-4 sm:px-5 py-2 rounded-[7px] bg-gray-100 text-xs sm:text-sm font-light">
                                    Large
                                </button>
                            </div>
                        </div>

                        {/* Color */}
                        <div className="py-4 sm:py-6 border-b border-gray-100">
                            <p className="text-xs sm:text-sm mb-3">Color</p>
                            <div className="flex gap-2 sm:gap-3">
                                <button className="px-4 sm:px-5 py-2 rounded-[7px] bg-[#D1B7A4] text-xs sm:text-sm font-light">
                                    Black
                                </button>
                                <button className="px-4 sm:px-5 py-2 rounded-[7px] bg-gray-100 text-xs sm:text-sm font-light">
                                    White
                                </button>
                                <button className="px-4 sm:px-5 py-2 rounded-[7px] bg-gray-100 text-xs sm:text-sm font-light">
                                    Blue
                                </button>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="py-4 sm:py-6">
                            <div className="flex items-center justify-between bg-gray-100 rounded-[7px] px-4 sm:px-6 py-3">
                                <button className="text-lg sm:text-xl">−</button>
                                <span className="text-sm sm:text-base">1</span>
                                <button className="text-lg sm:text-xl">+</button>
                            </div>
                        </div>

                        {/* Add to cart */}
                        <button onClick={() => setRightOpen(true)} className="w-full bg-black text-white py-3 sm:py-4 rounded-[7px] mt-4 text-sm sm:text-base">
                            Add to Cart
                        </button>

                        {/* Features */}
                        <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                            <p>🚚 Fast & free delivery</p>
                            <p>🧵 100% Cotton</p>
                            <p>♻️ Recycled material</p>
                        </div>

                        {/* Accordion */}
                        <div className="mt-6 sm:mt-8 border-t border-gray-100">
                            {["Delivery & Returns", "Size & Fit", "How This Was Made"].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="flex justify-between items-center py-3 sm:py-4 border-b border-gray-100 cursor-pointer text-sm sm:text-base"
                                    >
                                        <span>{item}</span>
                                        <span className="text-lg sm:text-xl">+</span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* SUSTAINABLE SECTION */}
            <div className="w-full bg-gray-100 mt-8 sm:mt-10 h-fit p-4 sm:p-5">
                <div className="w-full max-w-[1440px] m-auto flex flex-col items-start gap-6 sm:gap-8 lg:gap-10 py-6 sm:py-8 lg:py-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light">No need to sacrifice style for comfort</h2>
                    <div className="w-full h-fit flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-10">
                        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5">
                            <img src="/images/product4.webp" alt="product" className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-[20px] sm:rounded-[30px]"/>
                            <div className="w-full flex flex-col gap-2">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl">Sustainable & trendy</h2>
                                <h3 className="font-extralight text-sm sm:text-base">Our pieces are sustainably made, and designed to be a timeless piece in your wardrobe.</h3>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-5">
                            <img src="/images/product5.webp" alt="product" className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-[20px] sm:rounded-[30px]"/>
                            <div className="w-full flex flex-col gap-2">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl">Elevate your style</h2>
                                <h3 className="font-extralight text-sm sm:text-base">Made with natural materials, each item is comfortable and easily machine washable.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* YOU MIGHT ALSO LIKE */}
            <ScrollReveal className="w-full max-w-[1440px] m-auto h-fit text-black flex flex-col gap-3 sm:gap-4 mt-8 sm:mt-10 mb-6 sm:mb-10 p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl">You might also like</h1>
                    <h2 className="text-base sm:text-lg lg:text-xl font-light underline">All products</h2>
                </div>
            </ScrollReveal>

            {/* PRODUCT RECOMMENDATIONS */}
            <ScrollReveal className="w-full max-w-[1440px] p-4 sm:p-5 m-auto h-fit rounded-[20px] sm:rounded-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {[1, 2, 3].map((num) => (
                    <div key={num} className="w-full h-[300px] sm:h-[350px] lg:h-full rounded-[20px] sm:rounded-[30px] relative overflow-hidden group cursor-pointer">
                        <img src={`/images/grid${num}.png`} alt={`Grid${num}`} className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"/>
                        <div className="absolute bottom-0 left-0 h-[50px] sm:h-[60px] w-full bg-black rounded-b-[20px] sm:rounded-b-[30px] flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                            <h2 className="text-white text-sm sm:text-base">View Product</h2>
                        </div>
                    </div>
                ))}
            </ScrollReveal>

            {/* FEATURES SECTION */}
            <div className="w-full bg-gray-100 m-auto h-auto py-8 sm:py-0 sm:h-[30vh] flex items-center">
                <div className="flex flex-col sm:flex-row w-full max-w-[1440px] m-auto">
                    <div className="w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-[50%] text-black p-4 sm:p-5 flex items-center gap-4 sm:gap-5 justify-center border-b sm:border-b-0 sm:border-r border-gray-100">
                        <ScrollReveal className="flex gap-3 sm:gap-4 items-center">
                            <div className="flex-shrink-0">
                                <img src="/images/shipping.svg" alt="logo" className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]"/>
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl">Free Shipping</h2>
                                <h3 className="text-xs sm:text-sm font-extralight">Orders above $200</h3>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-[50%] text-black p-4 sm:p-5 flex items-center gap-4 sm:gap-5 justify-center border-b sm:border-b-0 lg:border-r border-gray-100">
                        <ScrollReveal className="flex gap-3 sm:gap-4 items-center">
                            <div className="flex-shrink-0">
                                <img src="/images/shipping2.svg" alt="logo" className="h-[25px] w-[25px] sm:h-[30px] sm:w-[30px]"/>
                            </div>
                            <div>
                                <h2 className="text-lg sm:text-xl">Money-back</h2>
                                <h3 className="text-xs sm:text-sm font-extralight">30 days Guarantee</h3>
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-[50%] text-black p-4 sm:p-5 flex items-center gap-4 sm:gap-5 justify-center border-b sm:border-b-0 sm:border-r border-gray-100">
                        <ScrollReveal className="flex gap-3 sm:gap-4 items-center">
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
                        <ScrollReveal className="flex gap-3 sm:gap-4 items-center">
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

            {/* RIGHT SIDEBAR (CART) */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[70vw] md:w-[50vw] lg:w-[35vw] flex flex-col border-[0.2px] border-gray-100 bg-white z-50 transform transition-transform duration-300
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
        </div>
    )
}