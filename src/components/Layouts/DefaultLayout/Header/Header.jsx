import { Menu, Layout } from "antd";

const { Header } = Layout;

const HeaderLayout = () => {
  const menuItems = [
    { key: "home", label: "Home" },
    { key: "skills", label: "Skills" },
    { key: "projects", label: "Projects" },
    { key: "about", label: "About" },
    { key: "contact", label: "Contact" },
  ];
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "0 50px",
        position: "sticky",
        top: 0,
        zIndex: 1,
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          marginRight: "auto",
          color: "#001529",
        }}
      >
        HUỲNH TẤN THANH - DEV PORTFOLIO
      </div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={menuItems}
        style={{
          borderBottom: "none",
          minWidth: "400px",
          justifyContent: "flex-end",
        }}
      />
    </Header>
  );
};

export default HeaderLayout;
