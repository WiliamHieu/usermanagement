import './widgetlg.css'

export default function WidgetLg() {

    const Button = ({type})  => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    }

    return (
        <div className="widgetlg">
            <h3 className="widgetLgTitle">Lastest transaction</h3>
                <table className="widgetLgTable">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">                        
                            <img src="https://randomuser.me/api/portraits/women/53.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Susan Carol</span>
                          </td>
                        <td className="widgetLgDate">23 May 2021</td>
                        <td className="widgetLgAmount">$113.000</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">                        
                            <img src="https://randomuser.me/api/portraits/women/76.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Lisa Underwood</span>
                          </td>
                        <td className="widgetLgDate">23 May 2021</td>
                        <td className="widgetLgAmount">$113.000</td>
                        <td className="widgetLgStatus">
                        <   Button type="Pending" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">                        
                            <img src="https://randomuser.me/api/portraits/women/59.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Jan Baker</span>
                          </td>
                        <td className="widgetLgDate">23 May 2021</td>
                        <td className="widgetLgAmount">$113.000</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">                        
                            <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Sean Peterson</span>
                          </td>
                        <td className="widgetLgDate">23 May 2021</td>
                        <td className="widgetLgAmount">$113.000</td>
                        <td className="widgetLgStatus">
                            <Button type="Rejected" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">                        
                            <img src="https://randomuser.me/api/portraits/women/88.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Lindsey Hubbard</span>
                          </td>
                        <td className="widgetLgDate">23 May 2021</td>
                        <td className="widgetLgAmount">$113.000</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">                        
                            <img src="https://randomuser.me/api/portraits/men/51.jpg" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Emmett Barnett</span>
                          </td>
                        <td className="widgetLgDate">23 May 2021</td>
                        <td className="widgetLgAmount">$113.000</td>
                        <td className="widgetLgStatus">
                            <Button type="Approved" />
                        </td>
                    </tr>
                </table>
        </div>
    )
}
