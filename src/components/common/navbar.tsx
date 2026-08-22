import { useAppNavigation } from "@/hooks/use-app-navigation";
import { useProductStore } from "@/store/product-store";
import { ShoppingCart } from "lucide-react";
import { CgSearch } from "react-icons/cg";

import { TbMenu4 } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "SHOP", path: "#" },
  { label: "COLLECTIVE", path: "#" },
  { label: "DESIGNERS", path: "#" },
  { label: "ABOUT US", path: "#" },
  { label: "CONTACT", path: "#" },
] as const;

const Navbar = () => {
  const { goTo } = useAppNavigation();
  const cartItemsCount = useProductStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-[#D1D1D8] px-6 text-secondary-brand">
      <button
        onClick={() => goTo("/")}
        className="text-2xl cursor-pointer font-cambay font-bold text-secondary-brand"
      >
        Cozy®
      </button>

      <nav className="flex items-center font-poppins gap-x-11">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.label} to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex h-full items-center gap-x-6">
        <div className="flex items-center gap-x-6">
          <button
            className="cursor-pointer"
            type="button"
            aria-label="Open Menu"
          >
            <TbMenu4 size={24} />
          </button>
          <button className="cursor-pointer" type="button" aria-label="Search">
            <CgSearch size={24} />
          </button>
        </div>

        <div className="flex h-full items-center border-l border-[#D1D1D8] pl-6">
          <button
            type="button"
            className="relative cursor-pointer p-1 focus:outline-none"
            aria-label={`Shopping Cart, ${cartItemsCount} items`}
          >
            <ShoppingCart size={24} />

            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-1.5 flex min-w-5 h-5 items-center justify-center rounded-full bg-primary-brand px-1.5 text-xs font-normal text-white font-proxima leading-none">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
