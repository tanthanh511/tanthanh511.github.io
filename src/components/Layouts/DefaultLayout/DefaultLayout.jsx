import HeaderLayout from "./Header/Header";
import FooterLayout from "./Footer/Footer";

import { Layout } from "antd";
const { Content } = Layout;

const DefaultLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f0f2f5" }}>
      <HeaderLayout />
      <Content
        style={{
          margin: "40px 100px 0", // top 40px, left-right 100px
          width: "calc(100% - 200px)",
        }}
      >
        {children}
      </Content>
      <FooterLayout />
    </Layout>
  );
};

export default DefaultLayout;
