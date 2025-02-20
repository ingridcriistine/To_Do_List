import Link from "next/link";
import Image from "next/image";

const styleMenu = {
    link: "text-white text-[25px] hover:text-black transition easy-in-out",
    bosch: "font-extrabold text-red-600 text-[25px]",
    title: "text-[25px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-purple-900 via-cyan-400 to-green-700"
}

export const Menu = () => {
    return(
        <nav className="w-full bg-cyan-300 h-20">
            <div className="flex justify-start items-center h-20 font-bold text-[20px] pl-12">
                {/* <Image src={} alt=""/> */}
                <h2 className="flex">To-Do List</h2>
            </div>
            <div className="bg-gray-100 h-full w-[250px] fixed font-robFont text-large border-gray-300 border-[0.5px]">
                <h3 className="mt-6 text-[18px] text-black p-2 pl-4 font-bold">My lists</h3>
                <div className="flex flex-col pt-4">
                    <Link href={""} className="p-4 pl-full border">List 1</Link>
                    <Link href={""} className="p-4 pl-full border">List 2</Link>
                    <Link href={""} className="p-4 pl-full border ">+ New list</Link>
                </div>
            </div>
        </nav>
    )
}