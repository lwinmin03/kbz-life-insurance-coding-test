import Navbar from "@/components/common/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-dvh w-full flex flex-col bg-white overflow-hidden">
      <Navbar />

      <main className="flex-1 min-h-0 w-[92%] mx-auto flex">
        {/* Added h-full flex flex-col */}
        <div className="w-full h-full flex flex-col">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
