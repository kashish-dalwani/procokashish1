import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex ml-16">
          <Image src="/logoo.svg" alt="Logo" width={150} height={150} />
        </div>

        <div className="md:flex space-x-7">
          <Link href="/" className="text-black text-xl">
            Home
          </Link>
          <Link href="/about" className="text-black text-xl">
            Services
          </Link>
          <Link href="/services" className="text-black">
            Industries
          </Link>
          <Link href="#" className="text-black">
            Solutions
          </Link>
          <Link href="/contact" className="text-black">
            About
          </Link>
        </div>

        <div className="md:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Get in touch
          </button>
        </div>
      </div>
    </nav>
  );
}
