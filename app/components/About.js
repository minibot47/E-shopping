import ScrollReveal from "./ScrollReveal";

export default function About() {
    return(
        <div className="w-full">
            {/* HERO SECTION */}
            <div className="w-full h-[30vh] sm:h-[35vh] lg:h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col gap-2 sm:gap-3 items-center justify-center px-4" style={{backgroundImage: 'url(/images/about.jpg)'}}>
                <h2 className="text-black font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">A story about two Lovers</h2>
                <h3 className="font-extralight text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-[90%] sm:max-w-none">Since 1963, we've pioneered the creation of beautiful clothing and footwear for all the family.</h3>
            </div>

            {/* MAIN CONTENT */}
            <div className="w-full max-w-[1440px] m-auto flex flex-col gap-4 sm:gap-5 items-center h-fit mt-12 sm:mt-16 lg:mt-20 p-4 sm:p-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center">Mini-Mart</h2>
                <h3 className="w-full sm:w-[80%] lg:w-[60%] h-fit text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-center px-4">
                    "Our prime aim: to conceive commodities that will delight you and accompany you for numerous years."
                </h3>
                
                {/* WHO WE ARE SECTION */}
                <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5 mt-12 sm:mt-16 lg:mt-20 items-stretch">
                    {/* LEFT IMAGE */}
                    <div
                        className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-auto rounded-[20px] sm:rounded-[30px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url(/images/about2.jpg)" }}
                    />

                    {/* RIGHT CONTENT */}
                    <div className="w-full lg:w-1/2 rounded-[20px] sm:rounded-[30px] gap-3 sm:gap-4 flex flex-col justify-start px-4 sm:px-6 lg:px-10">
                        <h2 className="text-2xl sm:text-3xl">Who we are?</h2>
                        <h3 className="text-sm sm:text-base">
                            At Mini-Mart, we believe that eCommerce should be simple, elegant, and effective. Our template is designed to empower businesses of all sizes, providing a seamless platform to showcase products, tell your story, and connect with your customers. With a blend of modern design and intuitive functionality, Mini-Mart sets the stage for you to build a stunning online store that captures your brand's essence and drives sales effortlessly.
                        </h3>
                        <h3 className="text-sm sm:text-base">
                            Our mission is to help entrepreneurs and businesses thrive in the digital world. With customizable layouts, responsive design, and built-in tools for growth, Sabina makes it easier than ever to create a shopping experience that stands out.
                        </h3>
                        <img
                            src="/images/about3.jpg"
                            alt="img"
                            className="w-full mt-4 lg:mt-auto object-contain rounded-[15px] sm:rounded-[20px]"
                        />
                    </div>
                </div>
            </div>

            {/* SLIDING TEXT */}
            <div className="w-full overflow-hidden bg-[#d6bca7] py-3 sm:py-4 mt-10 sm:mt-12 lg:mt-14 mb-10 sm:mb-12 lg:mb-14">
                <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-8 sm:gap-12">
                    {/* duplicated content */}
                    <div className="flex items-center gap-8 sm:gap-12 whitespace-nowrap text-black text-sm sm:text-base font-medium">
                        <span>End of season sale</span>
                        <span>Shop the sale</span>
                        <span>✧</span>
                        <span>End of season sale</span>
                        <span>Shop the sale</span>
                        <span>✧</span>
                        <span>End of season sale</span>
                        <span>Shop the sale</span>
                        <span>✧</span>
                    </div>

                    {/* exact duplicate */}
                    <div className="flex items-center gap-8 sm:gap-12 whitespace-nowrap text-black text-sm sm:text-base font-medium">
                        <span>End of season sale</span>
                        <span>Shop the sale</span>
                        <span>✧</span>
                        <span>End of season sale</span>
                        <span>Shop the sale</span>
                        <span>✧</span>
                        <span>End of season sale</span>
                        <span>Shop the sale</span>
                        <span>✧</span>
                    </div>
                </div>
            </div>

            {/* INSTAGRAM GALLERY */}
            <div className="w-full max-w-[1440px] flex flex-col items-center justify-center gap-2 sm:gap-3 h-fit m-auto mb-5 p-4 sm:p-5">
                <h2 className="text-xl sm:text-2xl">Join Us</h2>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">@MINI-MART</h2>
                <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-10">
                    <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] rounded-[20px] sm:rounded-[30px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/about4.jpg)'}}></div>
                    <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] rounded-[20px] sm:rounded-[30px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/about5.jpg)'}}></div>
                    <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] rounded-[20px] sm:rounded-[30px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/about6.jpg)'}}></div>
                    <div className="w-full h-[30vh] sm:h-[40vh] lg:h-[50vh] rounded-[20px] sm:rounded-[30px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/about7.jpg)'}}></div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="w-full bg-white m-auto h-auto py-8 sm:py-0 sm:h-[30vh] flex flex-col sm:flex-row items-center max-w-[1440px]">
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
    );
}