import React from "react";
import {
  VStack,
  Link,
  Button,
  Heading,
  LinkBox,
  Text,
  LinkOverlay,
  HStack,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Header from "../../MyComponents/Header";
import Footer from "../../MyComponents/Footer";

const Courses = () => {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    navigate("/experiments/bblsort/visualisation");
  }
  return (
    <>
      <Header />
      <VStack p={25} spacing={5}>
      <Heading m>Courses</Heading>
        <HStack spacing={16}>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Heading textAlign="center" size="md" my="5" mx="1">
              <LinkOverlay href="/experiments/bblsort/visualisation">Sorting Algorithms</LinkOverlay>
            </Heading>
            <Image w='244px' src="https://visualgo.net/img/gif/sorting.gif" />
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Heading textAlign="center" size="md" my="5" mx="1">
              <LinkOverlay href="/experiments/bblsort/theory">Data Types</LinkOverlay>
            </Heading>
            <Image w='244px' src="https://visualgo.net/img/gif/list.gif" />
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Heading textAlign="center" size="md" my="5" mx="1">
              <LinkOverlay href="/experiments/bblsort/theory">Binary Heap</LinkOverlay>
            </Heading>
            <Image w='244px' src="https://visualgo.net/img/gif/heap.gif" />
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Heading textAlign="center" size="md" my="5" mx="1">
              <LinkOverlay href="/experiments/bblsort/theory">Hashing</LinkOverlay>
            </Heading>
            <Image w='244px' src="https://visualgo.net/img/gif/hashtable.gif" />
          </LinkBox>
        </HStack>
        <HStack spacing={16}>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Heading textAlign="center" size="md" my="5" mx="1">
              <LinkOverlay href="/experiments/bblsort/theory">Binary Trees</LinkOverlay>
            </Heading>
            <Image w='244px' src="https://visualgo.net/img/gif/bst.gif" />
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Heading textAlign="center" size="md" my="5" mx="1">
              <LinkOverlay href="/experiments/bblsort/theory">Graphs</LinkOverlay>
            </Heading>
            <Image w='244px' src="https://visualgo.net/img/gif/graphds.gif" />
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Heading textAlign="center" size="md" my="5" mx="1">
              <LinkOverlay href="/experiments/bblsort/theory">Fenwick Tree</LinkOverlay>
            </Heading>
            <Image w='244px' src="https://visualgo.net/img/gif/fenwicktree.gif" />
          </LinkBox>
          <LinkBox as="article" maxW="md" px="10" py="5" borderWidth="1px" rounded="md">
            <Heading textAlign="center" size="md" my="5" mx="1">
              <LinkOverlay href="/experiments/bblsort/theory">Recursion Tree</LinkOverlay>
            </Heading>
            <Image w='244px' src="https://visualgo.net/img/gif/recursion.gif" />
          </LinkBox>
        </HStack>
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
