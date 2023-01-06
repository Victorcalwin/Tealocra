import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Firstpage from './Components/Firstpage';

export const AllComment = React.createContext();
function App() {
  const [comment, setComment] = useState([
    {
      post: "This is from context api"
    },
    {
      post: "This is from context api"
    },

  ]);




  return (
    <div className="App">
      <BrowserRouter>
        <AllComment.Provider value={{ comment, setComment }}>
          <Routes>
            <Route path='firstpage' element={<Firstpage />} />
          </Routes>
        </AllComment.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
