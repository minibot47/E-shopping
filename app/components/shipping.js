export default function Shipping() {
    return(
        <div className="w-full bg-gray-100 h-fit flex flex-col pl-5 pr-5 pt-5 pb-16 ">
            <div className=" w-full flex flex-col items-center justify-center gap-5 p-5 ">
                <h2>Last update: Feb 3, 2026</h2>
                <h1 className="text-4xl font-bold">Shipping Policy</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Processing Time</h2>
                <h3>All orders are processed within [timeframe, e.g., 1-3 business days]. Orders are not shipped or delivered on weekends or holidays.</h3>
                <h3 className="pl-3">. If we are experiencing a high volume of orders, there may be slight delays. You will be notified of any significant delays via email.</h3>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Shipping Destinations</h2>
                <h3>We currently ship to the following regions/countries:</h3>
                <h3 className="pl-3 font-semibold">. [List of countries/regions]</h3>
                <h3 className="pl-3">We do not ship to <span className="font-extrabold">[specific restricted areas, if any]</span>.</h3>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Order Tracking</h2>
                <h3>Once your order has shipped, you will receive a confirmation email with tracking information. You can track your order directly on the carrier’s website using the tracking number provided.</h3>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-5 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Customs, Duties, and Taxes</h2>
                <h3>For international orders, customers are responsible for any customs fees, import taxes, or duties that may apply. These charges are not included in the product or shipping cost. Please check your country’s customs policies for more details.</h3>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Lost or Damaged Packages</h2>
                <h3>We are not responsible for lost or damaged packages due to the carrier. If your order is missing or arrives damaged, please contact us at <span className="font-extrabold">toludairo534@gmail.com</span> with your order details and supporting evidence (e.g., photos).</h3>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Changes to Shipping Address</h2>
                <h3>If you need to update your shipping address after placing an order, contact us immediately at <span className="font-extrabold">toludairo534@gmail.com</span>. Address changes are only possible before the order is shipped.</h3>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Questions or Concerns?</h2>
                <h3>If you have any questions about our Shipping Policy, please reach out to us at <span className="font-extrabold">toludairo534@gmail.com</span></h3>
            </div>
        </div>
    )
}