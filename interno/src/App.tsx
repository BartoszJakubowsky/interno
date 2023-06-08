import { useEffect, useState } from "react";
import Navbar from "./ui/Navbar";

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system' );
  const htmlDocument = document.documentElement;
  // const darkQuerry  = window.matchMedia("(prefers-color-scheme: dark)");
  // function onWindowMatch() {
  //   if (localStorage.theme === 'dark' || (!"theme" in localStorage) && darkQuerry.matches)
  //     htmlDocument.classList.add('dark');
  //   else
  //     htmlDocument.classList.remove('dark');
  // }

  useEffect(()=>
  {
    switch(theme)
    {
      case 'dark':
        htmlDocument.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        htmlDocument.classList.remove('dark');
        localStorage.removeItem('theme');
        break;
      default:
        localStorage.removeItem('theme');
        break;

    }
  }, [theme])


  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event: React.UIEvent<HTMLDivElement>) => {
    console.log("siema", event);
  };

  return (
    <div onScroll={handleScroll} className="overflow-auto dark:bg-slate-500 bg-red-300" >
      <Navbar setTheme={setTheme}/>
      <div onScroll={handleScroll} className="h-screen mt-40 bg-blue-500 overflow-hidden">siema</div>
    </div>
  );
}

export default App;
