import React, {useState, useEffect} from 'react';
import AllAuthors from '../components/AllAuthors';
import axios from 'axios';

const Main = () => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/Authors')
            .then(res => {
                setAuthors(res.data.authors);
                setLoaded(true)
            })
            .catch(err => console.error(err));
    }, [authors]);

    const remove = id => {
        setAuthors(authors.filter(author => author._id !== id));
    }

    return (
        <div className='container'>
            <a href='http://localhost:3000/Authors/new'>Add an Author</a>
            {loaded && <AllAuthors authors={authors} remove={remove}/>}
        </div>
    )
}


export default Main;