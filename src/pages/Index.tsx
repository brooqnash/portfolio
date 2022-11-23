import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Profile from "../components/Profile";
import Tabs from "../components/Tabs";

const Index: React.FC = (): JSX.Element => {
  // TODO: Show content according to tab context.
  return (
    <main className="Index">
      <div className="flex justify-between">
        <img className="h-24 rounded-full" src="/happy.ico" />
        <h1 className="flex items-center text-4xl font-extrabold">
          Brook<br></br>Nash.
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl">HELLO 👋</h1>
        <p className="italic">A short paragraph about me.</p>
        <span className="flex gap-6">
          <a>
            <AiFillTwitterCircle size={28} />
          </a>
          <a>
            <AiFillGithub size={28} />
          </a>
          <a>
            <AiFillLinkedin size={28} />
          </a>
        </span>
      </div>
      <Tabs />
      <Profile />
    </main>
  );
};

export default Index;
