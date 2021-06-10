import { Visibility } from '@material-ui/icons'
import './widgetsm.css'

export default function WidgetSm() {
    return (
        <div className="widgetsm">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://cdn1.tuoitre.vn/zoom/600_315/2020/4/23/tjvena7bnvijpzvq3fscpx-970-80-1587599428795869438770-crop-15875995221191505633329.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mikaela Oconnor</span>
                        <span className="widgetSmUserTitle">Massage Therapist</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility/>
                        
                    </button>
                </li>
            </ul>
        </div>
    )
}
