import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 ">
        <div className="container mx-auto text-center space-y-4 px-4 lg:px-0">
          <p className="text-lg font-medium">
            "Crafted with care to bring you style and ease, this site is all about a seamless shopping experience. Enjoy exploring!"
          </p>
          <p className="font-bold text-gray-400">Tamanna Singh, CEO of AuraMart</p>
  
          <div className="flex justify-center space-x-6 text-sm font-light mt-4">
            <a href="/about" className="hover:underline">About Us</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
          
          {/* <div className="mt-4 flex justify-center gap-4">
            <Image src="/facebook-icon.svg" width={24} height={24} alt="Facebook" />
            <Image src="/twitter-icon.svg" width={24} height={24} alt="Twitter" />
            <Image src="/instagram-icon.svg" width={24} height={24} alt="Instagram" />
          </div> */}

<div className="mt-4 flex justify-center gap-4 cursor-pointer">
                        <FaFacebook /><FaInstagram /><FaTwitter /><FaLinkedin />
                    </div>
                   
  
          <p className="text-xs text-gray-500 mt-6">© 2024 AuraMart. All rights reserved.</p>
        </div>
      </footer>
    );
  };


  
  export default Footer;
  