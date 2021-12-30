import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigate from './components/Navigate'
import Routes from './routes/Routes'

const App = () => {
  React.useEffect(() => {
    const accsessToken = localStorage.getItem('accessToken');
    console.log("da di qua day");
  }, [])
  return (
    <BrowserRouter>
      {
        true ? (
          <div>
            <Header />
            <Route render={props => (
              <div className="main-content">
                <Navigate />
                <Routes />
              </div>
            )} />
          </div>
        ) : (
          <Route render={props => (
            <div className="main-content">
              <Navigate />
              <Routes />
            </div>
          )} />
        )
      }

    </BrowserRouter>
  )
}

export default App