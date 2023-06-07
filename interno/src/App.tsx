import Navbar from "./ui/Navbar";

function App() {

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event: React.UIEvent<HTMLDivElement>) => {
    console.log("siema", event);
  };

  return (
    <div onScroll={handleScroll} className="overflow-auto" >
      <Navbar/>
      <div onScroll={handleScroll} className="h-screen mt-40 bg-blue-500 overflow-hidden">siema</div>
    </div>
  );
}

export default App;
