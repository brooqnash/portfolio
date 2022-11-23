const Tabs: React.FC = (): JSX.Element => {
  // TODO: Add context for tab selection.
  return (
    <ul className="flex justify-evenly">
      <li>Profile</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  );
};

export default Tabs;
