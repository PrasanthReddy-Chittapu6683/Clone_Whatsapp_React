import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login'
import { useStateValue } from './StateProvider';
import Footer from './Footer';
import MyInfoPage from './MyInfoPage';



function App() {

  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState('')
  // https://github.com/firebase/firebase-js-sdk/issues/2923

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) :
        <div>
          <div className="app__body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/myinfo">
                  <div className="app__chat-area">

                    <MyInfoPage />
                  </div>
                </Route>
                <Route path="/">
                  <div className="app__emptyscreen">
                    {/* <img src="./images/download.jpg" alt="" style={{ height: '100px', width: '100px' }} /> */}
                  </div>
                </Route>
              </Switch>
            </Router>
            {/*<Chat/> */}

          </div>

          <div className="app__footer">

            <Footer />
          </div>
        </div>


      }

    </div>
  );
}
export default App;
