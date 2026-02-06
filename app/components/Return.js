export default function Shipping() {
    return(
        <div className="w-full bg-gray-100 h-fit flex flex-col pl-5 pr-5 pt-5 pb-16 ">
            <div className=" w-full flex flex-col items-center justify-center gap-5 p-5 ">
                <h2>Last update: Feb 3, 2026</h2>
                <h1 className="text-4xl font-bold">Returns & Refunds</h1>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Returns</h2>
                <h3>We want you to be completely satisfied with your purchase. If you are not happy with your item, you may return it within [timeframe, e.g., 14 or 30 days] of receipt for a refund or exchange. To be eligible for a return:</h3>
                <ul className="list-disc pl-5 mb-4">
                    <li>The item must be unused, in its original packaging, and in the same condition as when you received it.</li>
                    <li>A proof of purchase (e.g., receipt or order confirmation) is required.</li>
                </ul>
                <h2>Certain types of items are <span className="font-extrabold">non-returnable</span>, such as:</h2>
                <ul className="list-disc pl-5 mb-4">
                    <li>Perishable goods (e.g., food, flowers).</li>
                    <li>Custom or personalized products.</li>
                    <li>Downloadable software or digital products.</li>
                    <li>Items on sale or clearance (if applicable).</li>
                </ul>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Process for Returns</h2>
                <ol className="list-decimal pl-5 mb-2">
                    <li>To initiate a return, please contact us at <span className="font-extrabold">toludairo534@gmail.com</span> with your order details.</li>
                    <li>Once your return is approved, you will receive instructions on how and where to send your item.</li>
                    <li>Customers are responsible for return shipping costs unless the item is defective or incorrect.</li>
                </ol>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Refunds</h2>
                <h3>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund.</h3>
                <ul className="list-disc pl-5">
                    <li>If approved, the refund will be processed back to your original payment method within <span className="font-extrabold">[timeframe, e.g., 5–10 business days]</span>.</li>
                    <li>Shipping costs (if applicable) are non-refundable.</li>
                </ul>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-5 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Late or Missing Refunds</h2>
                <h3>If you haven’t received your refund after the stated processing time:</h3>
                <ol className="list-decimal pl-5">
                    <li>Check your bank account or contact your credit card provider.</li>
                    <li>If the issue persists, contact us at <span className="font-extrabold">toludairo534@gmail.com</span> for assistance.</li>
                </ol>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Exchanges</h2>
                <h3>We only replace items if they are defective, damaged, or incorrect. If you need an exchange, contact us at <span className="font-extrabold">toludairo534@gmail.com</span> for further instructions.</h3>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-5 max-w-[1440px] m-auto">
                <h2 className="text-2xl font-bold">Exceptions</h2>
                <h3>If your order arrives damaged or defective, please notify us immediately with photographic evidence. We will resolve the issue promptly with a refund or replacement.</h3>
                <h3>If you have any further questions about our Return & Refund Policy, feel free to reach out to us at<span className="font-extrabold"> toludairo534@gmail.com</span></h3>
            </div>
        </div>
    )
}