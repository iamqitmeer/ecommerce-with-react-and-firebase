import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center"
              prefetch={false}
            >
              <svg
                className="inline-block h-5 w-5 font-black text-gray-200"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                <path d="M2 7h20" />
              </svg>
              <span className="inline-block text-gray-100 font-bold ml-2 pt-1">
                Ecommerce
              </span>
            </Link>
            <nav className="hidden md:ml-6 ml-24 md:flex md:space-x-8 ml-12">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-sm font-bold text-gray-400 hover:text-gray-300"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-1 pt-1 text-sm  font-bold text-gray-400  hover:text-gray-300"
                prefetch={false}
              >
                About
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center px-1 pt-1 text-sm  font-bold text-gray-400  hover:text-gray-300"
                prefetch={false}
              >
                Products
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center px-1 pt-1 text-sm font-bold  text-gray-400  hover:text-gray-300"
                prefetch={false}
              >
                Features
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-4 relative hover:bg-gray-800"
            >
              <ShoppingCart className="h-6 w-6 text-gray-300 " />{" "}
              {/* Icon color updated */}
              <span className="sr-only">View cart</span>
              <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-gray-700 text-xs text-white flex items-center justify-center">
                0
              </div>
            </Button>

            <Button className="hover:text-zinc-950">
              <User className="mr-2 h-4 w-4 text-gray-300 " />
              <span className="text-gray-300 ">Login</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 pb-3 pt-2">
          <Link
            to="/"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base  text-black"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base  text-gray-600 hover:text-black"
            prefetch={false}
          >
            About
          </Link>
          <Link
            to="/products"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base  text-gray-600 hover:text-black"
            prefetch={false}
          >
            Products
          </Link>
          <Link
            to="/features"
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base  text-gray-600 hover:text-black"
            prefetch={false}
          >
            Features
          </Link>
        </div>
      </div>
    </header>
  );
}
