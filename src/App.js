import react, { Component } from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddDataForm from "./components/AddDataForm";
import UpdateDataForm from "./components/UpdateDataForm";
// import {Navigate} from "react-router-dom"
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AddData" element={<AddDataForm />} />
            <Route exact path="/updateData/:id" element={<UpdateDataForm />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}


export default App;
