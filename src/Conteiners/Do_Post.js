import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Icon} from "../components/icon";
import {SearchBar} from "../components/search_bar";
import {ButtonCreate} from "../components/create_post";
import {Login} from "../components/login";
export default function CreatePost (){
    const [formData, setFormData] = useState({
        inputText: '',
        textArea: ''
    });
    const [dataList, setDataList] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(dataList));
    }, [dataList]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData };
        setDataList([...dataList, newData]);
        setFormData({ inputText: '', textArea: '' });
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
                <form onSubmit={handleSubmit}
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
                        name="inputText"
                        value={formData.inputText}
                        onChange={handleInputChange}
                        placeholder="Input Text"
                        style={{
                            height: "40px",
                            width: "300px",
                            fontSize: "18px"
                        }}
                    />
                    <br/>
                    <textarea
                        name="textArea"
                        placeholder="Posteo"
                        value={formData.textArea}
                        onChange={handleInputChange}

                        style={{
                            height: "200px",
                            width: "500px",
                            fontSize: "14px"
                        }}
                    />
                    <br/>
                    <button type="submit" value="Postear"
                           style={{
                               height: "40px",
                               width: "100px"
                           }}
                    />
                </form>
            </div>
        );
    }
