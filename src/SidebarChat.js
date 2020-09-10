import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import db from './firebase';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
function SidebarChat({ id, name, addNewChat }) {

    const [lastMessage, setLastMessage] = useState("")
    // const [seed, setSeed] = useState('')

    useEffect(() => {
        if (id) {
            db.collection('rooms')
                .doc(id)
                .collection('messages')
                .orderBy('timestamp', 'desc')
                .onSnapshot((snap) =>
                    setLastMessage(snap.docs.map((doc) =>
                        doc.data()))
                );
        }
        // setSeed(Math.floor(Math.random() * 2000))
        return () => {
            // cleanup
        }
    }, [id])

    const createChat = () => {
        const roomName = prompt('Pleae enter name for chat romm');
        if (roomName) {
            // db.child('room').add({
            //     name: roomName
            // })
            db.collection('rooms').add({
                name: roomName
            })
        }
    }


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{lastMessage[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat} className="sidebarChat">

                <h2> <FontAwesomeIcon className='add-icons'  icon={faPlusSquare} /> Add new Chat
                </h2>

            </div>)
}

export default SidebarChat
