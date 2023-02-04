import { DeleteOutlined } from "@ant-design/icons";
import { Checkbox, Spin, Row, Col } from "antd";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context";
import Container from "../Global/Container";
import Editable from "./Editable";

const CurrentTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getTaskById, currentTask, updateTask, deleteTask, loading } =
    useContext(AppContext);
  useEffect(() => {
    const getTask = async () => {
      await getTaskById(id!);
    };
    getTask();
    console.log("used effect");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const [isChecked, setIsChecked] = useState(currentTask.done);

  return (
    <Container>
      {!loading ? (
        <Row style={{ flexDirection: "column" }}>
          <Editable task={currentTask} />
          <Col>
            <Checkbox
              checked={isChecked}
              onChange={() => {
                setIsChecked(!currentTask.done);
                updateTask(currentTask.id, {
                  ...currentTask,
                  done: !currentTask.done,
                });
              }}
            >
              {currentTask?.done ? "mark undone" : "mark done"}
            </Checkbox>
            <DeleteOutlined
              onClick={() => {
                deleteTask(currentTask.id);
                navigate("/tasks");
              }}
            />
          </Col>
        </Row>
      ) : (
        <Spin />
      )}
    </Container>
  );
};

export default CurrentTask;
