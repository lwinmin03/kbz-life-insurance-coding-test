import Navbar from "@/components/common/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="h-dvh w-full flex flex-col bg-white overflow-hidden">
      <Navbar />
      <main className="flex-1 min-h-0 w-full flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
