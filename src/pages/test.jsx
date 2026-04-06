import { FaRegUserCircle, FaUserShield } from "react-icons/fa";

export default function TestPage() {



    return(
        <div className="w-full h-screen text-blue-600 flex flex-col items-center justify-center bg-primary text-secondary">
            <FaRegUserCircle className="text-9xl text-red-600"/>
            <FaUserShield />
        </div>
    )
} 