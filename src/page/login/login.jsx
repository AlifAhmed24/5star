import React, {useState} from 'react'
import './login.css'

function Login() {
    const [user, setUser] = useState({
        username:"",
        password:""
    })

    function handleChange(event){
        const {name, value} = event.target
        setUser(prev => (
            {...prev, [name]: value}
        ))
    }

    async function handleSubmit(){

    }
    return (
        <div className='login'>
            <form>
                <input onChange={handleChange} type="text" name="username" placeholder="Username" required />
                <input onChange={handleChange} type="password" name="password" placeholder="Password" required />
                <p>Error messeage</p>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login