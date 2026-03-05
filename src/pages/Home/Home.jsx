import {
  Layout,
  Button,
  Row,
  Col,
  Card,
  Typography,
  Space,
  Form,
  Input,
  Divider,
  message,
  Tag,
  Grid,
} from "antd";
import {
  GithubOutlined,
  CodeOutlined,
  RobotOutlined,
  ApiOutlined,
  PlaySquareOutlined,
  DatabaseOutlined,
  WindowsOutlined,
  ToolOutlined,
} from "@ant-design/icons";

import overcast from "../../asset/icon/overcast.png";
import htt from "../../asset/logo/htt.png";

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;
const { useBreakpoint } = Grid;

const Home = () => {
  const [form] = Form.useForm();

  const onFinishContact = async (values) => {
    try {
      await fetch("http://localhost:8000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      message.success("Gửi thành công!");
      form.resetFields();
    } catch {
      message.error("Gửi thất bại!");
    }
  };
  return (
    <>
      {/* HERO SECTION */}
      <Row
        align="middle"
        gutter={[32, 32]}
        style={{
          minHeight: "60vh",
          padding: "40px 0",
        }}
        width={"100%"}
      >
        <Col xs={24} md={12}>
          <Title level={1} style={{ fontSize: "3rem", marginBottom: 0 }}>
            HELLO, I'M HUYNH TAN THANH <img src={overcast} />
          </Title>
          <Title level={2} style={{ color: "#1677ff", marginTop: 0 }}>
            SOFTWARE DEVELOPER
          </Title>
          <Paragraph
            style={{
              fontSize: "1.2rem",
              color: "#595959",
              marginTop: "20px",
              textAlign: "justify",
            }}
          >
            Mid-level Full-stack Developer with 2 years of experience building
            and maintaining ERP systems inthehospitalitydomain using ReactJS and
            ASP.NET Core. Experienced in designing scalable RESTful APIs,
            optimizing SQLperformancefor large datasets, and integrating
            third-party services such as E-Invoice systems. Strong focus on
            performance tuning, cleanarchitecture, and delivering
            production-ready solutions
          </Paragraph>
          <Space size="middle" style={{ marginTop: "20px" }}>
            <Button type="primary" size="large">
              About me
            </Button>
            <Button size="large" href="/CV_HuynhTanThanh_Full.pdf" download>
              Download CV
            </Button>
          </Space>
        </Col>
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          {/* Thay thế src bằng ảnh của bạn hoặc một hình minh họa dev */}
          <img
            src={htt}
            alt="Developer Illustration"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Col>
      </Row>

      <Divider />

      {/* SKILLS SECTION - Đã cấu trúc lại thành 6 khối chi tiết */}
      <div
        style={{
          // padding:  "60px 0" : "30px 0",
          textAlign: "center",
        }}
      >
        <Title level={2} style={{ marginBottom: "10px" }}>
          Skills & Technologies
        </Title>

        <Row gutter={[24, 24]}>
          {/* 1. Frontend */}
          <Col xs={24} sm={12} md={8}>
            <Card hoverable style={{ height: "100%", textAlign: "left" }}>
              <CodeOutlined
                style={{
                  fontSize: "32px",
                  color: "#1677ff",
                  marginBottom: "15px",
                }}
              />
              <Title level={4}>Front-end</Title>
              <Text
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#595959",
                }}
              >
                Built modular and highly reusable UI components
              </Text>
              <Space size={[0, 8]} wrap style={{ marginBottom: "15px" }}>
                <Tag color="blue">ReactJS</Tag>
                <Tag color="blue">TypeScript</Tag>
                <Tag color="blue">Redux</Tag>
                <Tag color="cyan">Ant Design</Tag>
                <Tag color="cyan">MUI</Tag>
              </Space>
            </Card>
          </Col>

          {/* 2. Backend */}
          <Col xs={24} sm={12} md={8}>
            <Card hoverable style={{ height: "100%", textAlign: "left" }}>
              <ApiOutlined
                style={{
                  fontSize: "32px",
                  color: "#52c41a",
                  marginBottom: "15px",
                }}
              />
              <Title level={4}>Back-end & API</Title>
              <Text
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#595959",
                }}
              >
                Designed scalable RESTful APIs following Clean Architecture
                principles
              </Text>
              <Space size={[0, 8]} wrap style={{ marginBottom: "15px" }}>
                <Tag color="green">C#</Tag>
                <Tag color="green">ASP.NET Core</Tag>
                <Tag color="lime">Entity Framework</Tag>
                <Tag color="lime">LINQ</Tag>
              </Space>
            </Card>
          </Col>

          {/* 3. Database */}
          <Col xs={24} sm={12} md={8}>
            <Card hoverable style={{ height: "100%", textAlign: "left" }}>
              <DatabaseOutlined
                style={{
                  fontSize: "32px",
                  color: "#fa8c16",
                  marginBottom: "15px",
                }}
              />
              <Title level={4}>Database</Title>
              <Text
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#595959",
                }}
              >
                Optimized SQL queries and indexing to improve system performance
              </Text>
              <Space size={[0, 8]} wrap style={{ marginBottom: "15px" }}>
                <Tag color="orange">SQL Server</Tag>
                <Tag color="orange">MySQL</Tag>
              </Space>
            </Card>
          </Col>

          {/* 4. AI & Agents */}
          <Col xs={24} sm={12} md={8}>
            <Card hoverable style={{ height: "100%", textAlign: "left" }}>
              <RobotOutlined
                style={{
                  fontSize: "32px",
                  color: "#722ed1",
                  marginBottom: "15px",
                }}
              />
              <Title level={4}>AI & Chatbots</Title>
              <Text
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#595959",
                }}
              >
                Integrated AI agents and intelligent chatbots into the software
                system
              </Text>
              <Space size={[0, 8]} wrap style={{ marginBottom: "15px" }}>
                <Tag color="purple">AI Agent</Tag>
                <Tag color="purple">Deepseek</Tag>
                <Tag color="magenta">Chat GPT</Tag>
                <Tag color="magenta">Rasa</Tag>
              </Space>
            </Card>
          </Col>

          {/* 5. Desktop Dev */}
          <Col xs={24} sm={12} md={8}>
            <Card hoverable style={{ height: "100%", textAlign: "left" }}>
              <WindowsOutlined
                style={{
                  fontSize: "32px",
                  color: "#13c2c2",
                  marginBottom: "15px",
                }}
              />
              <Title level={4}>Desktop App</Title>
              <Text
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#595959",
                }}
              >
                Developed stable and robust desktop management applications
              </Text>
              <Space size={[0, 8]} wrap style={{ marginBottom: "15px" }}>
                <Tag color="cyan">WinForms</Tag>
                <Tag color="cyan">DevExpress</Tag>
                <Tag color="cyan">C#</Tag>
              </Space>
            </Card>
          </Col>

          {/* 6. Tools & Workflow */}
          <Col xs={24} sm={12} md={8}>
            <Card hoverable style={{ height: "100%", textAlign: "left" }}>
              <ToolOutlined
                style={{
                  fontSize: "32px",
                  color: "#eb2f96",
                  marginBottom: "15px",
                }}
              />
              <Title level={4}>Tools & Processes</Title>
              <Text
                style={{
                  display: "block",
                  marginBottom: "10px",
                  color: "#595959",
                }}
              >
                Collaborated with BA, QA, and clients; resolved production
                issues.
              </Text>
              <Space size={[0, 8]} wrap style={{ marginBottom: "15px" }}>
                <Tag color="pink">Git / SVN</Tag>
                <Tag color="pink">Figma</Tag>
                <Tag color="pink">Teamwork</Tag>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>

      <Divider />

      {/* PROJECTS SECTION */}
      {/* <div style={{ padding: "60px 0" }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
          Dự Án Nổi Bật
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12} lg={8}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    height: "200px",
                    backgroundColor: "#e6f7ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <RobotOutlined
                    style={{ fontSize: "60px", color: "#1677ff" }}
                  />
                </div>
              }
              actions={[
                <Button type="link" icon={<GithubOutlined />}>
                  Mã nguồn
                </Button>,
                <Button type="link">Dùng thử</Button>,
              ]}
            >
              <Meta
                title="Hệ thống AI Agent Thông minh"
                description="Xây dựng luồng tác vụ tự động sử dụng Python và tối ưu API với FastAPI. Giúp tự động hóa các quy trình business phức tạp."
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    height: "200px",
                    backgroundColor: "#f6ffed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CodeOutlined
                    style={{ fontSize: "60px", color: "#52c41a" }}
                  />
                </div>
              }
              actions={[
                <Button type="link" icon={<GithubOutlined />}>
                  Mã nguồn
                </Button>,
                <Button type="link">Dùng thử</Button>,
              ]}
            >
              <Meta
                title="Responsive Web Application"
                description="Phát triển giao diện người dùng tương tác cao bằng ReactJS và CSS hiện đại. Quản lý state mượt mà, tối ưu trải nghiệm UI/UX."
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={8}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    height: "200px",
                    backgroundColor: "#f6ffed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CodeOutlined
                    style={{ fontSize: "60px", color: "#52c41a" }}
                  />
                </div>
              }
              actions={[
                <Button type="link" icon={<GithubOutlined />}>
                  Mã nguồn
                </Button>,
                <Button type="link">Dùng thử</Button>,
              ]}
            >
              <Meta
                title="Responsive Web Application"
                description="Phát triển giao diện người dùng tương tác cao bằng ReactJS và CSS hiện đại. Quản lý state mượt mà, tối ưu trải nghiệm UI/UX."
              />
            </Card>
          </Col>
        </Row>
      </div> */}

      <Divider />

      {/* ABOUT & CONTACT SECTION */}
      <Row gutter={[48, 48]} style={{ padding: "60px 0" }}>
        {/* Về Bản Thân */}
        <Col xs={24} md={12}>
          <Title level={2}>Về Bản Thân</Title>
          <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            I am a Full-stack Developer with experience in developing web
            applications and software, with a solid foundation in both Front-end
            and Back-end technologies. I am capable of working independently as
            well as collaborating effectively in a team environment. In
            addition, I have strong logical thinking, problem-solving skills,
            and the ability to quickly understand technical requirements. I am
            always proactive in learning and continuously improving my skills to
            contribute effectively to product development
          </Paragraph>
          <Paragraph style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
            <PlaySquareOutlined
              style={{ marginRight: "8px", color: "#1677ff" }}
            />
            Fun fact: I enjoy analyzing and resolving issues that arise in
            systems, especially those occurring in real production environments.
            Outside of work, I enjoy sports—particularly badminton—which helps
            me maintain focus and positive energy
          </Paragraph>
        </Col>

        {/* Liên Hệ */}
        <Col xs={24} md={12}>
          <Card
            title={
              <Title level={3} style={{ margin: 0 }}>
                Send me a message
              </Title>
            }
            bordered={false}
            style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
          >
            <Form form={form} layout="vertical" onFinish={onFinishContact}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name!" }]}
              >
                <Input placeholder="John Doe" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email!",
                    type: "email",
                  },
                ]}
              >
                <Input placeholder="email@example.com" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Content"
                rules={[
                  { required: true, message: "Please enter your message!" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Hello, I would like to discuss collaboration opportunities..."
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
