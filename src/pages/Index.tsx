import { useContext } from "react";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Tabs from "../components/Tabs";
import Biography from "../components/Biography";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";

const Index: React.FC = (): JSX.Element => {
  const { activeTab } = useContext(AppContext);

  // TODO: Cache GitHub repos.
  // TODO: Repo fallback.

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
