import { Link } from "react-router-dom";

import logo from "../img/icon.png";
import BIcon from "./BIcon";

export default function Footer({}) {
  return (
    <footer className="bg-white --dark:bg-gray-900 z-10 relative">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logo} className="h-8 me-1" alt="Company Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap --dark:text-white">
                {process.env.REACT_APP_SITE_NAME}
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
            <div>
              <h5 className="mb-6 text-sm font-semibold text-gray-900 uppercase --dark:text-white">
                Tools
              </h5>
              <ul className="text-gray-500 --dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="/tools/zip-files-online"
                    className="hover:underline "
                  >
                    Zip Files Online
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/tools/unzip-files-online"
                    className="hover:underline"
                  >
                    Unzip Files Online
                  </Link>
                </li>
                <li>
                  <Link to="/tools/heic-convert" className="hover:underline">
                    Convert HEIC to JPG
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 text-sm font-semibold text-gray-900 uppercase --dark:text-white">
                <a
                  className="hover:underline"
                  href="https://blog.transfer.zip/"
                >
                  Blog
                </a>
              </h5>
              <ul className="text-gray-500 --dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://blog.transfer.zip/2025/04/05/how-to-send-large-video-files.html"
                    className="hover:underline "
                  >
                    Send Large Video Files
                  </Link>
                </li>
                {/* <li className="mb-4">
                  <Link to="https://blog.transfer.zip/2025/04/01/android-file-transfer-for-mac.html" className="hover:underline ">Android to Mac File Transfer</Link>
                </li> */}
                <li className="mb-4">
                  <Link
                    to="https://blog.transfer.zip/2025/03/07/how-send-100gb-files-for-free.html"
                    className="hover:underline "
                  >
                    Send 100GB Files Free
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://blog.transfer.zip/2025/03/08/how-send-large-audio-files.html"
                    className="hover:underline"
                  >
                    Send Large Audio Files
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 text-sm font-semibold text-gray-900 uppercase --dark:text-white">
                Resources
              </h5>
              <ul className="text-gray-500 --dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href={`mailto:${process.env.REACT_APP_SUPPORT_EMAIL}`}
                    className="hover:underline"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/robinkarlberg/transfer.zip-web?tab=readme-ov-file#self-hosting"
                    className="hover:underline"
                  >
                    Self Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 text-sm font-semibold text-gray-900 uppercase --dark:text-white">
                Legal
              </h5>
              <ul className="text-gray-500 --dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/legal/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/legal/terms-and-conditions"
                    className="hover:underline"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/legal/impressum" className="hover:underline">
                    Impressum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto --dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
  );
}
