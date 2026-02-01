import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";


export default function Home() {
  return (
    <main className="min-h-screen flex gap-2 flex-col bg-white text-white max-w-[1440px] m-auto p-3">
      <div className="h-[80vh] w-full rounded-[30px] mb-20 p-10 flex flex-col justify-between bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/main.jpeg)'}}>
        <div className="w-full font-bold text-5xl animate-slide-in-top">STYLE REDEFINED, EFORTLESSLY YOURS</div>
        <div className="w-full flex gap-3 animate-slide-in-top" style={{animationDelay: '0.2s', animationFillMode: 'backwards'}}>
          <div className="rounded-[50px] bg-white w-fit cursor-pointer">
            <h1 className="text-xl px-5 py-3 text-black">Shop Collection</h1>
          </div>
          <div className="rounded-[50px]  w-fit cursor-pointer">
            <h1 className="text-xl px-5 py-3 text-white">Wear like a pro</h1>
          </div>
        </div>
      </div>

      <ScrollReveal className="w-full h-fit text-black flex flex-col gap-4 mb-10">
        <div>
          <h1 className="text-4xl ">New Arrivals</h1>
        </div>
        <div className="flex justify-between items-center ">
          <h2 className="font-extralight">Shop the latest styles: Stay ahead of hte curve with our newest arrivals</h2>
          <div>
            <h2 className="text-xl font-light underline">All products</h2>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full h-fit rounded-[30px] grid grid-cols-3 grid-rows-2 gap-4 mb-32">
        <div className=" w-full h-full rounded-[30px] relative overflow-hidden group cursor-pointer">
          <img src="/images/grid1.png" alt="Grid1" className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 h-[60px] w-full bg-black rounded-b-[30px] flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <h2>View Product</h2>
          </div>
        </div>
        <div className=" w-full h-full rounded-[30px] relative overflow-hidden group cursor-pointer">
          <img src="/images/grid2.png" alt="Grid2" className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 h-[60px] w-full bg-black rounded-b-[30px] flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <h2>View Product</h2>
          </div>
        </div>
        <div className=" w-full h-full rounded-[30px] relative overflow-hidden group cursor-pointer">
          <img src="/images/grid3.png" alt="Grid3" className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 h-[60px] w-full bg-black rounded-b-[30px] flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <h2>View Product</h2>
          </div>
        </div>
        <div className=" w-full h-full rounded-[30px] relative overflow-hidden group cursor-pointer">
          <img src="/images/grid4.png" alt="Grid4" className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 h-[60px] w-full bg-black rounded-b-[30px] flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <h2>View Product</h2>
          </div>
        </div>
        <div className=" w-full h-full rounded-[30px] relative overflow-hidden group cursor-pointer">
          <img src="/images/grid5.png" alt="Grid5" className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 h-[60px] w-full bg-black rounded-b-[30px] flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <h2>View Product</h2>
          </div>
        </div>
        <div className=" w-full h-full rounded-[30px] relative overflow-hidden group cursor-pointer">
          <img src="/images/grid6.png" alt="Grid6" className="w-full h-full object-cover rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"/>
          <div className="absolute bottom-0 left-0 h-[60px] w-full bg-black rounded-b-[30px] flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            <h2>View Product</h2>
          </div>
        </div>
      </ScrollReveal>

      <div className="w-full bg-gray-100 h-fit rounded-[30px] flex flex-col gap-10 items-center p-20 mb-20">
        <div className="w-1/3 h-1/3 mb-2">
          <img src="/images/stars.png" alt="stars"/>
        </div>
        <ScrollReveal className="w-[80%] h-1/3">
          <h2 className="text-black text-5xl text-center">''I love the variety of styles and the high-quality clothing on this web fashion site''</h2>
          <h2 className="text-black font-extralight text-center mt-4 ">- Some & co</h2>
        </ScrollReveal>
        <div className="w-[80%] h-1/3 relative overflow-hidden">
          <div className="flex animate-slide gap-10">
            <img src="/images/logo1.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo2.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo3.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo4.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo5.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo6.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            {/* Duplicate for seamless loop */}
            <img src="/images/logo1.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo2.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo3.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo4.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo5.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
            <img src="/images/logo6.svg" alt="stars" className="flex-shrink-0 w-auto h-[70px]"/>
          </div>
          {/* Blurred edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className=" w-full rounded-[30px] mb-32 flex flex-col items-center text-black gap-3">
        <ScrollReveal className="flex flex-col items-center justify-center gap-5 mb-5">
        <h3 className="text-4xl">Our Collections</h3>
        <h4 className="text-lg font-extralight mb-5">Inspire and let yourself be inspired, From one unique fashion to another</h4>
        </ScrollReveal>
        <div className=" w-full h-[95vh] flex gap-5">
          <div className="w-1/2 h-full rounded-[30px] p-10 bg-cover bg-center bg-no-repeat cursor-pointer" style={{backgroundImage: 'url(/images/colection1.png)'}}>
            <ScrollReveal>
              <h3 className="text-black text-4xl font-light">Women Collection</h3>
            </ScrollReveal>
          </div>
          <div className="w-1/2 h-full flex flex-col gap-5 rounded-[30px] ">
            <div className="w-full h-1/2 rounded-[30px] p-10 bg-cover bg-center bg-no-repeat cursor-pointer" style={{backgroundImage: 'url(/images/collection2.png)'}}>
              <ScrollReveal>
                <h3 className="text-black text-4xl font-light">Men Collection</h3>
              </ScrollReveal>
            </div>
            <div className="w-full h-1/2 rounded-[30px] p-10 bg-cover bg-center bg-no-repeat cursor-pointer" style={{backgroundImage: 'url(/images/collection3.png)'}}>
              <ScrollReveal>
                <h3 className="text-black text-4xl font-light">Bags</h3>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-full h-fit rounded-[30px] flex mb-20 ">
        <ScrollReveal className="w-1/2 h-full py-32 px-20 text-black gap-3  rounded-l-[30px] flex flex-col items-center  justify-center">
        <div className="flex flex-col items-center gap-3  justify-center">
          <h2 className="text-5xl  w-full">Join our newsletter.</h2>
          <h2 className="text-5xl  w-full">Enjoy big discounts.</h2>
          <h3 className="w-full font-extralight">Hear what they say about us</h3>
          <div className=" h-[45px]  flex gap-3 w-full">
            <input type="email" className="w-3/5 h-full bg-white outline-black outline-[0.1px] text-black rounded-[11px] p-5" placeholder="toludairo534@gmail.com"></input>
            <div className="w-2/5 rounded-[30px] bg-black flex items-center justify-center">
            <h2 className="text-white">Sign Up</h2></div>
          </div>
        </div>
        </ScrollReveal>
        <div className="w-1/2 rounded-r-[30px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/bottom.webp)'}}></div>
      </div>

      <div className=" w-[90%] m-auto h-[15vh] flex mb-20">
        <div className="w-1/4 h-full text-black p-5 flex items-center gap-5 justify-start border-r-[0.1px] border-gray-100">
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
        <div className="w-1/4 h-full text-black p-5 flex items-center gap-5 justify-start border-r-[0.1px] border-gray-100">
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
        <div className="w-1/4 h-full text-black p-5 flex items-center gap-5 justify-start border-r-[0.1px] border-gray-100">
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
        <div className="w-1/4 h-full text-black p-5 flex items-center gap-5 justify-start ">
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
    </main>
  );
}
