import { useState,useCallback,useEffect,useRef } from 'react'
import './text.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharacterallowed]=useState(false)
  const [password,setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    
    <div id="main">
      <h1>password generator</h1>
    
    <div id="m-id1">
      <input 
      id="text-id"
      type="text"
      value={password}
      placeholder="password"
      readOnly
      ref={passwordRef}
      
      />
    <button onClick={copyPasswordToClipboard}>copy</button> 
    </div>

    <div id="main2">
      <div id="m2-id1">
        <input type="range"
        className='cursor-pointer'
        min={6}
        max={100}
        value={length}
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>length:{length}</label>
        {console.log(length)}
        
      </div>

      <div id="m2-id2">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
        id="numberInput" 
        onChange={() => {
          setNumberAllowed((prev) => !prev);
      }}
        
         
      />
        <label htmlFor="numberInput">Numbers</label>
    </div>
    <div id="m2-id3">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterallowed((prev) => !prev )
            }}
            
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>

 

  )
}

export default App
