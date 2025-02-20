'use client';

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

    return (
        <div className="ml-72 mt-12 mr-10">
            <div className="flex justify-between flex-row items-center">
                <h3 className="font-bold text-[18px]">Tasks</h3>
                <button className="bg-cyan-600 text-white pl-4 pr-4 font-bold p-2 rounded">New task</button>
            </div> 
            <div className="mt-14">
                <div className="">
                    <div className="mb-4 flex items-center justify-between rounded p-6 shadow-[0_0_5px_1px_rgba(0,0,0,0.3)] hover:shadow-[0_0_2px_1px_rgba(0,0,0,0.3)] ease-in-out duration-200">
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
                </div>
            </div>
        </div>
    );
}

export default List;