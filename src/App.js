import React, { useState } from 'react';


function App() {
  const [name] = useState("Nate") 
  
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%"}}>
      <div style={{ backgroundColor: "lightBlue"}}>
        <div>
            <Header/>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <Dashboard>
          <DashboardBody/>
          <DashboardName name={ name }/>
        </Dashboard>
           </div>
      <div style={{ backgroundColor: "lightBlue"}}>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>
        Dashboard Header
      </h1>
    </div>
  )
}

function Dashboard({ children }) {
  return (
    <div>
      <h1>
        Dashboard
      </h1>
      { children }
    </div>
  )
}

function DashboardBody() {
  return (
    <div>
      <p>
        This is the dashboard body and contains text.
      </p>
    </div>
  )
}

function DashboardName({ name }) {
  return (
    <div>
      <h3>
        Sincerely, { name }
      </h3>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <h1>
        Dashboard Footer
      </h1>
    </div>
  )
}

export default App;
