import ProductDetail from "./components/product-detail";

const page = () => {
  return (
    <div className="relative">
      <ProductDetail />
      <div className="absolute z-0 right-0 top-3/8 -translate-y-1/2 w-110 h-62.5 pointer-events-none bg-linear-to-l from-[#4B8785]/20 to-[#4B8785]/0" />
    </div>
  );
};

export default page;
