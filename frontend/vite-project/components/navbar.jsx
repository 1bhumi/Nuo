
// {/* shadcn
// radix ui
// ant design
// readymadeui */}

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       classNameName={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-3 transition-all duration-300 ${
//         scrolled ? "top-2 scale-95" : "top-4"
//       }`}
//     >
//       <div classNameName="flex justify-between items-center">
//         {/* Logo */}
//         <div classNameName="flex items-center">
//           <Link to="/" classNameName="text-xl font-bold text-gray-800">
//             Nuo
//           </Link>
//         </div>

//         {/* Centered Menu Items (Desktop) */}
//         <div classNameName="hidden md:flex flex-1 justify-center space-x-6">
//           <Link to="/" classNameName="text-gray-600 hover:text-gray-500">
//             Home
//           </Link>
//           <Link to="/about" classNameName="text-gray-600 hover:text-gray-500">
//             About
//           </Link>
//           <Link to="/services" classNameName="text-gray-600 hover:text-gray-500">
//             Services
//           </Link>
//           <Link to="/contact" classNameName="text-gray-600 hover:text-gray-500">
//             Contact
//           </Link>
//         </div>

//         {/* Right Side Buttons */}
//         <div classNameName="hidden md:flex space-x-4">
//           <Link to="/signin" classNameName="px-6 py-2 text-black">
//             Sign In
//           </Link>
//           <Link
//             to="/get-started"
//             classNameName="px-6 py-2 text-white bg-black rounded-full hover:bg-gray-600 transition"
//           >
//             Get Started
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div classNameName="md:hidden flex items-center">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             classNameName="text-gray-600 hover:text-gray-500 focus:outline-none text-2xl"
//           >
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div classNameName="md:hidden mt-3 bg-white rounded-lg shadow-lg p-4">
//           <Link to="/" classNameName="block py-2 text-gray-600 hover:text-gray-500">
//             Home
//           </Link>
//           <Link to="/about" classNameName="block py-2 text-gray-600 hover:text-gray-500">
//             About
//           </Link>
//           <Link to="/services" classNameName="block py-2 text-gray-600 hover:text-gray-500">
//             Services
//           </Link>
//           <Link to="/contact" classNameName="block py-2 text-gray-600 hover:text-gray-500">
//             Contact
//           </Link>
//           <Link
//             to="/signin"
//             classNameName="block py-2 text-center text-white bg-black rounded-full hover:bg-gray-600 transition my-2"
//           >
//             Sign In
//           </Link>
//           <Link
//             to="/get-started"
//             classNameName="block py-2 text-center text-white bg-black rounded-full hover:bg-gray-600 transition"
//           >
//             Get Started
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = (menu) => {
    setTimeout(() => {
      if (openDropdown === menu) {
        setOpenDropdown(null);
      }
    }, 500);
  };

  return (
    <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <nav className="flex justify-between items-center px-10 py-4">
        <div className="text-xl font-bold text-blue-700">Nuo<span className="text-white">.com</span></div>
        <ul className="flex space-x-8">
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter("sellers")}
            onMouseLeave={() => handleMouseLeave("sellers")}
          >
            <button className="text-white font-medium flex items-center hover:text-blue-800">Sellers <FaChevronDown className="ml-2" /></button>
            {openDropdown === "sellers" && (
              <div className="absolute top-10 left-0 w-80 bg-white shadow-lg rounded-lg p-4">
                <div className="flex flex-col space-y-4">
                  <div className="p-4 bg-gray-100 rounded-md">
                    <h3 className="font-semibold">List Your Startup</h3>
                    <p className="text-sm text-gray-600">Create and publish your business listing to 500k+ buyers</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-md">
                    <h3 className="font-semibold">Get help selling</h3>
                    <p className="text-sm text-gray-600">Acquisition advisory service tailored for SaaS founders</p>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li><button className="text-white hover:text-blue-800">Buyers</button></li>
          <li 
            className="relative"
            onMouseEnter={() => handleMouseEnter("pricing")}
            onMouseLeave={() => handleMouseLeave("pricing")}
          >
            <button className="text-white flex items-center hover:text-blue-800">Pricing <FaChevronDown className="ml-2" /></button>
            {openDropdown === "pricing" && (
              <div className="absolute top-10 left-0 w-60 bg-white shadow-lg rounded-lg p-4">
                <div className="flex flex-col space-y-4">
                  <div className="p-4 bg-gray-100 rounded-md">
                    <h3 className="font-semibold">Basic Plan</h3>
                    <p className="text-sm text-gray-600">Affordable pricing for startups</p>
                  </div>
                  <div className="p-4 bg-gray-100 rounded-md">
                    <h3 className="font-semibold">Premium Plan</h3>
                    <p className="text-sm text-gray-600">Advanced features for scaling businesses</p>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li><button className="text-white hover:text-blue-800">Resources</button></li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">Free SaaS valuation</button>
      </nav>
    </div>
  );
};

export default Navbar;



