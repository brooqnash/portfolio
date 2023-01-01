import { useEffect, useState } from "react";
import { BiErrorCircle, BiInfoCircle } from "react-icons/bi";

interface Props {
  type: string;
  content: string;
}

const Message: React.FC<Props> = (MessageInfo: Props): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(false);
    }, 3000);
  }, []);

  return (
    <div
      style={{ display: display ? "flex" : "none" }}
      className="fixed top-12 left-12 w-72 p-4 flex items-center gap-4 bg-DarkGrey rounded z-10"
    >
      {MessageInfo.type === "error" && (
        <BiErrorCircle color="#CD5C5C" size={24} />
      )}
      {MessageInfo.type === "info" && (
        <BiInfoCircle color="#76B7C7" size={24} />
      )}
      <p className="text-sm">{MessageInfo.content}</p>
    </div>
  );
};

export default Message;
