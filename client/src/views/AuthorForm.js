import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AuthorForm = () => {
    const navigate = useNavigate();
    const [author, setAuthor] = useState("");
    const [errors, setErrors] = useState([])

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/Authors', {
            author
        })
            .then(res=>{
                console.log(res)
                navigate('/Authors')
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
        }) 
    }

    return (
        <div className='container'>
            <a href='http://localhost:3000/Authors'>Home</a>
            <form className='form-group bg-light' onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label className='form-label'>Name:</label><br/>
                    <input className='form-control' type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
                </div>
                <span className='flex justify-content-between'>
                        <a href='http://localhost:3000/Authors' className='btn btn-primary'>Cancel</a>
                        <input className='btn btn-primary' type="submit" value='Submit'/>
                </span>
            </form>
        </div>
    )
}

export default AuthorForm;
