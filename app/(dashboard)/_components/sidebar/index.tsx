import { List } from "./list";
import New_button from "./new-button";

 const Sidebar=()=>{
    return(
        <aside 
        className="fixed bg-blue-900  h-full w-[60px] p-3  z-[1] left-0 flex flex-col text-white">  
        <List/>
        <New_button/>
        </aside>
    );
};

export default Sidebar