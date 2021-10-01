import React,{useState} from 'react';
import './Login.css';

let Login = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUChange = (e) =>{
    setUsername(e.target.value);
  }
    const handleEChange = (e) =>{
    setEmail(e.target.value);
  }
  const handlePChange = (e) =>{
    setPassword(e.target.value);
  }
  const validation = () => {
      if(password.length>8){
          console.log("login succesfull");
      }
  }
    return(
        <div className='login'><h1>Login page</h1>
        <form className='log-form'>
            {/* <label >Username: </label><br/> */}
            <input type="text" value={username} placeholder="Username" onChange={handleUChange}></input><br/>
            {/* <label>Email:</label><br/> */}
            <input type="email" value={email} placeholder="Email" onChange={handleEChange}></input><br/>
            {/* <label>Password:</label><br/> */}
            <input type="password" placeholder="Password" onChange={handlePChange}></input><br/>
            <button onClick={validation}>Submit</button>
        </form>
        </div>
    );
    
}

export default Login;