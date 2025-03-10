import React from "react";
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import "../src/App.css";

const Footer = () => {
  return (
    <footer className="bg-slate-100 pt-6 pb-4 px-6 font-[sans-serif] tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Logo/Text Section */}
          <div className="lg:flex lg:items-center">
            <h2 className="text-black text-2xl font-bold">Nuo</h2>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg mb-4 text-black">Useful links</h4>
            <ul className="space-y-2 pl-2">
              <li><a href="#" className="text-black hover:text-blue text-sm">Featured</a></li>
              <li><a href="#" className="text-black hover:text-black text-sm">New Arrivals</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h4 className="text-lg mb-4 text-black">Information</h4>
            <ul className="space-y-2 pl-2">
              <li><a href="#" className="text-black hover:text-black text-sm">About Us</a></li>
              <li><a href="#" className="text-black hover:text-black text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-black hover:text-black text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="#" className="text-black hover:text-black">
            <InstagramLogoIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-black hover:text-black">
            <TwitterLogoIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-black hover:text-black">
            <LinkedInLogoIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-black text-sm mt-6 text-center">© Nuo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
