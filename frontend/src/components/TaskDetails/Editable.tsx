import { Typography, Spin, Button } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context";

const Editable = ({ task }: { task: any }) => {
  const [updatedTask, setUpdatedTask] = useState(task);
  const { updateTask } = useContext(AppContext);
  console.log("updated task", updatedTask);
  const navigate = useNavigate();

  return (
    <>
      {task ? (
        <Typography.Title
          level={3}
          editable={{
            onChange: (value) =>
              setUpdatedTask({ ...updatedTask, title: value }),
          }}
        >
          {updatedTask.title}
        </Typography.Title>
      ) : (
        <Spin />
      )}
      {task.description ? (
        <Typography.Paragraph
          editable={{
            onChange: (value) =>
              setUpdatedTask({ ...updatedTask, description: value }),
          }}
        >
          {updatedTask.description}
        </Typography.Paragraph>
      ) : (
        <Spin />
      )}
      <Button
        onClick={() => {
          updateTask(task.id, updatedTask);
          navigate("/tasks");
        }}
      >
        EDIT
      </Button>
    </>
  );
};

export default Editable;
