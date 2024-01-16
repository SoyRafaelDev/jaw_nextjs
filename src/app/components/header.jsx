"use client";
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div>
        <Image src="/images/logaso.png" alt="Logo de AstuRural" width={200} height={50} />
      </div>
      <div className="flex items-center">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaTiktok />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://telegram.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaTelegramPlane />
        </a>
        <a
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </header>
  );
};

export default Header;
