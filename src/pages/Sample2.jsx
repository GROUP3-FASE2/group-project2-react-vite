import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Sample = () => {
  return (
    <Container>
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        {/* START CONTENT HERE */}

        <h1 className="text-center m-auto">CONTENT</h1>

        {/* END CONTENT HERE */}
      </div>
    </Container>
  );
};

export default Sample;
