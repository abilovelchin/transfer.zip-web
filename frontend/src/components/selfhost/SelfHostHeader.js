import { useState, useMemo, useContext } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import BIcon from "../BIcon";
import { Link } from "react-router-dom";

import logo from "../../img/icon.png";
const products = [
  {
    name: "Quick Share",
    description: "Send and receive end-to-end encrypted files.",
    href: "/quick-share",
    icon: "grid-fill",
  },
  {
    name: "Zip",
    description: "Create zip archives in the browser.",
    href: "/tools/zip-files-online",
    icon: "lightbulb",
  },
  {
    name: "Unzip",
    description: "View zip archives in the browser.",
    href: "/tools/unzip-files-online",
    icon: "grid-fill",
  },
  {
    name: "HEIC to JPG",
    description: "Convert HEIC files in the browser.",
    href: "/tools/heic-convert",
    icon: "transparency",
  },
];
const callsToAction = [
  // { name: 'FAQ', href: "/#faq", icon: "question-lg" },
  // { name: 'Contact', href: `mailto:${process.env.REACT_APP_CONTACT_EMAIL}`, icon: "envelope-fill" },
];

const ctaLink = "https://github.com/robinkarlberg/transfer.javascript.az-web";
const ctaText = "GitHub";

export default function SelfHostHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur bg-gray-50 bg-opacity-70 fixed top-0 left-0 w-full z-10 border-b">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-x-1">
            {/* <span className="sr-only">{process.env.REACT_APP_SITE_NAME}</span> */}
            {/* <img
              alt="Logo"
              src={logo}
              className="h-8 w-auto"
            /> */}
            <span className="font-semibold">
              {process.env.REACT_APP_SITE_NAME}
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <BIcon name={"list"} aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Tools
              <BIcon
                name={"chevron-down"}
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {({ close }) => (
                <>
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <BIcon
                            name={item.icon}
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-primary"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            onClick={close}
                            to={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link
                        onClick={close}
                        key={item.name}
                        to={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <BIcon
                          name={item.icon}
                          center
                          aria-hidden="true"
                          className="size-5 flex-none text-gray-400"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </PopoverPanel>
          </Popover>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <Link to={ctaLink} className="text-sm/6 font-semibold text-gray-900">
            {ctaText} <span aria-hidden="true">&rarr;</span>
          </Link> */}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="font-semibold">
                {process.env.REACT_APP_SITE_NAME}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <BIcon name={"x-lg"} aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {[...products, ...callsToAction].map((item) => (
                  <a
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-lg p-2 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
