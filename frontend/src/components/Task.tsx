import { Checkbox, Typography } from "antd";

const Task = ({ task, editable }: { task: any; editable: boolean }) => {
  return (
    <div style={{ padding: "16px" }}>
      <Typography.Title level={3} editable={editable}>
        {task?.title}
      </Typography.Title>
      <Typography.Paragraph editable={editable}>
        {task?.description}
      </Typography.Paragraph>
      <Checkbox checked={task?.done}>
        {task?.done ? "undo" : "mark done"}
      </Checkbox>
    </div>
  );
};

export default Task;
