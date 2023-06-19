import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="profile-container">
        <img
          src={process.env.PUBLIC_URL + '/ptr.jpg'}
          alt="Profile Picture"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2>Just_Malak</h2>
          <p className="ptrhd">Algerian Potterhead</p>
        </div>
      </div>
      <div className='info'>
        <div className="profile-titles">
          <div>
            <h2>House:</h2>
            <h3>Gryffindor</h3>
          </div>
          <div>
            <h2> house leader :</h2>
            <h3> Proffessor Severus Snape</h3>
          </div>
          <div>
            <h2>Patronus:</h2>
            <h3>Doe</h3>
          </div>
        
        <div >
          <h3>Education:</h3>
          <p>PhD in Witchcraft</p>
          <p>BSc in Muggle Studies</p>
        </div>
        <div >
          <h3>Executive Summary:</h3>
          <ul>
            <li>Successfully brewed Polyjuice Potion as a second-year student at Hogwarts</li>
            <li>Earned 10 Outstanding O.W.L.s</li>
            <li>Founder of the Society for the Promotion of Elvish Welfare and organizer of Dumbledore's Army</li>
          </ul>
        </div>
      </div>
      </div>
      <img src={process.env.PUBLIC_URL + '/hg.png'} alt="Hogwarts Logo" className='hg' />
    </div>
  );
}

export default App;

