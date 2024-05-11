import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="list-none">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/testimonies" className="text-gray-400 hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-2">
                <i className="fas fa-map-marker-alt text-primary mr-2"></i>00100
                Street, Nairobi, Kenya
              </p>
              <p className="text-gray-400 mb-2">
                <i className="fas fa-envelope-open text-primary mr-2"></i>Africa
                Adventure.com
              </p>
              <p className="text-gray-400">
                <i className="fas fa-phone text-primary mr-2"></i>+254 792 125
                196
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex">
                <FaTwitter style={{ color: "aqua" }} />
                <FaFacebook style={{ color: "blue", marginLeft: "20px" }} />
                <FaInstagram
                  style={{ color: "purple-red", marginLeft: "20px" }}
                />
                <FaYoutube style={{ color: "red", marginLeft: "20px" }} />
                <FaLinkedin style={{ color: "purple", marginLeft: "20px" }} />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
              <form className="w-full max-w-xs">
                <div className="flex items-center">
                  <input
                    type="email"
                    className="form-input border-none mr-3 bg-gray-800 text-white placeholder-gray-500 px-4 py-2 rounded-lg focus:outline-none"
                    placeholder="Your Email"
                  />
                  <button style={{color:"white", border:"1px solid orangered", fontSize:"12px", fontWeight:"bold"}} className="btn btn-secondary px-3 py-2 rounded-lg">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center pt-8">
          <p>
            &copy;{" "}
            <a href="#" className="text-white">
              Africa Adventure.
            </a>{" "}
            All Rights Reserved. Designed by{" "}
            <a href="mailto:robinsonamianda5@gmail.com" className="text-white">
              Robinson .A
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
