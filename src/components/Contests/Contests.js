import {
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Select,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Header from '../../MyComponents/Header'

const Contests = () => {
  const [value, setValue] = useState("all");
  const [checked, setChecked] = useState(false);
  const [contest, setContest] = useState([]);

  function handleChange(e) {
    if(e.target.value==="none"){
      setValue("all")
    }else{
      setValue(e.target.value);
    }
    console.log(e.target.value);
  }
  function handleCheck(e) {
    setChecked(!checked);
    // console.log("da");
  }

  useEffect(() => {
    fetch(`https://kontests.net/api/v1/${value}`)
      .then((response) => response.json())
      .then((data) => {
        setContest(data);
      })
      .catch((error) => console.error(error));
  }, [value, checked]);

  const GetContests = () => {
    return (
      <>
        {contest.map((c, index) => {
          return checked ? (
            c.in_24_hours=="Yes" && (
              <Tr key={index}>
                <Td>
                  <Link href={c.url}>{c.name}</Link>;
                </Td>
                <Td>{c.start_time}</Td>
                <Td>{c.end_time}</Td>
                {c.site && <Td>{c.site}</Td>}
                <Td>{c.in_24_hours}</Td>
              </Tr>
            )
          ) : (
            <Tr key={index}>
              <Td>
                <Link href={c.url}>{c.name}</Link>;
              </Td>
              <Td>{c.start_time}</Td>
              <Td>{c.end_time}</Td>
              {c.site && <Td>{c.site}</Td>}
              <Td>{c.in_24_hours}</Td>
            </Tr>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Header />
      <HStack justify="center" spacing="20px">
        <Select
          placeholder="Select Platform"
          onChange={handleChange}
          value={value}
          m={10}
          ml={48}
          maxW="container.md"
        >
          <option value="hacker_rank">HackerRank</option>
          <option value="hacker_earth">HackerEarth</option>
          <option value="code_chef">CodeChef</option>
          <option value="leet_code">LeetCode</option>
          <option value="at_coder">AtCoder</option>
          <option value="codeforces">CodeForces</option>
          <option value="top_coder">TopCoder</option>
          <option value="kick_start">Kick Start</option>
          <option value="none">None</option>
        </Select>
        <Checkbox isChecked={checked} onChange={handleCheck} w="lg">
          In 24 hours?
        </Checkbox>
      </HStack>
      <Container maxW="container.xl" m={10} ml={24}>
        <TableContainer whiteSpace="wrap">
          <Table size="md" variant="striped" colorScheme="purple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Start</Th>
                <Th>End</Th>
                {value == "all" && <Th>Site</Th>}
                <Th>In 24 hours</Th>
              </Tr>
            </Thead>
            <Tbody>
              <GetContests />
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Contests;
