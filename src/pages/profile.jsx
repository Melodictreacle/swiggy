import Navbar1 from "../components/navbar"
import { Link } from "react-router-dom"
function Profile() {
    return (<div className="bg-blue-200 w-screen h-screen">
        <div className='px-20 bg-white shadow-lg'>
            <Navbar1></Navbar1>
        </div>
        <div className="flex justify-between px-50 h-30">
            <div className="flex flex-col justify-center">
                <p className="text-center font-bold text-2xl">User</p>
                <div className="flex gap-2">
                    <p>1234567890</p>.<p>abc@gmail.com</p>
                </div>
            </div>
            <Link href="#" className="">
                    <div class="flex flex-col justify-center h-10 font-bold  border-2 p-2 m-10">
                        <div>EDIT PROFILE</div>
                    </div>
                </Link>
        </div>
        <div className="grid grid-cols-4 gap-10 bg-white mx-30 ">
            <div className="h-full bg-gray-400 p-10">
                hi
            </div>
            <div className="col-span-3">
                byeljadlsjal;jdlajwdjajd;awjdja;jdl;wajd;ka;jds;ljdl;aj;wd
            </div>
        </div>
    </div>)
}
export default Profile