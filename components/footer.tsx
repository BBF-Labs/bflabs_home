export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              BetaForge
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Intelligent quiz platform for modern learners
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Product
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-600">
              <li>
                <a href="#" className="hover:text-black">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-600">
          <p>&copy; 2025 BetaForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
