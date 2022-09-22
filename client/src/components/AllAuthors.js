import React from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
    
const AllAuthors = (props) => {
    const navigate = useNavigate();
    const { remove } = props;

    const Delete = (id) => {
        axios.delete(`http://localhost:8000/api/Authors/${id}`)
            .then(res => {
                remove(id)
                console.log(res);
            })
            .catch(err => console.error(err));
        
        navigate('/Authors')
    };

    return (
        <table className='table table-hover bg-light'>
            <h3>We have quotes by:</h3>
            <tbody>
                <tr className='flex justify-content-between'>
                    <td>
                        <h3><strong>Author</strong></h3>
                    </td>
                    <td>
                    <h3><strong>Actions Available</strong></h3>
                    </td>
                </tr>
                {
                    props.authors.map( (author, idx) => {
                        return(
                            <tr className='flex justify-content-between'>
                                <td key={idx}>{author.author}</td>
                                <td>
                                    <a href={`http://localhost:3000/Authors/edit/${author._id}`} className='btn btn-warning'>Edit</a>
                                    <button className='btn btn-danger' onClick={ (e) => Delete(author._id) }>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default AllAuthors;
