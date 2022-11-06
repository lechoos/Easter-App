import Header from "../Header/Header";
import Layout from "../Layout/Layout";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

const Page = props => {
  const header = <Header title={props.title} />;
  const menu = <Menu />
  const content = props.content;
  const footer = <Footer />

  return (
    <Layout
      header={header}
      menu={menu}
      content={content}
      footer={footer}
    />
  )
}

export default Page;