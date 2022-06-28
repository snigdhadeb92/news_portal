import React, { useEffect, useState } from 'react'

export default function Newsitem() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=9e99dc50193e474992ede1664a57734f`;
      const response = await fetch(url);
      const resjson = await response.json();
      //console.log(resjson.articles);
      setData(resjson.articles);
    }
    fetchApi();
  })
  const mystyle = {
    width: "18rem",
    padding: "10px"
  }
  const maindiv = {
    padding: "10px"
  }
  //console.log(data);
  return (
    <>
      <div className="container" style={maindiv}>
        <div className="row justify-content-md-center">
          <h2>News:</h2>
          {data.map((item) => {
            return (
              <>
                <div className="col-md-auto">
                  <div className="card" style={mystyle}>
                    <img src={item.urlToImage} className="card-img-top" alt="News" />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <a href={item.url} className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
