import React from 'react'
import './MyInfoPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar } from '@material-ui/core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';
function MyInfoPage() {
    const gitClick = () => {
        window.open('https://github.com/PrasanthReddy-Chittapu6683', "_blank")
        // let path = `https://github.com/PrasanthReddy-Chittapu6683`;
        // history.push(path);
    }
    const linkedinClick = () => {
        window.open('https://www.linkedin.com/in/prasanth-kumar-reddy-cv-385768b5/', "_blank")

        // let path = `https://www.linkedin.com/in/prasanth-kumar-reddy-cv-385768b5/`;
        // history.push(path);
    }
    return (
        <div className="myinfo">
            <div className="myinfo__container">
                <h1>Hey Guys !!!
                {/* <Avatar src={"./images/MyPic.JPG"} /> */}
                    {/* <div className="myInfo-pic">
                </div> */}
                    <p>
                        <FontAwesomeIcon title="Click here for GitHub link" className='myinfo__followme' onClick={gitClick} icon={faHandPointDown} />
                   Follow me in<b><a href="https://github.com/PrasanthReddy-Chittapu6683" target="_blank"> GitHub </a></b> for my upcoming crazy projects.
                    <FontAwesomeIcon title="Click here for GitHub link" className='myinfo__followme' onClick={gitClick} icon={faHandPointDown} />
                    </p>
                </h1>
                <div>
                    <FontAwesomeIcon title="Click here for GitHub" className='myinfo-icons' onClick={gitClick} icon={faGithub} />
                    <FontAwesomeIcon title="Click here for LinkedIn" className='myinfo-icons' onClick={linkedinClick} icon={faLinkedin} />
                </div>
                <p style={{fontSize:'14px'}}>
                    Know more about technical details of this application? Then Follow me and feel free to share your comments <a href="https://github.com/PrasanthReddy-Chittapu6683" target="_blank"> Click Here</a>
                </p>

                {/* <p>
                    This is the demo WhatsApp application with real time freatures developed using <b>React Js</b>.
                        In this App you can create your own chat room to chat with your friends.
                        This App is using Google / Gmail authentications for secure login.
                       This App is using poweful backend <b>Realtime database powered by Google Firebase</b>
                </p>
                <p>This is so flexible and scalable. We can just plugin this App to any backend technology's or we can attach AI technologies.</p>
                <p>
                    To know more on technical details of this application. <a style={{ color: '#0976ff' }} href="https://github.com/PrasanthReddy-Chittapu6683" target="_blank"> Click Here</a>
                </p>
                <span>
                    For More updates on my upcoming project. Please do follow me in my GitHub and LinkedIn. Click on below
                    </span> */}







            </div>







        </div >
    )
}

export default MyInfoPage
