import { Menu, MenuProps } from "antd";
import { Header } from "antd/es/layout/layout";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const items: MenuProps["items"] = [
    {
      label: <a href="/">Home</a>,
      key: "",
    },
    {
      label: <a href="/tasks">All tasks</a>,
      key: "tasks",
    },
    {
      label: <a href="/add">Add task</a>,
      key: "add",
    },
  ];

  const location = useLocation().pathname.split("/")[1];

  return (
    <Header>
      <Menu selectedKeys={[location]} mode="horizontal" items={items} />
    </Header>
  );
};

export default Navbar;
