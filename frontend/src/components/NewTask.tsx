import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext, useState } from "react";
import { AppContext } from "../context";
import Container from "./Container";

const NewTask = () => {
  const { createTask } = useContext(AppContext);
  interface Task {
    title: string;
    description: string;
    done: boolean;
  }
  const [task, setTask] = useState<Task>({
    title: "",
    description: "",
    done: false,
  });

  return (
    <Container>
      <Form>
        <Input
          style={{ marginTop: "20px" }}
          type="text"
          value={task.title}
          onChange={(e) => {
            setTask({ ...task, title: e.target.value });
          }}
        />
        <TextArea
          style={{ marginTop: "20px" }}
          cols={12}
          rows={12}
          value={task.description}
          onChange={(e) => {
            setTask({ ...task, description: e.target.value });
          }}
        />

        <Button
          type="default"
          size="large"
          shape="round"
          onClick={() => createTask(task)}
          style={{ marginTop: "20px" }}
        >
          ADD TASK
        </Button>
      </Form>
    </Container>
  );
};

export default NewTask;
