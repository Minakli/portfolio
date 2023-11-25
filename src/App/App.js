import "./Global.module.css";
import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Hello from "../pages/Hello/Hello";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Contacts from "../pages/Contacts/Contacts";
import NotFound from "../pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  // const [codeSnippetArr, setCodeSnippetArr] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Minakli/gists")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCodeSnippetArr(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  // console.log(codeSnippetArr);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
export default App;
