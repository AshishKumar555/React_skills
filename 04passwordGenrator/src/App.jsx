import { useState,useCallback ,useEffect,useRef} from 'react'



function App() {
  const [length,setLength] =useState(8);
  const [numberAllowed,setNumberAllowed] =useState('true')
  const [charAllowed,setCharAllowed] =useState('true')
  const [password,setPassword] = useState("")

  // useRef hook 
  const passwordRef=useRef(null)
  
  // password Generator -----------------
  const passwordGenerator=useCallback(()=>{
    let pass=''
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="012346789"
    if(charAllowed)   str +="!#@$%^&*{}[]|~"
       
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length +1 )
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword]);

  //copy to clipboard ------------------------
  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password)

  },[password])

   useEffect(() => {
    passwordGenerator();
   }, [length,numberAllowed,charAllowed,passwordGenerator]);  

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md bg-gray-700 rounded-lg px-4 py-5 my-8
      text-orange-500'>
            <h1 className='text-4xl my-3 text-center text-red-600 font-bold '>Password Generator </h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input 
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="password"
              readOnly
              ref={passwordRef}

               />
               <button  onClick={copyPasswordToClipboard}
               className='outline-none bg-blue-700 text-white px-3 py-0.5 
               shrink-0'>copy</button>
            </div>

            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                  <input type="range"
                  id="Range"
                  min={6}
                  max={50}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e)=>{setLength(e.target.value)}}
                   />
                   <label htmlFor="Range">length : {length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                  <input 
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  onChange={()=>{
                    setNumberAllowed((prev)=>!prev)
                  }}
                  />
                  <label htmlFor="numberInput">Number</label>
                </div>

                <div className='flex items-center gap-x-1'>
                  <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  id='charInput'
                  onChange={()=>{
                    setCharAllowed((prev)=>!prev)
                  }}
                  />
                  <label htmlFor="charInput">Character</label>
                </div>
            </div>
      </div>
    </>
  )
}

export default App
