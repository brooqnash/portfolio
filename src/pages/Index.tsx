import { useContext } from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Tabs from "../components/Tabs";
import { AppContext } from "../context/AppContext";

const Index: React.FC = (): JSX.Element => {
  const { activeTab } = useContext(AppContext);

  return (
    <main className="Index">
      <div className="flex justify-between">
        <img className="h-24 rounded-full" src="/happy.ico" />
        <h1 className="flex items-center text-4xl font-extrabold">
          Brook<br></br>Nash.
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-extrabold">HELLO 👋</h1>
        <p className="italic">A short paragraph about me.</p>
        <span className="flex gap-6">
          <a
            target="_blank"
            href="https://www.twitter.com/brooqnash"
            title="My Twitter"
          >
            <AiFillTwitterCircle size={28} />
          </a>
          <a
            target="_blank"
            href="https://www.github.com/brooqnash"
            title="My GitHub"
          >
            <AiFillGithub size={28} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/brooqnash"
            title="My LinkedIn"
          >
            <AiFillLinkedin size={28} />
          </a>
        </span>
      </div>
      <Tabs />
      {activeTab === "profile" && <Profile />}
      {activeTab === "projects" && <Projects />}
      {activeTab === "contact" && <Contact />}
    </main>
  );
};

export default Index;
