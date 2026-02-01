import Link from "next/link";


export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[8vh] w-full m-auto text-black flex justify-between border-b-[0.1px] border-gray-100 animate-nav-slide-in">
        <div className="max-w-[1440px] w-full flex m-auto h-full px-5 ">
            <div className="w-1/3 flex items-center  gap-7">
                <Link href="/Shop" className="text-xl font-extralight">Shop</Link>
                <Link href="/About" className="text-xl font-extralight">About</Link>
                <Link href="/Contact" className="text-xl font-extralight">Contact</Link>
            </div>
            <Link href="/" className="w-1/3 flex items-center justify-center cursor-pointer">
                <div className=" flex items-center justify-center ">
                    <img src="/images/mini.png" alt="LOGO" className="h-[90px] w-[90px]"/>
                </div>
            </Link>

            <div className="flex w-1/3 items-center gap-7 justify-end">
                <div className="flex">
                <img src="/images/search.svg" alt="search icon" className="w-[30px] h-[30px] cursor-pointer"/>
                </div>
                <div className="flex items-center gap-3 justify-center">
                <img src="/images/cart.png" alt="shop" className="w-[30px] h-[30px] cursor-pointer"/>
                <div className="text-white rounded-full w-[30px] h-[30px] flex items-center justify-center bg-black">0</div>
                </div>
            </div>
        </div>

    </nav>
  );
}
