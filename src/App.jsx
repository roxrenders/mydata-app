import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import CreateAds from './Components/CreateAds';
import SingleFormPage from './Forms/SingleFormPage';
import CommonFormPage from './Forms/CommonFormPage';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/createads' element={<CreateAds />} />
          <Route path='/form1' element={<SingleFormPage />} />
          <Route path='/form2' element={<CommonFormPage/>} />
          <Route path='/commonform' element={<CommonFormPage/>} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
