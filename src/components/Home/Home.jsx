import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="home_container">
        <div className="home_header">
          <h1>Search any available RTU exam paper according to your branch semester subject and year of paper, for example:</h1>
          <p>'electrical-3sem-machine-2011'</p>
          <h1>or</h1>
          <p>'3sem-machine'</p>
        </div>
        <div className="home_content">
          <div className="home_search">
            <select name="branches" id="branch" disabled>
              <option value="electrical">Electrical</option>
            </select>
            <button>Enter</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home