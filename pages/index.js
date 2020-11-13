import Login from "../components/Login";
import Content from "../components/Content";
import Blog from "../components/Blog";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <Login />
      <Content />
      <Feature />
      <Blog />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
