

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
          <p className="text-sm text-white  bg-gray-500">&copy; {new Date().getFullYear()} <span className="text-custom-orange ">MuMair</span>. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;