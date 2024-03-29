import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function HOME() {
    const [listofPosts, setListOfPosts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            setListOfPosts(response.data);
            //console.log(response);
        });
    }, [])
    return (
        <div>
            {
                listofPosts.map((value, key) => {
                    return <div className="post">
                        <div className="title"> {value.title}, </div>
                        <div className="body"> {value.postText} </div>
                        <div className="footer"> {value.username} </div>
                    </div>
                })}
        </div>
    )
}

export default HOME
