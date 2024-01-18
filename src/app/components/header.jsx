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
import WeatherInfo from './WeatherInfo';
import MaxWidthWrapper from './MaxWidhtWrapper';

const Header = () => {
  return (
    <>
    <MaxWidthWrapper>
    <header className="flex flex-wrap items-center justify-center w-full  gap-12">
      <div>
        <Image src="/images/logo.png" alt="Logo de AstuRural" width={250} height={100} />
      </div>

      <div>
        <WeatherInfo />
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
    </MaxWidthWrapper>
    </>
  );
};

export default Header;
