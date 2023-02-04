import { Card, Col, Row } from "antd";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import Task from "./Task";
import Container from "./Container";

const AllTasks = () => {
  const { getAllTasks, tasks } = useContext(AppContext);
  useEffect(() => {
    getAllTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <h2>Tasks</h2>
      <Row gutter={15}>
        {tasks &&
          tasks.length >= 0 &&
          tasks.map((task) => (
            <Col xs={24} sm={12} style={{ marginTop: "16px" }}>
              <Card>
                <Task editable={false} key={task.id} task={task} />
                <Link to={`/task/${task?.id}`}>More info</Link>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AllTasks;
