import React from "react";
import { Routes, Route } from "react-router-dom";
const RemoteA = React.lazy(() => import("remoteA/App"));
const RemoteB = React.lazy(() => import("remoteB/App"));

function Home() {
  return <div>Am Home of Host</div>;
}

function About() {
  return <div>Am About of Host</div>;
}

function Contact() {
  return <div>Am Contact of Host</div>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="remoteA/*" element={<RemoteA />} />
      <Route path="remoteB/*" element={<RemoteB />} />
    </Routes>
  );
}

export default AppRoutes;
