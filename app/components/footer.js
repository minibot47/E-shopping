import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-[40vh] bg-black text-white">
      <div className="h-4/5 w-[95%] m-auto flex">
        {/* BRAND — deepest & slowest */}
        <div className="w-2/5 flex flex-col items-start justify-center gap-2 p-5">
          <h2 className="text-3xl slide-left-deep [animation-delay:0.2s]">
            MINI-MART
          </h2>
          <h2 className="font-extralight slide-left-medium [animation-delay:0.45s]">
            Discover timeless pieces for effortless style.
          </h2>
          <div className="flex gap-3 mt-2">
            <img
              src="/images/social.svg"
              alt="logo"
              className="w-[35px] h-[35px] rounded-full p-[2px] bg-white slide-left-soft [animation-delay:0.7s]"
            />
            <img
              src="/images/social1.svg"
              alt="logo"
              className="w-[35px] h-[35px] rounded-full p-[2px] bg-white slide-left-soft [animation-delay:0.85s]"
            />
            <img
              src="/images/social2.svg"
              alt="logo"
              className="w-[35px] h-[35px] rounded-full p-[2px] bg-white slide-left-soft [animation-delay:1s]"
            />
          </div>
        </div>

        {/* INFORMATION — medium depth */}
        <div className="w-1/5 p-5 flex flex-col gap-2 items-start justify-center">
          <h2 className="font-medium text-xl slide-left-medium [animation-delay:1.2s]">
            Information
          </h2>
          <Link href="/" className="font-extralight slide-left-soft [animation-delay:1.4s]">
            Shipping Policy
          </Link>
          <Link href="/" className="font-extralight slide-left-soft [animation-delay:1.6s]">
            Returns & Refunds
          </Link>
          <Link href="/" className="font-extralight slide-left-soft [animation-delay:1.8s]">
            Privacy Policy
          </Link>
        </div>

        {/* COMPANY — slightly deeper than info */}
        <div className="w-1/5 p-5 flex flex-col gap-2 items-start justify-center">
          <h2 className="font-medium text-xl slide-left-medium [animation-delay:2s]">
            Company
          </h2>
          <Link href="/" className="font-extralight slide-left-soft [animation-delay:2.2s]">
            About us
          </Link>
          <Link href="/" className="font-extralight slide-left-soft [animation-delay:2.4s]">
            Contact
          </Link>
          <Link href="/" className="font-extralight slide-left-soft [animation-delay:2.6s]">
            Blog
          </Link>
        </div>

        {/* CONTACT — deepest text movement */}
        <div className="w-1/5 p-5 flex flex-col gap-2 items-start justify-center">
          <h2 className="font-medium text-xl slide-left-deep [animation-delay:2.8s]">
            Contact
          </h2>
          <h2 className="font-extralight slide-left-medium [animation-delay:3s]">
            Ibadan, NG, 200253
          </h2>
          <h2 className="font-extralight slide-left-medium [animation-delay:3.2s]">
            +2347061759364
          </h2>
          <h2 className="font-extralight break-words slide-left-medium [animation-delay:3.4s]">
            toludairo534@gmail.com
          </h2>
        </div>
      </div>

      {/* COPYRIGHT — final, gentle entrance */}
      <div className="flex h-1/5 w-[95%] m-auto border-t border-gray-100">
        <h2 className="mt-3 font-extralight slide-left-soft [animation-delay:3.7s]">
          Copyright © 2026, Mini-Mart.
        </h2>
      </div>
    </footer>
  );
}
