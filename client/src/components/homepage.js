import React, {useState} from 'react'
import axios from 'axios'


const Homepage = () => {

    const [name, setName] = useState();

    const handleChange = event => {
        setName({ name: event.target.value });
      }
    
      const handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: name
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    

    return(
        <div style={{minHeight:500}}>
            <form onSubmit={(event)=>handleSubmit(event)}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={(event)=>handleChange(event)} />
          </label>
          <button type="submit">Add</button>
        </form>
        </div>
    )

}

export default Homepage;