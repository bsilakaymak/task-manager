import { DeleteOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Collapse, Typography } from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context";

const Task = ({ task }: { task: any }) => {
  const { updateTask, deleteTask } = useContext(AppContext);
  const [isChecked, setIsChecked] = useState(task.done);
  const navigate = useNavigate();

  return (
    <section style={{ padding: "16px" }}>
      <Card hoverable bodyStyle={{ padding: "0px" }}>
        <Collapse bordered={false}>
          <Collapse.Panel header={task?.title} key={task.id}>
            <Typography.Paragraph>{task?.description}</Typography.Paragraph>
            <div>
              <Button
                onClick={() => {
                  navigate(`/task/${task?.id}`);
                  window.location.reload();
                }}
              >
                Details
              </Button>
            </div>
          </Collapse.Panel>
        </Collapse>
        {task && task.id && (
          <Card>
            <Checkbox
              checked={isChecked}
              onChange={() => {
                setIsChecked(!task.done);
                updateTask(task.id, { ...task, done: !task.done });
              }}
            >
              {task?.done ? "mark undone" : "mark done"}
            </Checkbox>
            <DeleteOutlined
              onClick={() => {
                deleteTask(task.id);
              }}
            />
          </Card>
        )}
      </Card>
    </section>
  );
};

export default Task;
