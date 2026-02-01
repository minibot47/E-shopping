import ScrollReveal from "./ScrollReveal";

export default function Contact() {
    return(
        <div className="w-full  ">
            <div className="w-full h-[35vh] bg-cover bg-center bg-no-repeat flex flex-col gap-3 mb-5 items-center justify-center" style={{backgroundImage: 'url(/images/contact.jpg)'}}>
                <h2 className="text-black font-medium text-5xl">Wear like a pro</h2>
                <h3 className="font-extralight text-xl">You have about our products or our shop, or even just a message to say hi!</h3>
            </div>

            <div className=" w-full h-fit mb-20 mt-10  max-w-[1440px] m-auto flex flex-col gap-5 items-center justify-center p-10 ">
                <h3 className="text-5xl font-light">Contact Us</h3>
                <h3 className=" font-light">We love to hear from our customers, so please feel free to contact us with any feedback or questions</h3>
                <div className="w-[70%] h-[50vh] flex items-stretch mt-20 mb-10 gap-10 ">
                {/* LEFT — form controls height */}
                    <div className="w-1/2 flex flex-col justify-center gap-5">
                        <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-extralight">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Jane Smith"
                            className="w-full h-[45px] border-[#a17c62] border-[0.1px] rounded-[12px] p-2 outline-none"
                        />
                        </div>

                        <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-extralight">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@gmail.com"
                            className="w-full h-[45px] rounded-[12px] border-[#D1B7A4] border-[0.1px] p-2 outline-none"
                        />
                        </div>

                        <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-extralight">Message</label>
                        <textarea
                            id="message"
                            placeholder="Write here..."
                            className="w-full min-h-[140px] rounded-[12px] border-[#D1B7A4] border-[0.1px] p-2 outline-none"
                        />
                        </div>

                        <button className="bg-[#D1B7A4] text-black w-full text-xl rounded-[12px] p-3 cursor-pointer">
                        Submit
                        </button>
                    </div>

                    {/* RIGHT — image stretches to match left */}
                    <div className="w-1/2 flex item,">
                        <img
                        src="/images/contact2.jpg"
                        alt="contact"
                        className="w-full h-full object-cover rounded-[30px]"
                        />
                    </div>
                </div>


            </div>

            <div className=" w-[80%] max-w-[1440px]  m-auto h-[30vh] flex items-center">
                <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center border-r-[0.1px] border-black">
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
                <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center border-r-[0.1px] border-black">
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
                <div className="w-1/4 h-[50%] text-black p-5 flex items-center gap-5 justify-center border-r-[0.1px] border-black">
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
    )
}