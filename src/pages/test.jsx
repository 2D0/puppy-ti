import React, { useState, useEffect } from 'react';
import axios from 'axios';
const TestPage = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    const fetchDate = async() => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
      return res.data;
    }
    fetchDate().then(res => setData(res));
  }, []);

  console.log(data.id);

    return(
        <>
            2D0 Pig

        </>
    )
}

export default TestPage;