import React from 'react'
import './App.css'
import {Header} from "./widgets/header/Header";
import {Footer} from "./widgets/footer/Footer";
import RouterProvider from "./providers/routerProvider";

function App() {
  return (
    <div className="app">
      <Header />
      <RouterProvider />
      <Footer />
    </div>
  )
}

export default App
