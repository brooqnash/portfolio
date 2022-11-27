import { useState, useEffect } from "react";
import Repository from "./Repository";

const Projects: React.FC = (): JSX.Element => {
  const [repoData, setRepoData] = useState<Array<any>>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/brooqnash/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepoData(data.reverse());
      });
  }, []);

  return (
    <section className="Content">
      <h1 className="ContentHeader">Projects</h1>
      <h2 className="ContentSub">
        -- Here are some of the GitHub repositories that hold some of my
        personal projects --
      </h2>
      {repoData.map((repo, idx) => {
        return (
          <Repository
            key={idx}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            url={repo.html_url}
          />
        );
      })}
    </section>
  );
};

export default Projects;
