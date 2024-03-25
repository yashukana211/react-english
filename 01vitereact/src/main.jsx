import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return(
  <h1>tea or coffe</h1>
  )
}

const anotherUser = "chai aur react"

let reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',

  anotherUser
 
)

const element=(
  <a  href="'https://google.com" target='_blank'>click to visit</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    //  reactElement 
     <>
     <App />
     </>

      
    

)
