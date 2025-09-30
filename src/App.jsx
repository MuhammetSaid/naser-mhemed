import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './Component/MainPage/MainPage'
import CardDetail from './Component/CardDetail/CardDetail'

function App() {
  const [route, setRoute] = useState(window.location.hash || '')

  useEffect(() => {
    function onHash(){
      setRoute(window.location.hash || '')
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <>
      <div className="dd" >
        {route === '' ? <MainPage /> : <CardDetail />}
      </div>
    </>
  )
}

export default App
