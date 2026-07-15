import { EmptyNav } from "@/components/nav/EmptyNav";
import { Outlet } from "@tanstack/react-router";

export default function EmptyLayout() {
  return (
     <div className="min-h-screen bg-ui-bg text-zinc-300">
          <div className="max-w-screen-xl mx-auto px-6 pt-8 relative">
            <EmptyNav />
            <Outlet/>
          </div>
        </div>
  )
}
