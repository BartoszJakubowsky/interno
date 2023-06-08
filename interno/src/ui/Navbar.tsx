import { useState } from "react"
import Theme from "./Theme";


export default function Navbar({setTheme}) 
{

const [bgValue, setBgValue] = useState('0');


const handleScroll: React.UIEventHandler<HTMLDivElement> = (event: React.UIEvent<HTMLDivElement>) => {
    console.log("siema", event);
  };

 return (
    <div  
    onScroll={handleScroll}
    className="h-24 sticky top-0 bg-red-100 bg-opacity-50 backdrop-blur-sm dark:bg-slate-700">
      <Theme setTheme={setTheme}/>
    </div>
 )   
}
