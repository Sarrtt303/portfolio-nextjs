const Header = () => {
  return (
    <header className="bg-white text-black py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 w-279 mr-2" />
          
        </div>
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-6 ml-20">
            <li><a href="#home" className="hover:text-gray-800">Home</a></li>
            <li><a href="#about" className="hover:text-gray-800">About Me</a></li>
            <li><a href="#projects" className="hover:text-gray-800">Projects</a></li>
            <li><a href="#testimonials" className="hover:text-gray-800">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-gray-00">Contact</a></li>
            <li><a href="/cv.pdf" download className="hover:text-gray-800 text-white bg-custom-orange rounded p-2">Download CV</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
