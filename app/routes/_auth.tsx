import { Outlet } from "@remix-run/react"
import { AuthBanner } from "~/components/auth/auth-banner"

export default function AuthLayout() {
    return (
        <div className="w-full h-screen flex p-4">
            <AuthBanner />
            <Outlet />
        </div>
    );
}
