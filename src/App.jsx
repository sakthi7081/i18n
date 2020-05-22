import React from 'react';
import Table from './Components/langTable/langTable';
import Header from './Components/Header/Header';
import { GlobalStyle } from './App.style';

function App() {
  return (
    <>  
        <GlobalStyle />
        <Header />    
        <Table />      
    </>
  );
}

export default App;
