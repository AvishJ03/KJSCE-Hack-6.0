import React from "react";
import { VStack, Link, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../../MyComponents/Header";
import Footer from "../../MyComponents/Footer";

const Courses = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/experiments/bblsort/visualisation");
  }
  return (
    <>
      <Header />
      <VStack m={50} p={50}>
      <Heading m={20} size="lg">Sorting Algorithms</Heading>
        <Link href="/experiments/bblsort/theory">Bubble Sort</Link>
        <Link href="/experiments/selsort/theory">Selection Sort</Link>
        <Link href="/experiments/inssort/theory">Insertion Sort</Link>
        <Link href="/experiments/mrgsort/theory">Merge Sort</Link>
        <Link href="/experiments/qcksort/theory">Quick Sort</Link>
        <Button onClick={handleClick}>Visualize</Button>
      </VStack>
      <Footer />
    </>
  );
};

export default Courses;
