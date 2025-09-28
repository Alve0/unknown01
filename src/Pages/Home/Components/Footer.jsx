import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-bold mb-4">Logo</h1>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600 text-black">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-blue-500 text-black">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="hover:text-pink-500 text-black">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-sky-500 text-black">
              <FaTwitter size={24} />
            </a>
          </div>
        </aside>

        <nav>
          <h6 className="font-bold mb-2">Our Services</h6>
          <ul className="space-y-1 text-sm text-gray-500">
            <li>
              <a className="hover:text-primary">Plumbing</a>
            </li>
            <li>
              <a className="hover:text-primary">Drainage</a>
            </li>
            <li>
              <a className="hover:text-primary">Bathrooms</a>
            </li>
            <li>
              <a className="hover:text-primary">Commercial</a>
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className="font-bold mb-2">Useful Links</h6>
          <ul className="space-y-1 text-sm text-gray-500">
            <li>
              <a className="hover:text-primary">About Us</a>
            </li>
            <li>
              <a className="hover:text-primary">Updates</a>
            </li>
            <li>
              <a className="hover:text-primary">Rates</a>
            </li>
            <li>
              <a className="hover:text-primary">Sitemap</a>
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className="font-bold mb-2">Contact Info</h6>
          <p className="text-sm text-gray-500">
            1 Sail Street, London, SE11 6NQ
          </p>
          <p className="text-sm text-gray-500">enquiries@PlumbingPros.com</p>
          <p className="text-sm text-gray-500">020 4527 6474</p>
          <div className="mt-2 space-y-1 text-sm text-gray-500">
            <a className="hover:text-primary">Customer Services</a>
            <br />
            <a className="hover:text-primary">Contact Us</a>
            <br />
            <a className="hover:text-primary">Locations</a>
          </div>
        </nav>
      </div>

      <div className=" mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© Plumbing Pros. All Rights Reserved</p>
        <p>Website by IH Adventure And Creative</p>
      </div>
    </footer>
  );
}
