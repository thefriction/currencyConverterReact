import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Currency from "./Currency";

function App(){
  return (
    <div>
    <h1>Convert</h1>
    < Currency />
    <p> === </p>
    < Currency />
    </div>
  );
}

export default App;
