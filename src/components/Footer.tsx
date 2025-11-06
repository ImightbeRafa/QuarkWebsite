import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Q</span>
              </div>
              <span className="text-xl font-bold">Quark Costa Rica</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional laser engraving services for wood, steel, tumblers,
              stone, and more. Creating custom solutions for businesses and
              individuals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/quark.cr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#b2b"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  B2B Solutions
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Costa Rica</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@quarkcostarica.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@quarkcostarica.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Contact via Instagram</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} Quark Costa Rica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
