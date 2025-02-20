'use client';
import { useState } from "react";
import Image from "next/image";
import trash from "../assets/trash.png"
import pen from "../assets/pen.png"

interface data {
    list: string,
    title: string,
    status: boolean,
    description: string,
    date: string
}


const List: React.FC<data> = ({list, title, status, description, date}) => {
    
    let currentStatus = "bg-red-500 w-4 h-4 rounded-lg";
    const changeColor = (status:boolean) => {
        if(status) {
            currentStatus = "bg-green-400 w-4 h-4 rounded-lg";
            status = false;
        } else {
            currentStatus = "bg-red-400 w-4 h-4 rounded-lg";
            status = true;
        }
    }

    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    }

    const openModal = () => {
        setModal(true);
    }

    const closeEditModal = () => {
        setEditModal(false);
    }

    const openEditModal = () => {
        setEditModal(true);
    }

    return (
        <div className="ml-72 mt-12 mr-10">
            <div className="flex justify-between flex-row items-center">
                <h3 className="font-bold text-[18px]">Tasks</h3>
                <button className="bg-cyan-600 text-white pl-4 pr-4 font-bold p-2 rounded" onClick={() => openModal()}>New task</button>
            </div> 
            <div className="mt-14">
                <div className="flex items-center justify-between">
                    <div className="w-[92%] mb-4 flex items-center justify-between rounded p-6 shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_0_2px_1px_rgba(0,0,0,0.3)] ease-in-out duration-200">
                        <div className=" flex flex-col gap-2">
                            <h4 className="font-bold">{title}</h4>
                            <p>{description}</p>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                            <p className="text-[13px]">{date}</p>
                            <button className="" onClick={() => changeColor(status)}>
                                <div className={currentStatus}></div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <button className="w-[17px] h-[17px] mb-4 cursor-pointer opacity-70 hover:opacity-100" onClick={() => openEditModal()}><Image src={pen} alt={""}/></button>
                        <button className="w-[17px] h-[17px] mb-4 cursor-pointer opacity-70 hover:opacity-100"><Image src={trash} alt={""}/></button>
                    </div>
                </div>
            </div>

            {/* Modal new task */}
            <div className={modal ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">New task</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Title</label>
                            <input type="text" placeholder="Task title" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]"></input>
                            <label htmlFor="" className="mt-8">Description</label>
                            <input type="text" placeholder="Task description" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]"></input>
                            <label htmlFor="" className="mt-8">Date</label>
                            <input type="date" placeholder="Date" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]"></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancel</button>
                            <button onClick={() => setModal(false)}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal edit task */}
            <div className={editModal ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" : "disabled z-0 opacity-0"}>
                <div className="bg-white p-8 rounded-lg shadow-lg flex items-center justify-center flex-col" >
                    <div className="p-2 flex flex-col w-96 bg-opacity-50 z-50">
                        <h2 className="text-xl font-semibold">Edit task</h2>
                        <form className="flex flex-col">
                            <label htmlFor="" className="mt-8">Title</label>
                            <input type="text" placeholder="Task title" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]"></input>
                            <label htmlFor="" className="mt-8">Description</label>
                            <input type="text" placeholder="Task description" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]"></input>
                            <label htmlFor="" className="mt-8">Date</label>
                            <input type="date" placeholder="Date" className="border-2 rounded-[5px] p-1 mt-2 text-[13px]"></input>
                        </form>
                        <div className="flex justify-between mt-10">
                            <button onClick={() => closeEditModal()} className="flex justify-center items-center h-8 text-[15px] bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Cancel</button>
                            <button onClick={() => setEditModal(false)}className="flex justify-center items-center h-8 text-[15px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;