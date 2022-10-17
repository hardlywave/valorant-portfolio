import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import useAgents from "../requests/getAgents";
import Agents from "../components/Agents";
import Loader from "../components/Loader";

import ImageList from "@mui/material/ImageList";
import Button from "@mui/material/Button";

const AgentsPage = () => {
  const { loading, agents } = useAgents();
  const [sortByNameActive, setSortByNameActive] = useState(false);
  const [sortByRoleActive, setSortByRoleActive] = useState(true);
  const [sortBy, setSortBy] = useState("role");

  const isSmallWindow = useMediaQuery({ query: `(max-width: 450px)` });
  const isMediumWindow = useMediaQuery({ query: `(max-width: 800px)` });

  const windowSize = () => (isSmallWindow ? 1 : isMediumWindow ? 2 : 4);

  const sortByHandlerRole = () => {
    setSortByRoleActive(true);
    setSortByNameActive(false);
    setSortBy("role");
  };

  const sortByHandlerName = () => {
    setSortByNameActive(true);
    setSortByRoleActive(false);
    setSortBy("name");
  };

  function sortByRole(roleName1: String, roleName2: String) {
    return roleName1 === roleName2 ? 1 : -1;
  }

  function sortByName(agentName: String) {
    return agentName ? 1 : -1;
  }

  return (
    <>
      {loading && <Loader loading={loading} />}
      <Button
        onClick={() => sortByHandlerRole()}
        style={sortByRoleActive ? { display: `none` } : {}}
      >
        By {sortBy}
      </Button>
      <Button
        onClick={() => sortByHandlerName()}
        style={sortByNameActive ? { display: `none` } : {}}
      >
        By {sortBy}
      </Button>
      <ImageList
        cols={windowSize()}
        style={{ overflowY: "auto", padding: "0 15px" }}
        gap={15}
      >
        {agents
          .sort((agent1, agent2) => {
            return sortBy === "role"
              ? sortByRole(agent1.role.displayName, agent2.role.displayName)
              : sortByName(agent1.displayName);
          })
          .map((agent, index) => (
            <Agents key={index} agent={agent} />
          ))}
      </ImageList>
    </>
  );
};

export default AgentsPage;
