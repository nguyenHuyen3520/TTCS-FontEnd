import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Navigate from './components/Navigate'
import Routes from './routes/Routes'

const App = () => {
  React.useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');    
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
                <div className="w-full">
                  <Routes />
                </div>
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
//asdfa 
    </BrowserRouter>
  )
}

export default App