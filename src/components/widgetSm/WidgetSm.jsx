import { Visibility } from '@material-ui/icons'
import './widgetsm.css'

export default function WidgetSm() {
    return (
        <div className="widgetsm">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mikaela Oconnor</span>
                        <span className="widgetSmUserTitle">Massage Therapist</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Kristi Morton</span>
                        <span className="widgetSmUserTitle">Reporter</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/women/6.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Desiree Gordon</span>
                        <span className="widgetSmUserTitle">Recreation</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Fred Andrews</span>
                        <span className="widgetSmUserTitle">Physicist</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/men/8.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Shannon Douglas</span>
                        <span className="widgetSmUserTitle">Web Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://randomuser.me/api/portraits/women/50.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Johnnie Wheeler</span>
                        <span className="widgetSmUserTitle">Paramedic</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
