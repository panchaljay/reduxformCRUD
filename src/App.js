import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Table from "./Components/Table";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <div>
        <Header />
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
