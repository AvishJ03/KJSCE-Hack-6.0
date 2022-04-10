import React, { useState, useEffect } from 'react'
import {
    HStack,
    VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    RadioGroup,
    Stack,
    Radio,
    Button,
    Input,
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
  } from '@chakra-ui/react'
const Chatbot = () => {

    const value = {
        help : "Help Ran",
        events : "Events Ran"
    }


    // console.log(value.help);
        const [chat, setChat] = useState()
        const [chatArray, setChatArray] = useState([])
        const [checkValue, setCheckValue] = useState([])
        const { isOpen, onOpen, onClose } = useDisclosure()
        const scrollBehavior = "outside"
      
        const [bool, setBool] = useState([])

        const onChange = (e)=>{
            setChat(e.target.value)
        }

        const submit = ()=>{
            setChatArray((prevValue)=>{
                return(
                    [...prevValue, chat]
                )
            })
            setBool((prevValue)=>{
                return([...prevValue, true])
            })
            
            if(chat === "help"){
                setCheckValue((prevValue)=>{
                    return([...prevValue, value.help])
                });
            }else if(chat === "events"){
                setCheckValue((prevValue)=>{
                    return([...prevValue, value.events])
                });
            }
            setChat("")
            console.log(bool);
        }

        const btnRef = React.useRef()
        return (
          <>
      
            <Button mt={3} ref={btnRef} onClick={onOpen}>
              Trigger modal
            </Button>
      
            <Modal
              onClose={onClose}
              finalFocusRef={btnRef}
              isOpen={isOpen}
              scrollBehavior={scrollBehavior}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <VStack spacing="4">
                    <Input placeholder='large size' size='lg' value={chatArray[0]} onChange={onChange} textAlign="right"/>
                    {bool[0] && <Tag size="lg" w = "600px" h = "50px">{checkValue[0]}</Tag>}
                    {bool[0] && <Input placeholder='large size' size='lg' value={chatArray[1]} onChange={onChange} textAlign="right" />}
                    {bool[1] && <Tag size="lg" w = "600px" h = "50px">{checkValue[1]}</Tag>}
                    {bool[1] && <Input placeholder='large size' size='lg' value={chat} onChange={onChange} textAlign="right" />}
                  </VStack>
                </ModalBody>
                <ModalFooter>
                <HStack spacing="60">
                  <Button onClick={submit}>Enter</Button>
                  <Button onClick={onClose}>Close</Button>
                </HStack>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      }
    
export default Chatbot  