const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>

        <ul className="hidden md:flex gap-8 text-slate-300 font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-400 transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
