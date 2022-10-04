import React from "react";
import { useMediaQuery } from "react-responsive";

import useAgents from "../requests/getAgents";
import Agents from "../components/Agents";
import Loader from "../components/Loader";

import ImageList from "@mui/material/ImageList";

const AgentsPage = () => {
  const { loading, agents } = useAgents();

  const isSmallWindow = useMediaQuery({ query: `(max-width: 450px)` });
  const isMediumWindow = useMediaQuery({ query: `(max-width: 800px)` });

  const windowSize = () => (isSmallWindow ? 1 : isMediumWindow ? 2 : 4);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <ImageList
        cols={windowSize()}
        style={{ overflowY: "auto", padding: "0 15px" }}
        gap={15}
      >
        {agents
          .sort((agent1, agent2) =>
            agent1.role.displayName === agent2.role.displayName ? 1 : -1
          )
          .map((agent, index) => (
            <Agents key={index} agent={agent} />
          ))}
      </ImageList>
    </>
  );
};

export default AgentsPage;
