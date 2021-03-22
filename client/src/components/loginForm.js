import React, {useState} from 'react'
import '../App.css'
import axios from 'axios'
const LoginForm = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[mail, setMail] = useState('');

    const restartStates = () =>{
        setUsername('');
        setMail('');
        setPassword('');
    }

    const submitUser = (e) =>{
        
        const user = {
            username: username,
            password: password,
            // mail: mail
        }
        console.log(user);

        axios.post('/users', user).then(res=>console.log(res.data));
        
        e.preventDefault();
        restartStates();
    }

    return(
        <div>
            <p> Form to log in</p>
            <div className="login-form">
                <form >
                    <div>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}></input> 
                    </div>
                    <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} ></input>
                    </div>
                    <div>
                    <label htmlFor="mail">Mail:</label> 
                    <input type="mail" name="mail" value={mail} onChange={e => setMail(e.target.value)}></input>
                    </div>
                    <button type="submit" onClick={submitUser}> Dodaj</button>
                </form>
            </div>
           
        </div>

    )

}

export default LoginForm;