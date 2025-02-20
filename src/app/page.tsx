import List from "@/components/List";
import { Menu } from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Menu/>
        <List list={""} title={"Tasks"} status={true} description={"Arrumar a sala"} date={"20/02/2024"}/>
    </div>
  );
}
