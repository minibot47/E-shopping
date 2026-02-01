import ScrollReveal from "./ScrollReveal";

export default function About() {
    return(
        <div className="w-full ">
            <div className="w-full h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col gap-3 items-center justify-center" style={{backgroundImage: 'url(/images/about.jpg)'}}>
                <h2 className="text-black font-medium text-5xl">A story about two Lovers</h2>
                <h3 className="font-extralight text-xl">Since 1963, we’ve pioneered the creation of beautiful clothing and footwear for all the family.</h3>
            </div>

            <div className="w-full max-w-[1440px] m-auto flex flex-col gap-10 items-center h-fit mt-20  p-5">
                <h2 className="text-5xl font-medium">Mini-Mart</h2>
                <h3 className="w-[60%] h-fit text-5xl font-extralight text-center">"Our prime aim: to conceive commodities that will delight you and accompany you for numerous years."</h3>
                <div className="w-full flex gap-5 mt-20 items-stretch">
                {/* LEFT */}
                <div
                    className="w-1/2 rounded-[30px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url(/images/about2.jpg)" }}
                />

                {/* RIGHT */}
                <div className="w-1/2 rounded-[30px] gap-4 flex flex-col justify-start px-10">
                    <h2 className="text-3xl">Who we are?</h2>

                    <h3>At Mini-Mart, we believe that eCommerce should be simple, elegant, and effective. Our template is designed to empower businesses of all sizes, providing a seamless platform to showcase products, tell your story, and connect with your customers. With a blend of modern design and intuitive functionality, Mini-Mart sets the stage for you to build a stunning online store that captures your brand's essence and drives sales effortlessly.</h3>
                    <h3>Our mission is to help entrepreneurs and businesses thrive in the digital world. With customizable layouts, responsive design, and built-in tools for growth, Sabina makes it easier than ever to create a shopping experience that stands out. </h3>

                    <img
                    src="/images/about3.jpg"
                    alt="img"
                    className="w-full mt-auto object-contain rounded-[20px]"
                    />
                </div>
                </div>

            </div>

            {/* SLIDING TEXT */}
            <div className="w-full overflow-hidden bg-[#d6bca7] py-4 mt-20 mb-20">
            <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] gap-12">
                {/* duplicated content */}
                <div className="flex items-center gap-12 whitespace-nowrap text-black  font-medium">
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
                <div className="flex items-center gap-12 whitespace-nowrap text-black  font-medium">
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

            <div className="w-full max-w-[1440px] flex flex-col items-center justify-center gap-5 h-fit m-auto mb-20">
                <h2 className="text-3xl">Join Us</h2>
                <h2 className="text-5xl font-medium">@MINI-MART</h2>
                <div className="w-full h-[45vh] flex gap-5 mt-10">
                    <div className="w-1/4 h-full rounded-[30px]  bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/about4.jpg)'}}></div>
                    <div className="w-1/4 h-full rounded-[30px]  bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/about5.jpg)'}}></div>
                    <div className="w-1/4 h-full rounded-[30px]  bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/about6.jpg)'}}></div>
                    <div className="w-1/4 h-full rounded-[30px]  bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/about7.jpg)'}}></div>
                </div>
            </div>

            <div className=" w-full bg-white m-auto h-[30vh] flex items-center max-w-[1440px]">
                <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center ">
                    <ScrollReveal className="flex gap-4">
                    <div>
                    <img src="/images/shipping.svg" alt="logo" className="h-[30px] w-[30px]"/>
                    </div>
                    <div>
                    <h2 className="text-xl">Free Shipping</h2>
                    <h3 className="text-sm font-extralight">Orders above $200</h3>
                    </div>
                    </ScrollReveal>
                </div>
                <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center ">
                <ScrollReveal className="flex gap-4">
                <div>
                    <img src="/images/shipping2.svg" alt="logo" className="h-[30px] w-[30px]"/>
                    </div>
                    <div>
                    <h2 className="text-xl">Money-back</h2>
                    <h3 className="text-sm font-extralight">30 days Guarantee</h3>
                    </div>
                </ScrollReveal>
                </div>
                <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center ">
                <ScrollReveal className="flex gap-4">
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
                <ScrollReveal className="flex gap-4">
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