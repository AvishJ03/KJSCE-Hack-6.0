import React, { useState } from 'react'
import Axios from 'axios'
import Cam from './Cam'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

const Interview = () => {
  const [polarity, setPolarity] = useState("")
  const [suggested, setSuggested] = useState("")
  Axios.get("http://localhost:3001/").then(res => {
    console.log(res);
    setPolarity(res.data.topics[0].sentiment.polarity.score);
    setSuggested(res.data.topics[0].sentiment.suggested);
  })

  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (<>
    
      <Cam />
       <Button 
       onClick={onOpen}
          m={4}
        >{`Analysis`}</Button>
      <Modal onClose={onClose} size="sm" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>The mood of the interviee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div>
          {`The mood of the interviee is ${suggested}`}
          <br/>
          {`The polarity of that mood is ${polarity}`}
          </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>)
  
}

export default Interview