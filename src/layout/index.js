import {Component} from "react";
import {Layout} from "antd";

const {Header, Footer, Sider, Content} = Layout;

class BasicLayout extends Component {
    render () {
        return (
          <Layout>
              <Sider>Sider</Sider>
              <Layout>
                  <Header>Header</Header>
                  <Content>Content</Content>
                  <Footer>Footer</Footer>
              </Layout>
          </Layout>
        )
    }
}

export default BasicLayout;