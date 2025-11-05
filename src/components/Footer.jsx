"use client";
import Link from "next/link";
import { Email, Location, Phone } from "./Icons";
import Logo from "./Logo";
import GoogleMap from "./GoogleMap";

export default function Footer() {

  return (
<footer className="relative w-full pt-8 bg-neutral-100 pb-18 md:pb-0">
  <div className="w-full px-8 mx-auto max-w-7xl">
    <div className="grid justify-between grid-cols-1 gap-8 md:gap-4 md:grid-cols-2">
        <div>
          <Logo className="w-25 md:w-30 h-auto drop-shadow-4xl mx-auto md:mr-auto md:ml-0 py-6" />


        <div className="flex gap-4 items-start">
<Phone className="w-8 text-neutral"/>
            <p>+91 90 36 36 86 88</p>
        </div>
<br/>
        <div className="flex gap-4 items-start">
<Email className="w-8 text-neutral"/>

            <p>
            contact@mariaconcepts.com
            </p>
        </div>
<br/>

        <div className="flex gap-4 items-start">
<Location className="w-8 text-neutral"/>

            <p>

            # 4, Opp. Podar International School, <br/> Basavanapura, Gottigere Post, <br/>Off Bannerghatta Road, <br/>Bengaluru - 560 083.
            </p>
        </div>



      </div>
      <div className="grid justify-between grid-cols-3 gap-4">
        <ul>
          <p className="block mb-1 text-base font-semibold  text-secondary-800">
            Services
          </p>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Home Interiors
            </a>
          </li>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Construction
            </a>
          </li>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Renovation
            </a>
          </li>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Office Spaces
            </a>
          </li>
        </ul>
        <ul>
          <p className="block mb-1 text-base font-semibold text-secondary-800">
            Links
          </p>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="block text-secondary-700 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Blogs
            </a>
          </li>
        </ul>
        <ul>
          <p className="block mb-1 text-base font-semibold text-secondary-800">
            Associates
          </p>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Serah Constructions
            </a>
          </li>
          <li>
            <a href="#" className="block text-secondary-600 py-1 hover:text-secondary-500 focus:text-secondary-500 text-sm">
              Nilam
            </a>
          </li>
        </ul>
      </div>
    </div>
<GoogleMap className="my-6" />

    <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-secondary-200 md:flex-row md:justify-between">
      <p className="block mb-4 text-sm text-center text-secondary-500 md:mb-0">
        Copyright © 2025 
        Maria Concepts. All
        Rights Reserved.
      </p>
      <div className="flex gap-4 text-secondary-600 sm:justify-center">
        <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"></path>
          </svg>
        </a>
        <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"></path>
          </svg>
        </a>
        <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
<svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 768"><path fill="currentColor" d="M928 736q-222 32-416 32q-86 0-190-8t-165-16l-61-8q-27-5-47.5-37.5t-30-78.5t-14-86T0 461V307Q0 52 96 32Q318 0 512 0q86 0 190 8t165 16l61 8q29 4 49.5 36.5T1007 148t13 86t4 73v154q0 36-3 73t-12 85t-30 80t-51 37zM693 359L431 199q-11-10-29-5.5T384 208v352q0 11 18 15t29-6l262-160q11-10 11-25t-11-25z"/></svg>
        </a>
        <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
          <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20">
    <path fill="currentColor" d="M10.015 0C4.484 0 0 4.473 0 9.99c0 4.232 2.638 7.847 6.364 9.3c-.088-.79-.166-2.002.034-2.865c.183-.78 1.175-4.964 1.175-4.964s-.3-.6-.3-1.484c0-1.386.808-2.426 1.811-2.426c.855 0 1.268.64 1.268 1.406c0 .858-.545 2.14-.829 3.327c-.238.994.502 1.804 1.483 1.804c1.778 0 3.148-1.87 3.148-4.572c0-2.384-1.723-4.058-4.184-4.058c-2.848 0-4.518 2.135-4.518 4.333c0 .86.329 1.786.742 2.284c.083.1.094.188.071.288c-.075.312-.244.999-.279 1.135c-.044.188-.143.226-.335.138c-1.249-.575-2.032-2.398-2.032-3.872c0-3.146 2.296-6.043 6.616-6.043c3.474 0 6.175 2.472 6.175 5.769c0 3.446-2.178 6.218-5.207 6.218c-1.014 0-1.966-.524-2.304-1.149l-.625 2.374c-.225.87-.84 1.96-1.252 2.621A10.07 10.07 0 0 0 9.988 20C15.508 20 20 15.53 20 10.01C20 4.493 15.507.023 9.988.023L10.015 0Z"/>
</svg>
        </a>
    </div>
    </div>
  </div>
</footer>
  );
}