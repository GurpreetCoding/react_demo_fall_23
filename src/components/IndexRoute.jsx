import React, { useState, useEffect } from "react";
import axios from "axios";


function IndexRoute() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=u1s1yIgXpnpgjluJiHDtPRW3gEkZpTfEWcUFr0Gf')
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  })

    return(
      <React.Fragment>
        <div class="container">
          <div class="row-4">
            <div class="column">
            <p>{posts.title} created on {posts.date}</p>
            </div>
            <div class="column">
              <img src ={posts.url} alt= "Nasa API Image" width="300" height="300"></img>
            </div>
            <div class="column">
              <br></br>
              <p>
                {posts.explanation}
              </p>
              <br></br>
            </div>
          </div>
          
        </div>  
      </React.Fragment>
    )
}

export default IndexRoute