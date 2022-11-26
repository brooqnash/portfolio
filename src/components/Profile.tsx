const Profile: React.FC = (): JSX.Element => {
  return (
    <section className="Content">
      <h1 className="ContentHeader">Profile</h1>
      <h2 className="ContentSub">
        -- A short introduction to a little about me and my work --
      </h2>
      <div className="flex flex-col">
        <div className="h-44 flex justify-evenly">
          <div className="TimelineBar rounded-t">
            <div className="TimelinePin"></div>
          </div>
          <div className="TimelineContent">
            <h1 className="text-sm">14/11/22 - Present</h1>
            <h1 className="text-xl font-extrabold">
              Software engineer
              <span className="text-Green font-extrabold"> @ </span>BJSS
            </h1>
            <p className="text-sm">
              Junior Software Engineer awaiting a starting project.
            </p>
          </div>
        </div>
        <div className="h-44 flex justify-evenly">
          <div className="TimelineBar rounded-b">
            <div className="TimelinePin"></div>
          </div>
          <div className="TimelineContent">
            <h1 className="text-sm">24/01/19 - 24/01/20</h1>
            <h1 className="text-xl font-extrabold">
              Administrator
              <span className="text-Green font-extrabold"> @ </span>Sony
            </h1>
            <p className="text-sm">
              Administrator handling the training of line workers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
