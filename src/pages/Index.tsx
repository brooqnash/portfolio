import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Tabs from "../components/Tabs";
import Biography from "../components/Biography";
import Footer from "../components/Footer";

const Index: React.FC = (): JSX.Element => {
  const { activeTab } = useContext(AppContext);

  return (
    <main className="Index">
      <Biography />
      <Tabs />
      {activeTab === "profile" && <Profile />}
      {activeTab === "projects" && <Projects />}
      {activeTab === "contact" && <Contact />}
      <Footer />
    </main>
  );
};

export default Index;
