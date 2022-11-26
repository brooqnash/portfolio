import { useContext } from "react";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Tabs from "../components/Tabs";
import Biography from "../components/Biography";
import { AppContext } from "../context/AppContext";

const Index: React.FC = (): JSX.Element => {
  const { activeTab } = useContext(AppContext);

  // TODO: Typing animation. [x]
  // TODO: Content added. [x]
  // TODO: Icons hover state. [x]
  // TODO: Seperate index into components. [x]
  // TODO: Add footer.

  return (
    <main className="Index">
      <Biography />
      <Tabs />
      {activeTab === "profile" && <Profile />}
      {activeTab === "projects" && <Projects />}
      {activeTab === "contact" && <Contact />}
    </main>
  );
};

export default Index;
