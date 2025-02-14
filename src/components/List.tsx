interface data {
    list: string,
    title: string,
    status: boolean
}

const List: React.FC<data> = ({list, title, status}) => {
    return (
        <div className=""> 
            <div>
                <h3 className="">{list}</h3>
                <button className="">New task</button>
            </div>
            <div>
                <h3>{title}</h3>
                <div className={status ? "bg-green-400" : "bg-red-500"}></div>
            </div>
        <div/>
    );
}

export default List;