import { SiteFooter } from "@/components/footer";
import { AuthNav } from "@/components/nav/AuthNav";
import { SiteNav } from "@/components/nav/SiteNav";
import { Outlet } from "@tanstack/react-router";

export default function BaseLayout() {
    const isAuthenticated = false; // Replace with your actual authentication logic
  return (
     <div className="min-h-screen bg-ui-bg text-zinc-300">
          <div className="max-w-screen-xl mx-auto px-6 pt-8 relative">
            {isAuthenticated ? <AuthNav /> : <SiteNav />}
            <Outlet/>
            <SiteFooter />
          </div>
        </div>
  )
}
