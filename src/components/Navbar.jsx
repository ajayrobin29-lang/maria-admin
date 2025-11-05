'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";
import Logo from "./Logo";
import ContactForm from "./ContactForm";


export default function Navbar() {
  const [isOpenContact, setIsOpenContact] = useState(false);
  const pathname = usePathname();

    const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if ( window.scrollY > 0) {
        // scrolling down
        setHidden(true);
      } else {
        // scrolling up
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
    <nav className={`absolute md:fixed z-100 w-full transition ${
      hidden ? " md:bg-white md:text-neutral-700 md:shadow-lg" : "bg-none text-white"
    }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition`}>
        <div className="flex justify-between h-24 items-center ">

          {/* Desktop Menu */}
          {/* Logo */}
          <Link href="/" className="p-2">

          <Logo className="w-25 md:w-30 h-auto drop-shadow-4xl" />

          </Link>
          <div className="fixed scroll-none md:relative hidden md:flex space-x-8 items-center">
            <Link href="/" className={` ${(pathname === '/') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              Home
            </Link>
            <Link href="/about" className={` ${(pathname === '/about') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              About
            </Link>
            <Link href="/services" className={` ${(pathname === '/services') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              Services
            </Link>
            <Link href="/gallery" className={` ${(pathname === '/gallery') && 'border-b'} font-semibold hover:text-primary-200 hover:border-primary-200 uppercase transition`}>
              Gallery
            </Link>
            <button onClick={() => setIsOpenContact(true) } className={`bg-primary text-neutral-700 py-2 px-4 rounded-full ${(pathname === '/contact') && 'border-b'} font-semibold hover:shadow-md hover:text-neutral-700 hover:border-primary-200 uppercase transition`}>
              GET A FREE QUOTE
            </button>
          </div>
        </div>
      </div>
    </nav>

      <ContactForm isOpenContact={isOpenContact} setIsOpenContact={setIsOpenContact} />

   </>
  );
}
