import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full min-h-[40vh] bg-black text-white">
      <div className="min-h-[32vh] w-[95%] m-auto flex flex-col md:flex-row py-8 md:py-0">
        {/* BRAND — deepest & slowest */}
        <div className="w-full md:w-2/5 flex flex-col items-start justify-center gap-2 p-5 md:p-5">
          <h2 className="text-2xl sm:text-3xl slide-left-deep [animation-delay:0.2s]">
            MINI-MART
          </h2>
          <h2 className="font-extralight text-sm sm:text-base slide-left-medium [animation-delay:0.45s]">
            Discover timeless pieces for effortless style.
          </h2>
          <div className="flex gap-3 mt-2">
            <Link target="blank" href="https://www.facebook.com/profile.php?id=100025107875695">
              <img
                src="/images/social.svg"
                alt="logo"
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] rounded-full p-[2px] bg-white slide-left-soft [animation-delay:0.7s]"
              />
            </Link>
            <Link target="blank" href="https://www.instagram.com/max_kai_47">
              <img
                src="/images/social1.svg"
                alt="logo"
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] rounded-full p-[2px] bg-white slide-left-soft [animation-delay:0.85s]"
              />
            </Link>
            <Link target="blank" href="https://x.com/toludairo534">
              <img
                src="/images/social2.svg"
                alt="logo"
                className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] rounded-full p-[2px] bg-white slide-left-soft [animation-delay:1s]"
              />
            </Link>
          </div>
        </div>

        {/* INFORMATION — medium depth */}
        <div className="w-full md:w-1/5 p-5 flex flex-col gap-2 items-start justify-center">
          <h2 className="font-medium text-lg sm:text-xl slide-left-medium [animation-delay:1.2s]">
            Information
          </h2>
          <Link href="/Shipping" className="font-extralight text-sm sm:text-base slide-left-soft [animation-delay:1.4s]">
            Shipping Policy
          </Link>
          <Link href="/Return" className="font-extralight text-sm sm:text-base slide-left-soft [animation-delay:1.6s]">
            Returns & Refunds
          </Link>
          <Link href="/Policy" className="font-extralight text-sm sm:text-base slide-left-soft [animation-delay:1.8s]">
            Privacy Policy
          </Link>
        </div>

        {/* COMPANY — slightly deeper than info */}
        <div className="w-full md:w-1/5 p-5 flex flex-col gap-2 items-start justify-center">
          <h2 className="font-medium text-lg sm:text-xl slide-left-medium [animation-delay:2s]">
            Company
          </h2>
          <Link href="/About" className="font-extralight text-sm sm:text-base slide-left-soft [animation-delay:2.2s]">
            About us
          </Link>
          <Link href="/Contact" className="font-extralight text-sm sm:text-base slide-left-soft [animation-delay:2.4s]">
            Contact
          </Link>
          <Link href="/Shop" className="font-extralight text-sm sm:text-base slide-left-soft [animation-delay:2.6s]">
            Shop
          </Link>
        </div>

        {/* CONTACT — deepest text movement */}
        <div className="w-full md:w-1/5 p-5 flex flex-col gap-2 items-start justify-center">
          <h2 className="font-medium text-lg sm:text-xl slide-left-deep [animation-delay:2.8s]">
            Contact
          </h2>
          <h2 className="font-extralight text-sm sm:text-base slide-left-medium [animation-delay:3s]">
            Ibadan, NG, 200253
          </h2>
          <h2 className="font-extralight text-sm sm:text-base slide-left-medium [animation-delay:3.2s]">
            +2347061759364
          </h2>
          <h2 className="font-extralight text-sm sm:text-base break-words slide-left-medium [animation-delay:3.4s]">
            toludairo534@gmail.com
          </h2>
        </div>
      </div>

      {/* COPYRIGHT — final, gentle entrance */}
      <div className="flex min-h-[8vh] w-[95%] m-auto border-t border-gray-100">
        <h2 className="mt-3 font-extralight text-xs sm:text-sm md:text-base slide-left-soft [animation-delay:3.7s]">
          Copyright © 2026, Mini-Mart.
        </h2>
      </div>
    </footer>
  );
}