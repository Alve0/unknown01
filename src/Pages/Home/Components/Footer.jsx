import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Business Logo + Socials */}
        <aside className="flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-bold mb-4">Logo</h1>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-black hover:text-blue-600"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-black hover:text-blue-500"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-black hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-black hover:text-sky-500"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </aside>

        {/* Services */}
        <nav>
          <h6 className="font-bold mb-2">Our Services</h6>
          <ul className="space-y-1 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-primary">
                Plumbing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Drainage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Bathrooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Commercial
              </a>
            </li>
          </ul>
        </nav>

        {/* Useful Links (two-column on mobile, stacked on md+) */}
        <nav>
          <h6 className="font-bold mb-2">Useful Links</h6>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-1 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Updates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Rates
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Customer Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Locations
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Info */}
        <nav>
          <h6 className="font-bold mb-2">Contact Info</h6>
          <p className="text-sm text-gray-500">
            1 Sail Street, London, SE11 6NQ
          </p>
          <p className="text-sm text-gray-500">enquiries@PlumbingPros.com</p>
          <p className="text-sm text-gray-500">020 4527 6474</p>
          <div className="mt-2 space-y-1 text-sm text-gray-500">
            <a href="#" className="hover:text-primary">
              Customer Services
            </a>
            <br />
            <a href="#" className="hover:text-primary">
              Contact Us
            </a>
            <br />
            <a href="#" className="hover:text-primary">
              Locations
            </a>
          </div>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p className="w-full md:w-auto text-center md:text-left">
          © Plumbing Pros. All Rights Reserved
        </p>
        <p className="w-full md:w-auto text-center md:text-right">
          Website by{" "}
          <a href="#" className="hover:text-primary">
            IH Adventure And Creative
          </a>
        </p>
      </div>
    </footer>
  );
}
