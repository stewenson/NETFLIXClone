import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../dummydata";

export default function Home() {
    return (
        <div className="home">
            <Featuredinfo />
             <Chart 
                data={userData} 
                title="User Analytics" 
                grid 
                dataKey="Active User"
             />
        </div>
    )
}
