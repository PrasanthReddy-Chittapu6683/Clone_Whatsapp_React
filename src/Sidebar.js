import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider'
import db from './firebase';
import { Link } from 'react-router-dom';


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    const [rooms, setRooms] = useState([])
    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snap => (
            setRooms(snap.docs.map(doc => ({
                id: doc.id,
                name: doc.data(),
            })))
        ))


        // db.child('room')

        // db.on("value", snapshot => {
        //     debugger;
        //     const roomData = snapshot.val();
        //     // console.log(snapshot.val())
        //     setRooms(roomData.rooms.map((doc) => (
        //         {
        //             data: doc
        //         })))
        //     // console.log(JSON.stringify(rooms))
        // }
        // )
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__headerRight">
                    <Link to={`/myinfo`}>
                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>
                        <IconButton>

                            <ChatIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </Link>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">

                    <SearchOutlined />
                    <input placeholder="Search or start new chart" type="text" />
                </div>

            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                {
                    rooms.map(room => (
                        <SidebarChat key={room.id} id={room.id} name={room.name.name} />
                    ))
                }

            </div>
        </div>
    )
}

export default Sidebar
