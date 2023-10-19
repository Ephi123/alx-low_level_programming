import React from 'react'
import{Form, redirect, useActionData} from 'react-router-dom'

function Inf() {
  const data = useActionData()
  return (
    <div>
        <h1>Info</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptatibus?
        </p>
        <Form method='post' action='/help/info'>
          <label>
            <span>user Name:</span>
            <input type='text'name='username' required/>
          </label>
          <label>
            <span>Password</span>
            <input type='password' name='password' required></input>
          </label>
        <button>Submit</button>
        </Form>
        {data && data.error && <p>{data.error}</p>}
    </div>
  )
}

export const contactAction = async ({request}) =>{
    const data = await request.formData()
    
    const submision = {
      username : data.get('username'),
      password : data.get('password')
    } 

    console.log(submision)
    if (submision.username.length < 5)
          return {error:"message must be greater than 5"}

    return redirect('/')


}

export default Inf