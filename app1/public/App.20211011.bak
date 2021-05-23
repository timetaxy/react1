// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import PropTypes from 'prop-types';

function Func1({ name, pict, rate}) {
  // console.log(a1);
  // return <h1> not so serious man...
  //   {a1}
  //   </h1>;
  return <div><h2>{name}</h2><h2>{rate}/5</h2><img src={pict} alt={name}/></div>;
}

Func1.propTypes = {
  name:PropTypes.string.isRequired,
  pict:PropTypes.string.isRequired,
  rate:PropTypes.number.isRequired
}

function renderX(x){
  // return x.map(z=>Func1(z.name, z.url)); //err
  return <Func1 key={x.id} name={x.name} pict={x.url} rate={x.rate}/>;
  // return "<"+Func1(x.id, x.name, x.url, x.rate)+"/>"; //problem: name mapping, key add unuse
}

const env1 = [
  { id:1, rate:1, name: 'starwars', url: 'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4113_star_wars_movie_poster_rey_ma.jpg' },
  { id:2, rate:5, name: 's', url: 'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4113_star_wars_movie_poster_rey_ma.jpg' },
  { id:3, rate:2, name: 'sw', url: 'https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4113_star_wars_movie_poster_rey_ma.jpg' }
];

function App() {

  return (
    <div className="App">
      <h1>hihihi</h1>
      {
        // env1.map(x => (<Func1 key={x.id} name={x.name} pict={x.url}/> ))
        // env1.map(x => (<Func1 key={x.id} name={x.name} pict={x.url}/> ))  
        env1.map(renderX)
      }
    </div>
  );
}

export default App;
