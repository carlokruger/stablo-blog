import React from "react";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

const Home = () => {
  const backgroundImage = '/img/background.jpeg';

  return (
    <Container>
      {backgroundImage && (
        <div
          className="custom-bg-image ml-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="text-white text-center pt-32">
            <h1 className="text-4xl font-bold mb-4">carlo kruger</h1>
            <p className="text-lg">
              this is my space
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Home;