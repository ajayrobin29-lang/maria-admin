"use client";

import Link from "next/link";
import { Chat, WhatsAppIcon } from "./Icons";
import ChatBox from "./ChatBox";
import { useState } from "react";

export default function PopupButtons() {

    const [openModal, setOpenModal] = useState(false);

    const handleModal = () => {
      document.body.classList.toggle('modal-open');
      setOpenModal(!openModal)
    } 
  

  return (
    <div>
      <ChatBox handleModal={handleModal} openModal={openModal} />

      <div className="fixed bottom-0 right-0 p-4 md:p-8 z-100 flex flex-col gap-8">
        <Link href="https://wa.me/+917026252255?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank" className="block w-full h-auto cursor-pointer">
      
      <WhatsAppIcon className="drop-shadow-xl w-12"/>
      </Link>

      <button className="block  cursor-pointer w-12 h-12 bg-primary-600  rounded-full mb-12 drop-shadow-md"
      onClick={handleModal}
      >
      
      <Chat className="w-12 h-12 p-2 text-black"/>
      </button>

      </div>

    </ div>
  );
}