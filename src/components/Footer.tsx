import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group inline-flex">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-hover transition-colors">
                C
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Construct<span className="text-primary">X</span>
              </span>
            </Link>
            <p className="max-w-md text-gray-400 leading-relaxed">
              We build the future with precision, durability, and unmatched expertise. From residential to commercial projects, we turn your vision into reality.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/#projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">📍</span>
                <span>123 Builders Avenue, Construct City, ST 12345</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">✉️</span>
                <span>info@constructx.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ConstructX. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              X
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              in
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              ig
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
