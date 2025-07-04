import React from 'react'
import {FiMenu, FiX} from 'react-icons/fi';
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { useState , useEffect} from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    // ckeck scroll and change navbar background
useEffect(() => {
    const handleScroll = () =>{
        setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);
    //Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
    }
    const menuItems = [
        {id:"about", label:"About"},
        {id:"skills", label:"Skills"},
        {id:"experience", label:"Experience"},
        {id:"work", label:"Work"},
        {id:"education", label:"Education"},
        {id:"about", label:"About"},
    ]
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 background-blur-md shadow-md" : "bg-transparent"}`}>
        <div className='text-white py-5 flex justify-between items -center'>
            {/* logo */}
            <div className="text-lg font-semibold cursor-pointer">
            <span className='text-[#8245ec]'>&lt;</span>
            <span className='text-white'>dhruv</span>
            <span className='text-[#8245ec]'>/</span>
            <span className='text-white'>singh</span>
            <span className='text-[#8245ec]'>&gt;</span>
            </div>
            {/* Desktop Menu */}
            <ul className="md:flex space-x-8 text-gray-300">
                {menuItems.map((item)=>(
                    <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${
                        activeSection === item.id? "text-[#8245ec]" : ""
                    }`}>
                        <button onClick={() => handleMenuItemClick(item.id)}>
                            {item.label}
                            </button>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
