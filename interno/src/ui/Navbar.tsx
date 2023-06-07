import { useState } from "react"


export default function Navbar() 
{

const [bgValue, setBgValue] = useState('0');

const handleScroll: React.UIEventHandler<HTMLDivElement> = (event: React.UIEvent<HTMLDivElement>) => {
    console.log("siema", event);
  };

 return (
    <div  
    onScroll={handleScroll}
    className="h-24 sticky top-0 bg-red-100 bg-opacity-50 backdrop-blur-sm">
    </div>
 )   
}
