import React, {useState} from 'react'
import axios from 'axios'
import './login.css'

function Login() {
    const [user, setUser] = useState({
        username:"",
        password:""
    })
    const [error, setError] = useState('')

    function handleChange(event){
        const {name, value} = event.target
        setUser(prev => (
            {...prev, [name]: value}
        ))
    }

    async function handleSubmit(e) {
        try {
          e.preventDefault();
          const res = await axios.post('http://localhost:8800/api/auth/login', user);
          
          const cookies = res.headers['set-cookie'];
          if (cookies && Array.isArray(cookies) && cookies.length > 0) {
            // set the first cookie in the browser
            document.cookie = cookies[0];
          }
    
          console.log("submitted");
        } catch (error) {
          setError(error.response?.data.message);
          console.log(error);
        }
      }
    
      
      
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h2>Admin</h2>
                <input onChange={handleChange} type="text" name="username" placeholder="Username" required />
                <input onChange={handleChange} type="password" name="password" placeholder="Password" required />
                <p>{error}</p>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login