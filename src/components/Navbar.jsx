import { Logo } from ".";
import { MdClose, MdMailOutline } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { IoIosCode } from "react-icons/io";
import { IoBriefcaseOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative text-[#FFFFFF] mx-auto ">
      {/* NAVBAR (fixed + blur)  mobile */}
      <article className="fixed top-0 left-0 w-full z-40 backdrop-blur-md  px-6 py-4 bg-[#222222] lg:hidden md:hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center  ">
          <Logo />
          <GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </article>
      {/* OVERLAY MENU */}
      {isMenuOpen && (
        <nav
          className="fixed inset-0 z-50 w-full max-w-2xl shadow-xl lg:hidden md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          {/* MENU PANEL */}
          <div
            className={`fixed top-0 right-0
            h-full w-3/4
            bg-[#222222] 
            flex flex-col p-6 transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-20 flex items-center justify-between">
              <a href="#home" aria-label="Go to home section">
                <Logo />
              </a>
              <MdClose
                className="text-3xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            {/* LINKS */}

            <div className="flex flex-col gap-6">
              <a
                href="#home"
                className="flex gap-2 items-center hover:bg-blue-500 p-2 hover:shadow hover:rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <GoHome className="text-xl" />
                Home
              </a>

              <a
                href="#projects"
                className="flex gap-2 items-center hover:bg-blue-500 p-2 hover:shadow hover:rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoIosCode className="text-xl" />
                Projects
              </a>

              <a
                href="#experience"
                className="flex gap-2 items-center hover:bg-blue-500 p-2 hover:shadow hover:rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <IoBriefcaseOutline className="text-xl" />
                Experience
              </a>

              <a
                href="#contact"
                className="flex gap-2 items-center hover:bg-blue-500 p-2 hover:shadow hover:rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                <MdMailOutline className="text-xl" />
                Contact
              </a>
            </div>
            {/* connection */}
            <div className="mt-20 flex gap-4 flex-col">
              <p className="font-heading">connect with me</p>
              <article className="flex gap-4 items-center text-xl">
                <a
                  href="https://github.com/JudithJude369?tab=repositories"
                  className=" hover:bg-blue-500 p-2 hover:shadow hover:rounded-[50%]"
                >
                  <FaGithub />
                </a>
                <a
                  href=" https://www.linkedin.com/in/ifunanya-mmeremikwu/"
                  className=" hover:bg-blue-500 p-2 hover:shadow hover:rounded-[50%]"
                >
                  <FaLinkedinIn />
                </a>
              </article>
            </div>
          </div>
        </nav>
      )}

      {/* desktop navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-md  px-20 py-4 bg-[#222222] lg:flex justify-between items-center hidden md:flex ">
        <Logo />

        {/* LINKS */}

        <div className="flex gap-4 items-center">
          <a href="#home" className=" hover:text-blue-500 ">
            Home
          </a>

          <a href="#projects" className=" hover:text-blue-500 ">
            Projects
          </a>

          <a
            href="#experience"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 "
          >
            Experience
          </a>

          <a
            href="#contact"
            rel="noopener noreferrer"
            className=" hover:text-blue-500 "
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
