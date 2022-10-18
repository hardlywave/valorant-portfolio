import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../components/scss/AgentsPage.scss";

import useAgents from "../requests/getAgents";
import Agents from "../components/tsx/Agents";
import Loader from "../components/tsx/Loader";

import ImageList from "@mui/material/ImageList";
import Button from "@mui/material/Button";
import { IAgent } from "../models";
import Box from "@mui/material/Box";

const AgentsPage = () => {
  const { loading, agents } = useAgents();
  const [agentsList, setAgentsList] = useState<IAgent[]>([]);
  const [sortBy, setSortBy] = useState("role");

  const isSmallWindow = useMediaQuery({ query: `(max-width: 450px)` });
  const isMediumWindow = useMediaQuery({ query: `(max-width: 800px)` });

  const windowSize = () => (isSmallWindow ? 1 : isMediumWindow ? 2 : 4);

  const sortByHandler = () => {
    sortBy === "role" ? setSortBy("name") : setSortBy("role");
  };

  useEffect(() => {
    setAgentsList(agents);

    if (sortBy === "role") {
      setAgentsList(sortByRole());
    } else if (sortBy === "name") {
      setAgentsList(sortByName());
    }
  }, [agents, sortBy]);

  function sortByRole() {
    return [...agents].sort((el1, el2) =>
      el1.role.displayName === el2.role.displayName ? 1 : -1
    );
  }

  function sortByName() {
    return [...agents].sort((el1, el2) =>
      el1.displayName.localeCompare(el2.displayName)
    );
  }

  return (
    <>
      {loading && <Loader loading={loading} />}
      <Box>
        <Button
          onClick={() => sortByHandler()}
          className="sortAgentsButton"
          variant="outlined"
          sx={{ m: "15px 0 0 15px", transform: "scale(0.98)" }}
        >
          Sort by {sortBy}
        </Button>
        <ImageList
          cols={windowSize()}
          style={{ overflowY: "auto", padding: "0 15px" }}
          gap={15}
        >
          {agentsList.map((agent, index) => (
            <Agents key={index} agent={agent} />
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default AgentsPage;
