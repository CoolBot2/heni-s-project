
import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import { admin } from './components/TestDB';
function App() {
  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")
  const login = (details)=>{
    console.log(details)
     if (details.email === admin.email && details.password === admin.password){

       console.log("you have logged in")
       setUser(
         {
           name: details.name,
           email: details.email
         }
       )
      }
     else{

setError("Check your passwaord or email")      }
  
  }
  const logout =()=>{
   setUser({name: "", email:""})
  }
  return (

    <div className="App">
      {(user.email !== "")?(
        <div className='welcome'> 
          <h2>Welcome</h2> <span>{user.name}</span>
        <button onClick={logout}>Logout</button>
        </div>):<Login Login={login} error={error} />}

      
    </div>
  );
}

export default App;
