import { Button, Form, Input, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import Container from "../Global/Container";

const NewTask = () => {
  const { createTask, loading, error } = useContext(AppContext);
  const [created, setCreated] = useState(false);
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
  if (loading) return <Spin />;
  return (
    <Container>
      NEW TASK
      {!created ? (
        <Form>
          <Input
            style={{ marginTop: "20px" }}
            placeholder="Task Title"
            type="text"
            value={task.title}
            onChange={(e) => {
              setTask({ ...task, title: e.target.value });
            }}
          />
          <TextArea
            style={{ marginTop: "20px" }}
            cols={12}
            rows={8}
            placeholder="Task Description"
            value={task.description}
            allowClear
            onChange={(e) => {
              setTask({ ...task, description: e.target.value });
            }}
          />

          <Button
            type="default"
            size="large"
            shape="round"
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              e.preventDefault();
              createTask(task);
              if (!error) setCreated(true);
            }}
            style={{ marginTop: "20px" }}
          >
            ADD TASK
          </Button>
        </Form>
      ) : (
        <div>created</div>
      )}
    </Container>
  );
};

export default NewTask;
