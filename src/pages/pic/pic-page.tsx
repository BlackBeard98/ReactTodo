import { Button, Container } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";

// import { ImageAvatars } from "./components";

export const Pic: React.FC = () => {
  const [rdata, setData] = useState({ image_link: "", name: "" });

  const fetchRandomAnimal = async () => {
    try {
      const response = await axios.get<typeof rdata>(
        "https://zoo-animal-api.herokuapp.com/animals/rand"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Avatar
          alt={"Jack Sparrow"}
          src={rdata.image_link}
          style={{ width: "75%", height: "75%" }}
        />
        <h5>{rdata.name} </h5>
        <Button variant="contained" color="primary" onClick={fetchRandomAnimal}>
          Primary
        </Button>
      </Container>
    </div>
  );
};
