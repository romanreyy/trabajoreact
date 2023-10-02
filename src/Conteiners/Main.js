import React from "react";
import '../App.css';
import {SearchBar} from '../components/search_bar';
import {Icon} from '../components/icon';
import {ButtonCreate} from '../components/create_post';
import {Login} from '../components/login';
import {Posts} from '../components/posts';
import {Link} from "react-router-dom";
import CreatePost from './Do_Post';


export default function Main() {

    const [datos, setDatos] = useState([]);

  const handleFormSubmit = (formData) => {
    setDatos([...datos, formData]);
  };

    return (
        <div>
            <nav>
                <Link to="/">
                    <Icon/>
                </Link>
                <br/>
                <hr/>
                <SearchBar/>
                <Link to="/CreatePost">
                    <ButtonCreate/>
                </Link>
                <Link to="/LogIn">
                    <Login/>
                </Link>
                <hr/>
            </nav>
            <div
                style={{
                    padding: "20px"
                }}
            >
                    <CreatePost onFormSubmit={handleFormSubmit} />
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
                    <Posts/>
            </div>

        </div>

    );
}
