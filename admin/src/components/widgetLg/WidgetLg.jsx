import "./widgetlg.css";

export default function WidgetLg() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img 
                                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="" 
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Martin Baliak</span>
                        </td>
                        <td className="widgetLgDate">2 March 2021</td>
                        <td className="widgetLgAmount">$123</td>
                        <td className="widgetLgButton">
                            <Button type="Approved"/>
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img 
                                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="" 
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Martin Baliak</span>
                        </td>
                        <td className="widgetLgDate">2 March 2021</td>
                        <td className="widgetLgAmount">$123</td>
                        <td className="widgetLgButton">
                            <Button type="Declined" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img 
                                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt="" 
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Martin Baliak</span>
                        </td>
                        <td className="widgetLgDate">2 March 2021</td>
                        <td className="widgetLgAmount">$123</td>
                        <td className="widgetLgButton">
                            <Button type="Pending" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
