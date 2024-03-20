import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/img/logo.webp";
import { FaPlus } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="flex sticky top-0 z-10 justify-between items-center bg-white border border-black w-full">
      <div className="pl-6">
        <Link href={""}>
          <Image src={logo} alt="" height={80} />
        </Link>
      </div>
      <div className="flex gap-12">
        <nav className="navbar flex gap-8">
          <Link
            href={"/"}
            className="flex gap-2 items-center text-black font-medium"
          >
            <h2 className="text-[#565560] hover:text-[#cb81fa]">Home</h2>
            <div>
              <FaPlus />
            </div>
          </Link>
          <Link href={"/About"} className="flex gap-2 items-center font-medium">
            <h2 className="text-[#565560] hover:text-[#cb81fa]">Shop</h2>
            <div>
              <FaPlus />
            </div>
          </Link>
          <div className="dropdown">
            <Link href={"/Services"} className="flex items-center gap-2 font-medium">
              <h2 className="text-[#565560] hover:text-[#cb81fa]">Services</h2>
              <div>
                <FaPlus />
              </div>
            </Link>
            <div className="dropdown-options">
              <Link href={""}>Certification</Link>
              <Link href={""}>Courses</Link>
              <Link href={""}>Tutorials</Link>
              <Link href={""}>Excercies</Link>
            </div>
          </div>
          <div className="dropdown">
            <Link href={""} className="flex items-center gap-2 font-medium">
              <h2 className="text-[#565560] hover:text-[#cb81fa]">MyWorld10</h2>
              <div>
                <FaPlus />
              </div>
            </Link>
            <div className="dropdown-options">
              <Link href={'/About'}>About</Link>
              <Link href={"/TeamPage"}>Team</Link>
              <Link href={"/TeamDetail"}>Team Detail</Link>
              <Link href={"/ProjectPage"}>Project</Link>
              <Link href={"/ProjectDetailPage"}>Project Detail</Link>
            </div>
          </div>
          
          <Link
            href={"/BlogPage"}
            className="flex gap-2 items-center font-medium"
          >
            <h2 className="text-[#565560] hover:text-[#cb81fa]">Blog</h2>
            <div>
              <FaPlus />
            </div>
          </Link>
          <div className="dropdown">
            <Link href={"/ContactPage"} className="font-medium">
              <h2 className="text-[#565560] hover:text-[#cb81fa]">Contact Us</h2>
             
            </Link>
            <div className="dropdown-options">
              <Link href={""}>Create Meating</Link>
              <Link href={""}>Chat with us</Link>
              <Link href={""}>Contact Services</Link>
            </div>
          </div>
        </nav>
        <div className="flex items-center">
          <div className="pr-6">
            <FaMagnifyingGlass />
          </div>
          <div className="btn navbar-btn">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
