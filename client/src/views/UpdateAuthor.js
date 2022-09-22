import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"

const UpdateAuthor = () => {
    const navigate = useNavigate();
    const [authorData, setAuthorData] = useState('')
    const [errors, setErrors] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/Authors/${id}`)
        .then(res => {
                if(res.data.author){
                    setAuthorData(res.data.author);
                }
            })
            .catch(err => console.error(err));
        }, []);
        
    const update = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/Authors/${id}`,authorData)
            .then(res => console.log(res))
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
        navigate('/Authors')
    };

    const changeHandler = (e) => {
        setAuthorData({
            ...authorData,
            author: e.target.value
        })
    }


    return(
        <div className='container'>
            <a href='http://localhost:3000/Authors'>Home</a>
            <h3>Edit this author</h3>
            <form className='form-group bg-light' onSubmit={ update }>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label className='form-label'>Name:</label><br/>
                    <input className='form-control' name='author' type="text" onChange={changeHandler} value={authorData.author}/>
                </div>
                <span className='g-2'>
                    <a href='http://localhost:3000/Authors' className='btn btn-primary'>Cancel</a>
                    <input className='btn btn-primary' type="submit" value='Submit'/>
                </span>
            </form>
        </div>
    )
}

export default UpdateAuthor;