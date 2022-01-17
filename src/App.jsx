import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigate from './components/Navigate'
import Routes from './routes/Routes'
import { useHistory } from 'react-router-dom'
const App = () => {
  const [profile, setProfile] = useState();
  const path = useHistory()
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    setProfile(profile);
    console.log("profile", profile);
  }, [path]);
  return (
    <BrowserRouter>
      {
        profile ? (
          <div>
            <Header />
            <Route render={props => (
              <div className="main-content">
                <Navigate />
                <div className="w-full">
                  <Routes />
                </div>
              </div>
            )} />
          </div>
        ) : (
          <div>
            <Header />
            <Route render={props => (
              <div className="main-content">
                <div className="w-full">
                  <Routes />
                </div>
              </div>
            )} />
          </div>
        )
      }
    </BrowserRouter>
  )
}

export default App