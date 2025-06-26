import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";


export default function App() {
  return (
    <Router>
      <div className=" flex flex-col sm:flex-row h-screen">
        <Sidebar />
        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/products/:id" element={<ProductPage/>}/>
          </Routes>
         
        </div>
      </div>
    </Router>
  );
}
