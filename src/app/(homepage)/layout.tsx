import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/ui/Navbar';
import '@/styles/globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
