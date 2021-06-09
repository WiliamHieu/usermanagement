import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons/';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo" >UMApp</span>
                    
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className='topIconBagde'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://vnn-imgs-f.vgcloud.vn/2019/11/09/07/meo-black-golden-1.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>  
    )
}

