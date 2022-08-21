import React, { useEffect, useState } from "react";
import AgentsSmall from "./components/AgentsSmall";
import List from "@mui/material/List";
import axios from "axios";
import { IAgent } from "./models";
import Header from "./components/Header";

const App = () => {
  const [agents, setAgents] = useState([]);

  const getAgents = async () => {
    const response = await axios
      .get<IAgent[]>(
        `https://valorant-api.com/v1/agents?isPlayableCharacter=true`
      )
      .then((response) => response.data);
    setAgents(response.data);
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div>
      <Header />
      <List
        sx={{
          width: "100%",
          maxWidth: "250px",
          overflow: "auto",
          maxHeight: "300px",
        }}
        disablePadding
      >
        {agents.map((agent) => (
          <AgentsSmall key={agent} agent={agent} />
        ))}
      </List>
    </div>
  );
};

export default App;
