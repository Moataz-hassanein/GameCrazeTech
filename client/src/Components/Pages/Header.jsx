import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import { TiShoppingCart } from "react-icons/ti";

import { useAuth0 } from "@auth0/auth0-react";

const products = [
  {
    name: "Motherboards",
    icon: ChartPieIcon,
    path: "/motherboard",
  },
  {
    name: "RAM",
    icon: CursorArrowRaysIcon,
    path: "/ram",
  },
  {
    name: "Graphic Cards",
    icon: FingerPrintIcon,
    path: "/graphicCard",
  },
  {
    name: "SSD",
    icon: SquaresPlusIcon,
    path: "/ssd",
  },
  {
    name: "Processors",
    icon: ArrowPathIcon,
    path: "/processor",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <header
      className="bg-sky-950 sticky top-0 z-50"
      style={{ boxShadow: "0px 12px 16px -1px rgba(0,0,0,0.20)" }}
    >
      <nav
        className="flex items-center justify-between p-10  lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/gameList" className=" -ml-2">
            <img
              className="h-10 w-60"
              src="https://res.cloudinary.com/gct3/image/upload/v1684487885/GameTech%20Logo/Screenshot_from_2023-05-10_22-59-49-removebg-preview_xcfvvb_pl8bb3.png"
            ></img>
          </Link>
        </div>
        {/* Hamburger menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Popover className="relative ">
            <Popover.Button className="flex items-center gap-x-1 text-lg font-semibold leading- text-white focus:border-none focus:outline-none ">
              PC Components
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-1 bg-gray-100">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-md leading-6 hover:bg-gray-200"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray">
                        <item.icon
                          className="h-6 w-6 text-gray group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.path}
                          className="block font-semibold text-gray-900 underline-none"
                          style={{ textDecoration: "none" }}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to="/readyPc"
            className="text-lg font-semibold leading-6 text-white"
            style={{ textDecoration: "none" }}
          >
            Ready PC
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          {isAuthenticated && (
            <p className="text-white font-bold  flex items-center">
              <img
                src={user.picture}
                alt={user.name}
                className="h-10 w-10 rounded-full mr-1"
              />
              <span className="mr-3">{user.name}</span>
            </p>
          )}

          <div className="flex items-center text-md font-semibold leading-6 text-white">
            {isAuthenticated ? (
              <span
                className="ml-2"
                onClick={() =>
                  logout({
                    logoutParams: {
                      returnTo: `${window.location.origin}/gameList`,
                    },
                  })
                }
              >
                <img
                  src="https://res.cloudinary.com/duyuo6if6/image/upload/c_scale,h_42/v1683755398/GameTech%20Logo/logout_bptxbp.png"
                  alt="logo"
                  className="cursor-pointer"
                />
              </span>
            ) : (
              <span className="" onClick={() => loginWithRedirect()}>
                <img
                  src="https://res.cloudinary.com/duyuo6if6/image/upload/c_scale,h_42/v1683755269/GameTech%20Logo/login_gmdkz9.png"
                  alt="logo"
                  className="cursor-pointer"
                />
              </span>
            )}
          </div>

          <Link to="/cart" className="flex items-center leading-6 text-white">
            <TiShoppingCart className="ml-2 text-3xl" />
          </Link>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        //? Mobile menu
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-sky-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-10">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="mt-5 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-2 text-white hover:bg-slate-400 focus:outline-none ">
                        PC Components
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-200 hover:bg-slate-400  hover:decoration-inherit hover:text-white"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  to="/readyPc"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#525152] hover:no-underline"
                >
                  Ready PC
                </Link>
              </div>
              <div className="py-6">
                {isAuthenticated ? (
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#525152]"
                    onClick={() =>
                      logout({
                        logoutParams: {
                          returnTo: `${window.location.origin}/gameList`,
                        },
                      })
                    }
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#525152]"
                    onClick={() => loginWithRedirect()}
                  >
                    Log in
                  </button>
                )}
                <Link
                  to="/cart"
                  className="flex items-center leading-6 text-white"
                >
                  <p className="ml-1 text-lg font-semibold">Cart</p>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
