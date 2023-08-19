import Layout from "../Layout/Layout";
import "./Global.module.css";
import Hello from "../pages/Hello/Hello";
import About from "../components/pages/About/About";
import Projects from "../components/pages/Projects/Projects";
import Contacts from "../components/pages/Contacts/Contacts";
import NotFound from "../components/pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
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
