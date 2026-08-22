import { Heart, Minus, Plus } from "lucide-react";
import Rating from "./rating";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

interface ProductDetailLeftProps {
  productName: string;
  price: number;
  rating: number;
  desc: string;
  totalRatingUser: number;
  onAddToCart: () => void;
}

const ProductDetailLeft = ({
  desc,
  price,
  productName,
  rating,
  totalRatingUser,
  onAddToCart,
}: ProductDetailLeftProps) => {
  return (
    <div className="w-4/12 flex flex-col  min-h-150">
      <div className="flex-1 flex flex-col gap-y-4 mt-8">
        <h2 className="font-proxima text-secondary-brand font-bold text-[48px]">
          {productName}
        </h2>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-secondary-brand">
            ${price}
          </div>
          <Rating rating={rating} showReviews totalReviews={totalRatingUser} />
        </div>

        <div className="text-base font-proxima text-secondary-brand font-normal">
          {desc}
        </div>

        <div className="flex items-center gap-x-3 pt-2">
          <div className="border border-cool-grey px-4 py-4.5 rounded-sm flex items-center justify-between w-36 h-full">
            <button
              type="button"
              className="text-secondary-brand cursor-pointer flex items-center justify-center p-1 hover:opacity-75 transition-opacity"
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>

            <span className="font-poppins text-secondary-brand text-base font-semibold select-none">
              {1}
            </span>

            <button
              type="button"
              className="text-secondary-brand cursor-pointer flex items-center justify-center p-1 hover:opacity-75 transition-opacity"
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={onAddToCart}
            type="button"
            className="px-10 py-4.5 bg-primary-brand cursor-pointer rounded-sm text-white font-poppins font-semibold text-base"
          >
            Add To Cart
          </button>
        </div>

        <div className="flex items-center gap-x-2 text-secondary-brand text-balance font-normal">
          <span>Free 3-5 day shipping</span>
          <span className="text-xs">&bull;</span>

          <span>Tool-free assembly</span>
          <span className="text-xs">&bull;</span>

          <span>30 Day Trial</span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6  mt-auto">
        <button
          type="button"
          className="flex text-primary-brand gap-x-3.5 items-center cursor-pointer"
        >
          <Heart className="text-primary-brand" />
          Add to Wishlist
        </button>

        <div className="flex gap-x-3 text-secondary-brand">
          <FaFacebook />
          <FaTwitter />
          <FaPinterest />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLeft;
