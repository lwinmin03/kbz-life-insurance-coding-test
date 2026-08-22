import Navbar from "@/components/common/navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();

  const isMainProductPage = location.pathname === "/";

  return (
    <div className="h-dvh w-full flex flex-col bg-white overflow-hidden">
      <Navbar />
      {isMainProductPage && (
        <div className="absolute z-0 right-0 top-4/8 -translate-y-1/2 w-110 h-62.5 pointer-events-none bg-linear-to-l from-[#4B8785]/20 to-[#4B8785]/0" />
      )}
      <main className="flex-1 min-h-0 w-[92%] mx-auto flex">
        <div className="w-full h-full flex flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
