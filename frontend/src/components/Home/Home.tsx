import { Typography } from "antd";
import Container from "../Global/Container";

const Home = () => {
  return (
    <Container>
      <section>
        <Typography.Title level={2}>Welcome to Task Manager </Typography.Title>
        <Typography.Paragraph>
          Add a new task or manage existing ones
        </Typography.Paragraph>
      </section>
    </Container>
  );
};

export default Home;
