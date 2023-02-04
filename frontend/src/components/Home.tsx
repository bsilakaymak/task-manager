import { Typography } from "antd";
import Container from "./Container";

const Home = () => {
  return (
    <Container>
      <hgroup>
        <Typography.Title level={2}>Welcome </Typography.Title>
        <Typography.Title level={3}>
          Add a new task or display existing ones
        </Typography.Title>
      </hgroup>
    </Container>
  );
};

export default Home;
