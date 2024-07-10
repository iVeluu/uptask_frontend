import Logo from "@/components/Logo";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <>
            <div className="bg-gray-800 min-h-screen">
                <div className="py-10 lg:py-20 mx-auto w-auto md:w-[450px] ">
                    <Logo />
                    <div className="mt-10 mx-5 md:mx-0">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
