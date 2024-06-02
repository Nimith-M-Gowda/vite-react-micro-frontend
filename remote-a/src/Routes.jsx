import { Routes, Route } from "react-router-dom";

function Home() {
  return <div>Am Home of RemoteA</div>;
}

function About() {
  return <div>Am About of RemoteA</div>;
}

function Contact() {
  return <div>Am Contact of RemoteA</div>;
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
