import React, { useEffect, useState } from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile } from "@material-ui/icons";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useParams } from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider'
function Chat() {

    const [inputMsg, setInputMsg] = useState('')
    // const [seed, setSeed] = useState('')
    /** Using this to read params from URL */
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{ user }, dispatch] = useStateValue();


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).
                onSnapshot(snap => (
                    setRoomName(snap.data().name)))
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapShot => (
                setMessages(snapShot.docs.map(doc => doc.data()))
            ))
        }
        return () => {
            // cleanup
        }
    }, [roomId])


    // useEffect(() => {

    //     setSeed(Math.floor(Math.random() * 2000))
    //     return () => {
    //         // cleanup
    //     }
    // }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('rooms').doc(roomId).collection('messages').add(
            {
                message: inputMsg,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                emailID: user.email
            }
        )
        setInputMsg("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${roomId}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen {' '}{new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()} </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>
            </div>

            <div className="chat__body">
                {messages.map(msg => (

                    <p key={msg.message} className={`chat__message ${msg.emailID === user.email && 'chat__receiver'}`}>
                        <span className="chat__name ">{msg.name}</span>
                        {msg.message}
                        <span className="chat__timestamp">{new Date(msg.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}

                {/* <p className="chat__message">
                    <span className="chat__name">Shashikala nc</span>
                    Hey guys
                <span className="chat__timestamp">3:50 PM</span>
                </p> */}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input type='text' value={inputMsg} onChange={(e) =>
                        setInputMsg(e.target.value)} placeholder="Type a message" />
                    {/* <button type="submit" onClick={sendMessage}>Send</button> */}
                    <button type="submit" onClick={sendMessage}>
                        <IconButton >
                            <ArrowForwardIcon />
                        </IconButton>
                    </button>
                </form>
                <MicIcon style={{ marginRight: '10px' }} />
            </div>

        </div>
    )
}

export default Chat
