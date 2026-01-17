export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8 sm:py-12 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white">
              BetaForge
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Intelligent quiz platform for modern learners
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-white">
              Product
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
          <p>&copy; 2025 BetaForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
