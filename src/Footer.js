import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    // const history = useHistory();

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
        <div>
            <div className="footer">

                <p>Follow Me</p>
                {/* <span style={{ margin: '3px' }} class="material-icons"> alternate_email</span> */}
                {/* <a rel="" target="_blank" style={{ color: 'blue', marginTop: '-2px' }} href="https://github.com/PrasanthReddy-Chittapu6683" > */}
                <FontAwesomeIcon title="Click here for GitHub" className='footer-icons' onClick={gitClick} icon={faGithub} />
                {/* </a> */}

                {/* <a rel="" style={{ color: 'blue', marginTop: '-2px' }} href="https://www.linkedin.com/in/prasanth-kumar-reddy-cv-385768b5/" > */}
                <FontAwesomeIcon title="Click here for LinkedIn" className='footer-icons' onClick={linkedinClick} icon={faLinkedin} />
                {/* </a> */}



            </div>
            <div className="footer2">
                <p >
                    Developer: Prasanth Reddy
                </p>
            </div>
        </div>
    )
}

export default Footer
