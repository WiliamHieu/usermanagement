import Chart from '../../components/chart/Chart'
import Featuresinfo from '../../components/featureinfo.jsx/Featuresinfo'
import './home.css'
import {userData} from '../../testData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
    return (
        <div className="home">
            <Featuresinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}
