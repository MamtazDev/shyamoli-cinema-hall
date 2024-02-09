import { Outlet } from "react-router-dom"
import { Footer } from "../Shared/Footer/Footer"
import Header from "../Shared/Header/Header"

const Layout = () => {



    return (
        <div className="">

            {/* <div className="bg-[#1b1b1b]"> */}
            <div className={` ${location.pathname=='/' ? "bg-transparent " :"bg-[#1b1b1b]"} `}>
                <Header />
            </div>
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout