import List from "@/components/List";
import { Menu } from "@/components/Menu";
import Image from "next/image";
import { useState } from "react";

interface data {
  list: string,
  title: string,
  status: boolean,
  description: string,
  date: Date
}


export default function Home() {
  
  const [tasks, setTasks] = useState<data[]>([])

  return (
    <div>
        <Menu/>
        <List list={tasks}/>
    </div>
  );
}
