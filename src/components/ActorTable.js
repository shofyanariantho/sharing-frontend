import React from "react";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";

const ActorTable = () => {
  const [actors, setActors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getActors();
  }, []);

  const getActors = async () => {
    const { data: res } = await axios.get("http://localhost:8000/actor");
    setActors(res);
  };

  const deleteActor = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/actor/${id}`);
      getActors();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <Button href="add" variant="primary" size="md" className="mb-2">
            Add Actor
          </Button>
        </div>
        <div className="col-4">
          <Form.Control
            type="string"
            placeholder="Search..."
            className="mb-3"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {actors
            .filter((actor) => {
              if (searchTerm == "") {
                return actor;
              } else if (
                actor.actorName
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return actor;
              }
            })
            .map((actor, index) => (
              <tr key={actor.id}>
                <td>{index + 1}</td>
                <td>{actor.actorName}</td>
                <td>
                  <Button href={`edit/${actor.id}`} variant="success" size="sm">
                    Edit
                  </Button>{" "}
                  <Button
                    onClick={() => deleteActor(actor.id)}
                    variant="danger"
                    size="sm"
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default ActorTable;
