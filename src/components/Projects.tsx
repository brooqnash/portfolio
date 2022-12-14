import { useState, useEffect } from "react";
import Repository from "./Repository";
import Message from "./Message";

type repoData = {
  name: string;
  description: string;
  language: string;
  html_url: string;
};

const Projects: React.FC = (): JSX.Element => {
  const [repoData, setRepoData] = useState<Array<repoData>>([]);
  const [error, setError] = useState<boolean>(false);
  const [info, setInfo] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://api.github.com/users/brooqnash/repos")
      .then((response) => {
        if (response.ok) {
          setInfo(true);
          return response.json();
        }
        setError(true);
      })
      .then((data) => {
        data.sort(
          (a: any, b: any) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        let repos = [] as Array<repoData>;
        data.map((repo: any) => {
          if (repo.name !== "brooqnash")
            repos.push({
              name: repo.name,
              description: repo.description,
              language: repo.language,
              html_url: repo.html_url,
            });
        });
        setRepoData(repos);
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
      {repoData.length === 0 && <h1 className="text-center">Loading...</h1>}
      {error && <Message type="error" content="Failed to retrieve" />}
      {info && <Message type="info" content="Successfully retrieved" />}
    </section>
  );
};

export default Projects;
