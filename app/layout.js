import './globals.css';
import Nav from './components/nav';
import Footer from './components/footer';

export const metadata = {
  title: 'Next.js Tailwind Starter',
  description: 'Starter project',
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
