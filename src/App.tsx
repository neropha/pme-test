import React from "react";
import Accordion from "./components/AppAccordion/AppAccordion";
import Header from "./components/AppHeader/AppHeader";
import "./utils/fontawesome.tsx";


function App() {
  return (
    <div className="App">
      <Header />
      <main className="d-flex align-items-center justify-content-center">
        <Accordion />
      </main>
    </div>
  );
}

export default App;
