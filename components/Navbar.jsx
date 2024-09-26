import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white p-3 shadow-md">
  <div className="container flex justify-between items-center"> 
    <div className="flex ">
      <Image src="/logoo.svg" alt="Logo" width={150} height={150} />
    </div>

    <div className="md:flex space-x-2 items-center ml-3">
      <Link href="/" className="text-black text-lg no-underline">
        Home
      </Link>

      <div className="dropdown">
        <button
          className="btn dropdown-toggle text-black text-lg"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Services
        </button>
      </div>

      <Link href="/indus" className="text-black text-lg border-b-2 border-[#8952FD] no-underline">
        Industries
      </Link>

      <div className="dropdown">
        <button
          className="btn dropdown-toggle text-black text-lg"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Solutions
        </button>
      </div>

      <div className="dropdown">
        <button
          className="btn dropdown-toggle text-black text-lg"
          type="button"
          id="dropdownMenuButton3"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About
        </button>
      </div>
    </div>

    <div className="md:block ml-0">
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-black">
        Get in Touch
      </button>
    </div>
  </div>
</nav>

  );
}
