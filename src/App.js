import {useState} from 'react'
function App() { 
  const [value, setValue] = useState()
  return ( 
<>
  <div class="counter">
    <h1>Simple react counter</h1>
    <h2>{value}</h2>
    <button className="btn1" onClick={() => setValue(value+1)}>Increase</button>
    <button className="btn2" onClick={() => setValue(value-1)}>Decrease</button>
    <button className="btn3" onClick={() => setValue(0)}>Reset</button>
  </div>
</>
  )
}

export default App
