import { AiTwotoneMail } from "react-icons/ai";

const Contact: React.FC = (): JSX.Element => {
  return (
    <section className="Content">
      <h1 className="ContentHeader">Contact</h1>
      <h2 className="ContentSub">
        -- Feel free to reach out if you wish to know further, or just to ask a
        question --
      </h2>
      <a
        href="mailto:mrbrooknash@gmail.com"
        className="flex justify-center items-center gap-4 hover:text-Green hover:underline"
      >
        <AiTwotoneMail size={36} /> mrbrooknash@gmail.com
      </a>
    </section>
  );
};

export default Contact;
