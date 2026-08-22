import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Product, Thumbnail } from "@/features/product/api/api";
import { MainProduct, productImageFive, productImageFour, productImageThree, productImageTwo } from "@/assets/product";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedThumbnailId?: string;
}

interface ProductStoreState {
  currentProduct: Product | null;
  selectedImage: string;
  activeThumbnailId: string;
  selectionQuantity: number;

  cart: CartItem[];

  setCurrentProduct: (product: Product) => void;
  setSelectedImage: (thumbnail: Thumbnail) => void;
  incrementSelectionQuantity: () => void;
  decrementSelectionQuantity: () => void;

  addToCart: () => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const INITIAL_PRODUCT: Product = {
  id: 101,
  name: "Meryl Lounge Chair",
  desc: "The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at. Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.",
  maxRating: 5,
  price: 149.99,
  rating: 4.6,
  reviews: 556,
  stock: 16,
  thumbnails: [
    { id: "T-01", url: MainProduct },
    { id: "T-02", url: productImageTwo },
    { id: "T-03", url: productImageThree },
    { id: "T-04", url: productImageFour },
    { id: "T-05", url: productImageFive },
  ],
};

export const useProductStore = create<ProductStoreState>()(
  devtools((set) => ({
    currentProduct: null,
    selectedImage: "",
    activeThumbnailId: "",
    selectionQuantity: 0,
    cart: [],

    setCurrentProduct: (product) =>
      set(
        {
          currentProduct: product,
          selectedImage: product.thumbnails[0]?.url ?? "",
          activeThumbnailId: product.thumbnails[0]?.id ?? "",
          selectionQuantity: 1,
        },
        false,
        "product/setCurrentProduct"
      ),

    setSelectedImage: (thumbnail) =>
      set(
        {
          selectedImage: thumbnail.url,
          activeThumbnailId: thumbnail.id,
        },
        false,
        "product/setSelectedImage"
      ),

    incrementSelectionQuantity: () =>
      set(
        (state) => {
          if (!state.currentProduct) return state;
          const maxStock = state.currentProduct.stock;
          return {
            selectionQuantity:
              state.selectionQuantity < maxStock
                ? state.selectionQuantity + 1
                : state.selectionQuantity,
          };
        },
        false,
        "product/incrementSelectionQuantity"
      ),

    decrementSelectionQuantity: () =>
      set(
        (state) => ({
          selectionQuantity:
            state.selectionQuantity > 1 ? state.selectionQuantity - 1 : 1,
        }),
        false,
        "product/decrementSelectionQuantity"
      ),

    addToCart: () =>
      set(
        (state) => {
          if (!state.currentProduct) return state;

          const existingIndex = state.cart.findIndex(
            (item) => item.product.id === state.currentProduct?.id
          );

          let updatedCart = [...state.cart];

          if (existingIndex > -1) {
            const currentItem = updatedCart[existingIndex];
            const newQty = Math.min(
              currentItem.quantity + state.selectionQuantity,
              state.currentProduct.stock
            );
            updatedCart[existingIndex] = {
              ...currentItem,
              quantity: newQty,
            };
          } else {
            updatedCart.push({
              product: state.currentProduct,
              quantity: state.selectionQuantity,
              selectedThumbnailId: state.activeThumbnailId,
            });
          }

          return { cart: updatedCart };
        },
        false,
        "cart/addToCart"
      ),

    removeFromCart: (productId) =>
      set(
        (state) => ({
          cart: state.cart.filter((item) => item.product.id !== productId),
        }),
        false,
        "cart/removeFromCart"
      ),

    updateQuantity: (productId, quantity) =>
      set(
        (state) => ({
          cart: state.cart
            .map((item) => {
              if (item.product.id === productId) {
                const validQty = Math.max(1, Math.min(quantity, item.product.stock));
                return { ...item, quantity: validQty };
              }
              return item;
            })
            .filter((item) => item.quantity > 0),
        }),
        false,
        "cart/updateQuantity"
      ),

    clearCart: () => set({ cart: [] }, false, "cart/clearCart"),
  }))
);