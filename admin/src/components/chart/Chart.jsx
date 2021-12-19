import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title, data, dataKey, grid}) {
    console.log(data);
    return (
        <div className="chart">
            <h3 className="chartTitle">
                {title}
            </h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550db"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550db" />
                <Tooltip />
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
