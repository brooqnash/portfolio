import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Tabs: React.FC = (): JSX.Element => {
  const { activeTab, dispatch } = useContext(AppContext);

  const changeTab = (selectedTab: string) => {
    dispatch({ type: "Change_Tab", payload: selectedTab });
  };

  return (
    <ul className="Tabs">
      <li
        onClick={() => changeTab("profile")}
        className={activeTab === "profile" ? "TabFocused" : "Tab"}
      >
        Profile
      </li>
      <li
        onClick={() => changeTab("projects")}
        className={activeTab === "projects" ? "TabFocused" : "Tab"}
      >
        Projects
      </li>
      <li
        onClick={() => changeTab("contact")}
        className={activeTab === "contact" ? "TabFocused" : "Tab"}
      >
        Contact
      </li>
    </ul>
  );
};

export default Tabs;
