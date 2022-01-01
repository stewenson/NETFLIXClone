import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import "./home.css";
import { userData } from "../../dummydata";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useMemo } from "react";

export default function Home() {

    const MONTHS = useMemo(
        ()=> [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ],[]);

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get("/users/stats",{
                    Headers:{
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzg5MGI5YjliYTI1NzBlYmEwMmZkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTA0NjI2MCwiZXhwIjoxNjQxNDc4MjYwfQ.mgljGzli8j6KJHuE9R0tcUMRg5z49IYj30a6mJre6PY"
                    },
                });
                const statsList = res.data.sort(function (a, b) {
                    return a._id - b._id;
                })
                statsList.map(item=> 
                    setUserStats(prev=>[
                        ...prev,
                        {name:MONTHS[item._id-1], "New User": item.total},
                    ])
                );
            } catch (error) {
                console.log(error);
            }
        }
          getStats();
    },[MONTHS]);

    return (
        <div className="home">
            <Featuredinfo />
             <Chart 
                data={userStats} 
                title="User Analytics" 
                grid 
                dataKey="New User"
             />
             <div className="homeWidgets">
                 <WidgetSm />
                 <WidgetLg />
             </div>
        </div>
    )
}
