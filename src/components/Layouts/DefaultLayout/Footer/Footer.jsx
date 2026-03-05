import { Space, Layout } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterLayout = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        backgroundColor: "#001529",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <Space size="large" style={{ marginBottom: "20px" }}>
        <a href="#" style={{ color: "#fff", fontSize: "24px" }}>
          <GithubOutlined />
        </a>
        <a href="#" style={{ color: "#fff", fontSize: "24px" }}>
          <LinkedinOutlined />
        </a>
        <a href="#" style={{ color: "#fff", fontSize: "24px" }}>
          <MailOutlined />
        </a>
      </Space>
      <div>
        ©{new Date().getFullYear()} Tạo bởi Huỳnh Tấn Thanh. Phát triển với
        React & Ant Design.
      </div>
    </Footer>
  );
};

export default FooterLayout;
