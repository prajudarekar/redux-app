import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Counter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
