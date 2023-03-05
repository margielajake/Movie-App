import React, { useState, useEffect } from 'react';
import axios from 'axios'

function EffectHook() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => setPosts(response.data)).catch((err)=>console.log(err)) 
    }, [])
  return (  
    <>
     <ul>
      {
        posts.map((post) => { return(
          <li key={post.id}>{post.title}</li>)
        })
      }
     </ul>
    </>
  );
}

export default EffectHook;