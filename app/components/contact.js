import ScrollReveal from "./ScrollReveal";

export default function Contact() {
    return(
        <div className="w-full">
            {/* HERO SECTION */}
            <div className="w-full h-[30vh] sm:h-[35vh] bg-cover bg-center bg-no-repeat flex flex-col gap-2 sm:gap-3 mb-5 items-center justify-center px-4" style={{backgroundImage: 'url(/images/contact.jpg)'}}>
                <h2 className="text-black font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Wear like a pro</h2>
                <h3 className="font-extralight text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-[90%] sm:max-w-none">You have about our products or our shop, or even just a message to say hi!</h3>
            </div>

            {/* CONTACT FORM SECTION */}
            <div className="w-full h-fit mb-10 mt-6 sm:mt-10 max-w-[1440px] m-auto flex flex-col gap-3 sm:gap-4 items-center justify-center p-4 sm:p-6 lg:p-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center">Contact Us</h3>
                <h3 className="font-light text-sm sm:text-base text-center px-4">We love to hear from our customers, so please feel free to contact us with any feedback or questions</h3>
                
                <div className="w-full lg:w-[70%] h-auto flex flex-col lg:flex-row items-stretch mt-10 sm:mt-16 lg:mt-20 mb-6 sm:mb-10 gap-6 sm:gap-8 lg:gap-10">
                    {/* LEFT — FORM */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 sm:gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="font-extralight text-sm sm:text-base">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Jane Smith"
                                className="w-full h-[40px] sm:h-[45px] border-[#a17c62] border-[0.1px] rounded-[12px] p-2 outline-none text-sm sm:text-base"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-extralight text-sm sm:text-base">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                className="w-full h-[40px] sm:h-[45px] rounded-[12px] border-[#D1B7A4] border-[0.1px] p-2 outline-none text-sm sm:text-base"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="font-extralight text-sm sm:text-base">Message</label>
                            <textarea
                                id="message"
                                placeholder="Write here..."
                                className="w-full min-h-[120px] sm:min-h-[140px] rounded-[12px] border-[#D1B7A4] border-[0.1px] p-2 outline-none text-sm sm:text-base"
                            />
                        </div>

                        <button className="bg-[#D1B7A4] text-black w-full text-lg sm:text-xl rounded-[12px] p-2.5 sm:p-3 cursor-pointer">
                            Submit
                        </button>
                    </div>

                    {/* RIGHT — IMAGE */}
                    <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-auto flex">
                        <img
                            src="/images/contact2.jpg"
                            alt="contact"
                            className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px]"
                        />
                    </div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="w-full sm:w-[90%] lg:w-[80%] max-w-[1440px] m-auto h-auto py-8 sm:py-0 sm:h-[30vh] flex flex-col sm:flex-row items-center">
                <div className="w-full sm:w-1/2 lg:w-1/4 h-auto sm:h-[50%] text-black p-4 sm:p-5 flex items-center gap-4 sm:gap-5 justify-center border-b sm:border-b-0 sm:border-r-[0.1px] border-black">
                    <ScrollReveal className="flex gap-3 sm:gap-4 items-center w-full">
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
                    <ScrollReveal className="flex gap-3 sm:gap-4 items-center w-full">
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
                    <ScrollReveal className="flex gap-3 sm:gap-4 items-center w-full">
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
                    <ScrollReveal className="flex gap-3 sm:gap-4 items-center w-full">
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
    )
}