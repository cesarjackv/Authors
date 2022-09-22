//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthorForm from './views/AuthorForm';
import UpdateAuthor from './views/UpdateAuthor';
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <h1><strong>Favorite Authors</strong></h1>
      <Routes>
            <Route element={<Main/>} exact path={"/Authors"}/>
            <Route element={<AuthorForm/>} exact path="/Authors/new" />
            <Route element={<UpdateAuthor/>} exact path="/Authors/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
