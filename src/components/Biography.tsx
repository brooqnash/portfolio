import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Biography: React.FC = (): JSX.Element => {
  return (
    <div className="Biography">
      <div className="flex justify-between">
        <img className="h-24 rounded-full" src="/happy.ico" />
        <h1 className="flex items-center text-4xl font-extrabold">
          Brook<br></br>Nash.
        </h1>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-extrabold">
          <TypeAnimation
            sequence={[
              "Hello",
              3000,
              "Shwmae",
              3000,
              "Bonjour",
              3000,
              "Hola",
              3000,
              "Nǐn hǎo",
              3000,
              "Konnichiwa",
              3000,
              "Goddag",
              3000,
              "Shalom",
              3000,
            ]}
            repeat={Infinity}
          />
        </h1>
        <p className="w-5/6 text-sm">
          As a self-taught developer, I'm constantly learning and perfecting my
          skill. I enjoy challenges and goals that force me to increase my
          knowledge. I like to create things with web technologies that can help
          give users access to various services.
        </p>
        <p className="text-sm text-Grey">🔞 20 years old</p>
        <p className="text-sm text-Grey">🏳️ Wales, United Kingdom</p>
        <span className="flex gap-6">
          <a
            target="_blank"
            href="https://www.twitter.com/brooqnash"
            title="My Twitter"
            className="SocialIcon"
          >
            <AiFillTwitterCircle size={28} />
          </a>
          <a
            target="_blank"
            href="https://www.github.com/brooqnash"
            title="My GitHub"
            className="SocialIcon"
          >
            <AiFillGithub size={28} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/brooqnash"
            title="My LinkedIn"
            className="SocialIcon"
          >
            <AiFillLinkedin size={28} />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Biography;
