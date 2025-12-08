const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Bonifilda. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-blue-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
