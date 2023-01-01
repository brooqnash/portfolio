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
    }, 5000);
  }, []);

  return (
    <div className={`Message ${display && "animate-message"}`}>
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
