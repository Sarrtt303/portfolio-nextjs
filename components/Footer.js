

const Footer = () => {
    return (
      <footer className="bg-gray-100 text-black py-8">
        <div className="container mx-auto px-4 text-center">
          <img src="/logo.png" alt="Logo" className="h-12 w-279 mx-auto mb-4" />
          <nav className="mb-4">
            <ul className="flex justify-center space-x-6">
              <li><a href="#home" className="hover:text-gray-300">Home</a></li>
              <li><a href="#about" className="hover:text-gray-300">About Me</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#testimonials" className="hover:text-gray-300">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
          {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-4 mb-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/Facebook.png" alt="Facebook" className="h-5 w-a" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/Instagram.png" alt="Instagram" className="h-5 w-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/Twitter.png" alt="Twitter" className="h-5 w-4" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="/LinkedIn.png" alt="LinkedIn" className="h-5 w-4" />
          </a>
        </div>
        <div className="bg-gray-500 py-4 mt-4 w-full">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} <span className="text-custom-orange">MuMair</span>. All rights reserved.
          </p>
        </div>        </div>
      </footer>
    );
  };
  
  export default Footer;