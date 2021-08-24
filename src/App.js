//import react into all component files
import React from 'react';
//you can import any css or image at top

import About from './components/About';
import Nav from './components/Nav';



function App() {
  return (
    <div >
      <Nav></Nav>
      <main>
        <About></About>
      </main>

    </div>
  );
}

export default App;
