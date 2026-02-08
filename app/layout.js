import './globals.css';
import Nav from './components/nav';
import Footer from './components/footer';
import ClientLayout from './components/ClientLayout';

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
        <ClientLayout>
          <Nav />
          <div className="pt-[8vh]">
            {children}
          </div>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}