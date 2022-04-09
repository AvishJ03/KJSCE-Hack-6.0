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
      <div>
        {contest.map((c) => {
          return (
            <div>
              <a href={c.url}>{c.name}</a>
            </div>
          );
        })}
      </div>
    );
  };

  return <GetContests />;
};

export default Contests;
