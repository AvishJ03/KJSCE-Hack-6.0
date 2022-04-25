import React, { useState } from "react";
import Axios from "axios";
import "./Interview.css";
import Header from "../../MyComponents/Header";
import Footer from "../../MyComponents/Footer";
import Cam from "./Cam";
import interview from "../../images/interview.gif";
import { useNavigate } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  extendTheme,
  Input,
  FormControl,
} from "@chakra-ui/react";

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

const Interview = () => {
  const [polarity, setPolarity] = useState("");
  const [suggested, setSuggested] = useState("");
  const [file, setFile] = useState();
  const getData = () => {
    Axios.get("http://localhost:3001/").then((res) => {
      console.log(res);
      setPolarity(res.data.topics[0].sentiment.polarity.score);
      setSuggested(res.data.topics[0].sentiment.suggested);
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const send = (event) => {
    const data = new FormData();
    data.append("file", file);
    console.log(file);
    Axios.post("http://localhost:3001/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="interview-page">
        <Cam />
        <div>
          <ChakraProvider theme={theme}>
            <h1 className="title-interview">Interview Analysis</h1>
            <Box p={8}>
              <FormControl
                action="#"
                variant="floating"
                id="first-name"
                isInvalid
              >
                <Input
                  type="file"
                  id="file"
                  accept=".wav"
                  className="input-file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </FormControl>
              <Button onClick={send}>Upload File</Button>
              <Button
                onClick={() => {
                  onOpen();
                  getData();
                }}
                m={4}
              >{`Analysis`}</Button>
              <p className="para">
                Interviews are crucial moments in one's career. Theoretical
                knowledge of interview questions isn't enough when you actually
                face an interview. As the adage goes, practice makes perfect!
                Mock interviews by VLearn give you the platform to
                prepare, practice and experience firsthand how a real-life job
                interview feels. Familiarizing yourself with the interview
                environment beforehand in a relaxed and stress-free environment
                gives you an edge over your peers. Too often fear takes over our
                performance in job interviews. You can get Sentiment Analysis in
                real-time and asynchronously (i.e., after the call has ended)
                for your Interview. We use Symbl AI to provide you this service.
              </p>
              <img src={interview} className="interview-img" alt="" />
            </Box>
          </ChakraProvider>
        </div>
        <Modal onClose={onClose} size="sm" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Analysis of the Interview</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                {`The mood of the interviewer is positive${suggested}`}
                <br />
                {`The polarity of that student's mood is confident${polarity}`}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default Interview;
