import './globals.css';
import Nav from './components/nav';
import Footer from './components/footer';

export const metadata = {
  title: 'Mini Mart -  Ecommerce Marketplace',
  description: 'E-commerce Project',
  icons: {
    icon: '/images/cart.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Nav />
        <div className="pt-[8vh]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
