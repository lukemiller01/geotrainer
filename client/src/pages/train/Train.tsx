// React
import React, {useState, useEffect} from 'react'

// Styles
import './train.css'

export default function Train() {

  const [posts, setPosts] = useState<any[]>([]);

  // Removing "hidden" overflow from the body class
  useEffect(() => {
    document.body.className = '';
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('https://restcountries.com/v3.1/lang/spa');
      const data = await response.json();
      setPosts(data);
   };
   fetchPost();
  }, [])

  return (
    <>
     {posts.map((item, index) => (
        <p key={index}>{item.capital}</p>
      ))}
    </>
  );
}

// export default Train