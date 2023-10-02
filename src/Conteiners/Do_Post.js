import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Icon} from "../components/icon";
import {SearchBar} from "../components/search_bar";
import {ButtonCreate} from "../components/create_post";
import {Login} from "../components/login";


export default function CreatePost ({onFormSubmit}){

    const [formData, setFormData] = useState({
        titulo: '',
        contenido: '',
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formData);
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
                <form
                      style={{
                          margin: "0 auto",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                      }}
                >
                    <h1>Crea tu Post</h1>
                    <br/>
                    <input
                        type="text"
                        name="titulo"
                        placeholder="Input Text"
                        value={formData.titulo}
                        onChange={handleInputChange}

                        style={{
                            height: "40px",
                            width: "300px",
                            fontSize: "18px"
                        }}
                    />
                    <br/>
                    <textarea
                        name="Contenido"
                        placeholder="Posteo"
                        value={formData.contenido}
                        onChange={handleInputChange}

                        style={{
                            height: "200px",
                            width: "500px",
                            fontSize: "14px"
                        }}
                    />
                    <br/>
                    <button type="submit"
                           style={{
                               height: "40px",
                               width: "100px"
                           }}
                    >
                        Postear
                    </button>
                </form>
            </div>
        );
    }
