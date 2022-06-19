import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UpdateActor = () => {
  const [actor_name, setActorName] = useState("");
  const redirect = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getActorById = async () => {
      const { data: res } = await axios.get(
        `http://localhost:8000/actor/${id}`
      );
      setActorName(res.actorName);
    };
    getActorById();
  }, []);

  const updateActor = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/actor/${id}`, {
        actor_name,
      });
      redirect("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={updateActor}>
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
        Update
      </Button>
    </Form>
  );
};

export default UpdateActor;
