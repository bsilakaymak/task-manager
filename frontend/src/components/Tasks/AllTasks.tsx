import { Col, Row, Typography } from "antd";
import { useContext } from "react";
import { AppContext } from "../../context";
import Task from "./Task";
import Container from "../Global/Container";

const AllTasks = () => {
  const { tasks } = useContext(AppContext);
  console.log("tasks", tasks);
  const openTasks = tasks?.filter((task) => task.done === false);
  const finishedTasks = tasks?.filter((task) => task.done === true);
  return (
    <Container>
      <h2>Tasks</h2>
      <Typography.Title level={3}> Open Tasks </Typography.Title>
      <Row gutter={15}>
        {openTasks.length > 0 ? (
          openTasks.map((task) => (
            <Col key={task.id} style={{ marginTop: "16px" }}>
              <Task task={task} />
            </Col>
          ))
        ) : (
          <div>NO OPEN TASKS</div>
        )}
      </Row>
      <Typography.Title level={3}> Finished Tasks </Typography.Title>
      <Row gutter={15}>
        {finishedTasks.length > 0 ? (
          finishedTasks.map((task) => (
            <Col key={task.id} style={{ marginTop: "16px" }}>
              <Task task={task} />
            </Col>
          ))
        ) : (
          <div>NO FINISHED TASKS</div>
        )}
      </Row>
    </Container>
  );
};

export default AllTasks;
