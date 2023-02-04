import { Button } from "antd";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context";
import Container from "./Container";
import Task from "./Task";

const CurrentTask = () => {
  const { id } = useParams();
  const { getTaskById, currentTask } = useContext(AppContext);

  useEffect(() => {
    getTaskById(id!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Task editable task={currentTask} />
      <Button>EDIT</Button>
    </Container>
  );
};

export default CurrentTask;
