import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined, DisconnectOutlined } from "@ant-design/icons";
import actions from "../Actions";
import { Dropdown, Space } from "antd";
import history from "../history";
function AdminDropdown() {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const onClick = ({ key }) => {
    if (key === "Profile" ) history.push(`/Profile/${currentUser}`);
    if (key === "Logout") dispatch(actions.admin.logout());
  };

  const items = [
    {
      key: "Profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "Logout",
      label: "Logout",
      icon: <DisconnectOutlined />,
    },
  ];

  return (
    <Dropdown menu={{ items, onClick }} trigger={["click"]} placement="bottom">
      <Space>Admin</Space>
    </Dropdown>
  );
}

export default AdminDropdown;
