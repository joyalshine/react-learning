import './App.css'
import React from 'react'
import Banner from './components/film-banner/banner'

function App() {

  let list = []
  for(var i = 0 ; i<10;i++){
    list.push("KGF")
  }

  return (
    <div>
      <Banner data={list}/>
    </div>
  );
}
export default App;
