import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreateActor = () => {
  const [actor_name, setActorName] = useState("");
  const redirect = useNavigate();

  const saveActor = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/actor/create", {
        actor_name,
      });
      redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={saveActor}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="string"
          value={actor_name}
          onChange={(e) => setActorName(e.target.value)}
          placeholder="Enter name"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateActor;
