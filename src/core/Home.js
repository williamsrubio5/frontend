import React, {useState, useEffect} from 'react';
import Navigation from './Navigation';
import {getVideogames} from './apiCore';
import Card from './Card';
import "./Footer.css";
import PS from './img/PS.png';
import xbox from './img/xbox.png';

const Home = (req, res) => {
  const [videogames, setVideogames] = useState([]);
  const [error, setError] = useState(false);

  const loadVideoGames = () => {
    getVideogames().then(data => {
      if (data.error) {
        setError(data.error)
      } else {
        setVideogames(data);
        console.log(data);
      }
    })
  }

  useEffect(() => {
    loadVideoGames();
  }, [])
  return (
    <div>
      <Navigation/>
      <div className="page-container">
      <div className="content-wrap">
      {videogames.map((videogame, i) => (
    <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-sm-6">
      <Card videogame={videogame} />
    </div>
  ))}
      </div>
      
      <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
          
            <h1 className="list-unstyled">
            <div align="center"><img src= {PS}/> </div>
            </h1>
          </div>
         
          {/* Column3 */}
          <div className="col">
           
            <ui className="list-unstyled">
            <div align="center"><img src= {xbox}/> </div>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            <div align="center">
            &copy;{new Date().getFullYear()} Terms Of Service | Privacy
            </div>
          </p>
        </div>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Home;