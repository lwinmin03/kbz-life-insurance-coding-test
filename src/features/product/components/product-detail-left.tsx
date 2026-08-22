import { Heart, Minus, Plus } from "lucide-react";
import Rating from "./rating";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import type { Product } from "../api/api";
import { useProductStore } from "@/store/product-store";

interface ProductDetailLeftProps extends Omit<Product, "thumbnails" | "id"> {
  onAddToCart: () => void;
}

const ProductDetailLeft = ({
  desc,
  price,
  name,
  rating,
  maxRating,
  reviews,
  stock,
  onAddToCart,
}: ProductDetailLeftProps) => {
  const selectionQuantity = useProductStore((state) => state.selectionQuantity);
  const incrementQuantity = useProductStore(
    (state) => state.incrementSelectionQuantity,
  );
  const decrementQuantity = useProductStore(
    (state) => state.decrementSelectionQuantity,
  );

  return (
    <div className="w-full lg:w-5/12 flex flex-col min-h-150">
      <div className="flex-1 flex flex-col gap-y-4 mt-4 lg:mt-8">
        <h2 className="font-proxima text-secondary-brand font-bold text-3xl md:text-4xl lg:text-[48px] leading-tight">
          {name}
        </h2>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-secondary-brand">
            ${price.toFixed(2)}
          </div>
          <Rating
            rating={rating}
            maxRating={maxRating}
            showReviews
            totalReviews={reviews}
          />
        </div>

        <p className="text-base font-proxima text-secondary-brand font-normal">
          {desc}
        </p>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 pt-2">
          <div className="border border-cool-grey px-4 py-3 rounded-sm flex items-center justify-between w-full sm:w-40 h-full">
            <button
              disabled={selectionQuantity <= 1}
              onClick={decrementQuantity}
              type="button"
              className="text-secondary-brand cursor-pointer flex items-center justify-center p-1 hover:opacity-75 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>

            <span className="font-poppins text-secondary-brand text-base font-semibold select-none">
              {selectionQuantity}
            </span>

            <button
              onClick={incrementQuantity}
              type="button"
              disabled={selectionQuantity >= stock}
              className="text-secondary-brand cursor-pointer flex items-center justify-center p-1 hover:opacity-75 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>
          <button
            onClick={onAddToCart}
            type="button"
            className="w-full sm:w-auto px-6 lg:px-8 py-3.5 whitespace-nowrap bg-primary-brand cursor-pointer rounded-sm text-white font-poppins font-semibold text-base hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-brand focus:ring-offset-2"
          >
            Add To Cart
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-secondary-brand font-normal text-sm pt-2">
          <span>Free 3-5 day shipping</span>
          <span className="text-xs">&bull;</span>
          <span>Tool-free assembly</span>
          <span className="text-xs">&bull;</span>
          <span>30 Day Trial</span>
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-cool-grey/30 pt-6 mt-8 lg:mt-auto">
        <button
          type="button"
          className="flex text-primary-brand gap-x-3.5 items-center cursor-pointer hover:opacity-80 transition-opacity font-poppins text-sm font-medium"
        >
          <Heart className="text-primary-brand" size={20} />
          Add to Wishlist
        </button>

        <div className="flex gap-x-4 text-secondary-brand">
          <a
            href="#facebook"
            aria-label="Share on Facebook"
            className="hover:text-primary-brand transition-colors"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="#twitter"
            aria-label="Share on Twitter"
            className="hover:text-primary-brand transition-colors"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="#pinterest"
            aria-label="Share on Pinterest"
            className="hover:text-primary-brand transition-colors"
          >
            <FaPinterest size={18} />
          </a>
          <a
            href="#instagram"
            aria-label="Share on Instagram"
            className="hover:text-primary-brand transition-colors"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLeft;
