import { Routes, Route } from "react-router-dom";

function Home() {
  return <div>Am Home of RemoteB</div>;
}

function About() {
  return <div>Am About of RemoteB</div>;
}

function Contact() {
  return <div>Am Contact of RemoteB</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
