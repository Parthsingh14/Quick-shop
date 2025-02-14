import Create from "./Components/Create";
import Details from "./Components/Details";
import Home from "./Components/Home";
import { Routes,Route,Link } from "react-router-dom";

function App() {
  return (

    <div className="h-screen w-screen flex">
     
      <Link to="/" className="absolute left-[17%] top-[5%] border px-2 text-xs text-red-900 border-red-950 rounded-lg font-bold hover:bg-red-950 hover:text-white">
        Home
      </Link>
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/details/:id" element={<Details/>}></Route>
     </Routes>

      

    </div>
  );
}

export default App;
