import {
  Container,
  Link,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Contests = () => {
  const [contest, setContest] = useState([]);
  const fetchUsers = () => {
    return fetch("https://kontests.net/api/v1/all")
      .then((response) => response.json())
      .then((data) => {
        setContest(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const GetContests = () => {
    return (
      <>
        {contest.map((c) => {
          return (
            <Tr>
              <Td>
                <Link href={c.url}>{c.name}</Link>;
              </Td>
              <Td>
                {c.start_time}
              </Td>
              <Td>
                {c.end_time}
              </Td>
              <Td>
                {c.site}
              </Td>
              <Td>
                {c.in_24_hours}
              </Td>
            </Tr>
          )
        })}
      </>
    );
  };

  return (
    <TableContainer>
    <Table size='sm' variant="striped" colorScheme='purple'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Start</Th>
          <Th>End</Th>
          <Th>Site</Th>
          <Th>In 24 Hours</Th>
        </Tr>
      </Thead>    
        <Tbody>
          <GetContests />
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Contests;
