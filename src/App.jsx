import React, { useState, useEffect } from 'react';


function App() {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    return (
       <div style={{backgroundColor:'wheat',marginLeft:'250px ',marginRight:'250px'}} className='pb-5' >
          <div style={{textAlign:'center',alignItems:'center'}} className='text-center justify-content-center '>
              <h1 style={{color:'black', marginTop:'200px', fontSize:'60px'}} className='pt-5'><b>Quote Generator</b></h1>
              <blockquote >
                  <p style={{color:'blur', fontSize:'20px'}}>{quote.content}</p>
                  <footer style={{color:'green'}}>{quote.author}</footer>
              </blockquote>
              <button className='btn btn-danger ' onClick={fetchQuote}>New Quote</button>
          </div>
       </div>
    );
}

export default App;