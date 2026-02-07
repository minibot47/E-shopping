import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen flex gap-2 flex-col bg-white text-white max-w-[1440px] m-auto p-3 sm:p-5">
      {/* HERO SECTION */}
      <div className="h-[85vh] sm:h-[70vh] lg:h-[85vh] w-full rounded-[20px] sm:rounded-[30px] mb-10 sm:mb-16 p-5 sm:p-10 flex flex-col justify-between bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/main.jpeg)'}}>
        <div className="w-full font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-slide-in-top">
          STYLE REDEFINED, EFORTLESSLY YOURS
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-3 animate-slide-in-top" style={{animationDelay: '0.2s', animationFillMode: 'backwards'}}>
          <Link href="/Shop" className="rounded-[50px] w-full sm:w-fit cursor-pointer bg-white">
            <div className="rounded-[50px] w-full sm:w-fit cursor-pointer">
              <h1 className="text-base sm:text-lg lg:text-xl px-5 py-3 text-black text-center">Shop Collection</h1>
            </div>
          </Link>
          <Link href="/Shop" className="rounded-[50px] w-full sm:w-fit cursor-pointer bg-transparent border-[0.1px]">
            <div className="rounded-[50px] w-full sm:w-fit cursor-pointer">
              <h1 className="text-base sm:text-lg lg:text-xl px-5 py-3 text-white text-center">Wear Like a pro</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* NEW ARRIVALS HEADER */}
      <ScrollReveal className="w-full h-fit text-black flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-10">
        <div>
          <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">New Arrivals</h1>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <h2 className="font-extralight text-sm sm:text-base">Shop the latest styles: Stay ahead of the curve with our newest arrivals</h2>
          <div>
            <h2 className="text-base sm:text-lg lg:text-xl font-light underline leading-8">All products</h2>
          </div>
        </div>
      </ScrollReveal>

      {/* PRODUCT GRID */}
      <ScrollReveal className="w-full h-fit rounded-[20px] sm:rounded-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 sm:gap-4 mb-16 sm:mb-32">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="w-full h-[350px] sm:h-[350px] lg:h-full rounded-[20px] sm:rounded-[30px] relative overflow-hidden group cursor-pointer">
            <img src={`/images/grid${num}.png`} alt={`Grid${num}`} className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] transition-transform duration-500 ease-out group-hover:scale-110"/>
            <div className="absolute bottom-0 left-0 h-[50px] sm:h-[60px] w-full bg-black rounded-b-[20px] sm:rounded-b-[30px] flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              <h2 className="text-sm sm:text-base">View Product</h2>
            </div>
          </div>
        ))}
      </ScrollReveal>

      {/* TESTIMONIAL SECTION */}
      <div className="w-full bg-gray-100 h-fit rounded-[20px] sm:rounded-[30px] flex flex-col gap-6 sm:gap-10 items-center p-8 sm:p-12 lg:p-20 mb-12 sm:mb-20">
        <div className="w-1/2 sm:w-1/3 h-auto mb-2">
          <img src="/images/stars.png" alt="stars" className="w-full h-auto"/>
        </div>
        <ScrollReveal className="w-full sm:w-[90%] lg:w-[80%]">
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">''I love the variety of styles and the high-quality clothing on this web fashion site''</h2>
          <h2 className="text-black font-extralight text-center mt-3 sm:mt-4 text-sm sm:text-base">- Some & co</h2>
        </ScrollReveal>
        <div className="w-full sm:w-[90%] lg:w-[80%] h-auto relative overflow-hidden">
          <div className="flex animate-slide gap-6 sm:gap-10">
            <img src="/images/logo1.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo2.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo3.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo4.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo5.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo6.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            {/* Duplicate for seamless loop */}
            <img src="/images/logo1.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo2.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo3.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo4.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo5.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
            <img src="/images/logo6.svg" alt="stars" className="flex-shrink-0 w-auto h-[40px] sm:h-[50px] lg:h-[70px]"/>
          </div>
          {/* Blurred edges */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* COLLECTIONS SECTION */}
      <div className="w-full rounded-[20px] sm:rounded-[30px] mb-16 sm:mb-32 flex flex-col items-center text-black gap-3">
        <ScrollReveal className="flex flex-col items-center justify-center gap-3 sm:gap-5 mb-5">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-center">Our Collections</h3>
          <h4 className="text-base sm:text-lg font-extralight mb-3 sm:mb-5 text-center px-4">Inspire and let yourself be inspired, From one unique fashion to another</h4>
        </ScrollReveal>
        <div className="w-full h-auto flex flex-col lg:flex-row gap-3 sm:gap-5">
          {/* Women Collection - Full width on mobile */}
          <div className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[95vh] rounded-[20px] sm:rounded-[30px] p-6 sm:p-10 bg-cover bg-center bg-no-repeat cursor-pointer" style={{backgroundImage: 'url(/images/colection1.png)'}}>
            <Link href="/Shop" className="w-full h-full">
              <ScrollReveal>
                <h3 className="text-black text-2xl sm:text-3xl lg:text-4xl font-light">Women Collection</h3>
              </ScrollReveal>
            </Link>
          </div>
          {/* Men & Bags - Stack vertically */}
          <div className="w-full lg:w-1/2 h-auto flex flex-col gap-3 sm:gap-5 rounded-[20px] sm:rounded-[30px]">
            <div className="w-full h-[40vh] sm:h-[50vh] lg:h-1/2 rounded-[20px] sm:rounded-[30px] p-6 sm:p-10 bg-cover bg-center bg-no-repeat cursor-pointer" style={{backgroundImage: 'url(/images/collection2.png)'}}>
              <Link href="/Shop" className="w-full h-full">
                <ScrollReveal>
                  <h3 className="text-black text-2xl sm:text-3xl lg:text-4xl font-light">Men Collection</h3>
                </ScrollReveal>
              </Link>
            </div>
            <div className="w-full h-[40vh] sm:h-[50vh] lg:h-1/2 rounded-[20px] sm:rounded-[30px] p-6 sm:p-10 bg-cover bg-center bg-no-repeat cursor-pointer" style={{backgroundImage: 'url(/images/collection3.png)'}}>
              <Link href="/Shop" className="w-full h-full">
                <ScrollReveal>
                  <h3 className="text-black text-2xl sm:text-3xl lg:text-4xl font-light">Bags</h3>
                </ScrollReveal>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER SECTION */}
      <div className="bg-gray-100 w-full h-fit rounded-[20px] sm:rounded-[30px] flex flex-col lg:flex-row mb-12 sm:mb-20">
        <ScrollReveal className="w-full lg:w-1/2 h-full py-12 sm:py-20 lg:py-32 px-6 sm:px-12 lg:px-20 text-black gap-3 rounded-t-[20px] sm:rounded-t-[30px] lg:rounded-l-[30px] lg:rounded-tr-none flex flex-col items-center justify-center">
          <div className="flex flex-col items-center sm:items-start gap-3 justify-center w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full text-center sm:text-left">Join our newsletter.</h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl w-full text-center sm:text-left">Enjoy big discounts.</h2>
            <h3 className="w-full font-extralight text-sm sm:text-base text-center sm:text-left">Hear what they say about us</h3>
            <div className="h-fit flex flex-col items-center sm:flex-row gap-3 w-full mt-2">
              <input type="email" className="w-full sm:w-3/5 h-[45px] bg-white outline-black outline-[0.1px] text-black rounded-[11px] p-3 sm:p-5 text-sm sm:text-base" placeholder="toludairo534@gmail.com"></input>
              <div className="w-full sm:w-2/5 h-[45px] rounded-[30px] bg-black flex items-center justify-center cursor-pointer">
                <h2 className="text-white text-sm sm:text-base ">Sign Up</h2>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <div className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-auto rounded-b-[20px] sm:rounded-b-[30px] lg:rounded-r-[30px] lg:rounded-bl-none bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/images/bottom.webp)'}}></div>
      </div>

      {/* FEATURES SECTION */}
      <div className="w-full sm:w-[95%] lg:w-[90%] m-auto h-auto flex flex-col sm:flex-row mb-12 sm:mb-20">
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto text-black p-4 sm:p-5 flex items-center gap-3 sm:gap-5 justify-start border-b sm:border-b-0 sm:border-r-[0.1px] border-gray-100">
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
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto text-black p-4 sm:p-5 flex items-center gap-3 sm:gap-5 justify-start border-b sm:border-b-0 lg:border-r-[0.1px] border-gray-100">
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
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto text-black p-4 sm:p-5 flex items-center gap-3 sm:gap-5 justify-start border-b sm:border-b-0 sm:border-r-[0.1px] border-gray-100">
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
        <div className="w-full sm:w-1/2 lg:w-1/4 h-auto text-black p-4 sm:p-5 flex items-center gap-3 sm:gap-5 justify-start">
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
    </main>
  );
}