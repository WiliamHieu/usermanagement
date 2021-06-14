import React from 'react'
import "./user.css"
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userDisplay">
                    <div className="userDisplayTop">
                        <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="" className="userDisplayImg" />
                        <div className="userTopTitle">
                            <span className="userTopName">Vanessa Harmon</span>
                            <span className="userTopCareer">Biology</span>
                        </div>
                    </div>
                    <div className="userDisplayBottom">
                        <span className="userDisplayTitle">Account Details</span>
                        <div className="userDisplayInfo">
                            <PermIdentity class="userDisplayIcon"/>
                            <span className="userShowInfo"> rsteiner </span>
                        </div>
                        <div className="userDisplayInfo">
                            <CalendarToday class="userDisplayIcon"/>
                            <span className="userShowInfo"> 18.9.1998 </span>
                        </div>
                        <span className="userDisplayTitle">Contact</span>

                        <div className="userDisplayInfo">
                            <PhoneAndroid class="userDisplayIcon"/>
                            <span className="userShowInfo"> 202-555-0104 </span>
                        </div>
                        <div className="userDisplayInfo">
                            <MailOutline class="userDisplayIcon"/>
                            <span className="userShowInfo"> rsteiner@gmail.com </span>
                        </div>
                        <div className="userDisplayInfo">
                            <LocationSearching class="userDisplayIcon"/>
                            <span className="userShowInfo"> Caribbean |  Americas</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="rsteiner" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full name</label>
                                <input type="text" placeholder="Vanessa Harmon" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="rsteiner@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="202-555-0104" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Caribbean |  Americas" className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButtom">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
