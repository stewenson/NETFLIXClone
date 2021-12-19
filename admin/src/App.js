import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <div>
     <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}
