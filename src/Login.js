import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionType } from './reducer';

import Footer from './Footer'

function Login() {


    const [{ }, dispatch] = useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) =>
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user,
                })
            ).catch((error) => alert(error.message))
    }
    return (
        <div className="login">

            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" />
                <div className="login__text">
                    <h1>Sign in to my WhatsApp </h1>
                    {/* <span class="material-icons" style={{ color: '#0a8d48' }}>
                        smile-wink
                    </span> */}

                </div>

                <Button onClick={signIn}>
                    <span class="material-icons"> email </span> &nbsp; Sign in With Google Account
                    </Button>
                <Footer />
            </div>

        </div >
    )
}

export default Login
