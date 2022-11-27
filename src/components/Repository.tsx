interface Props {
  name: string;
  description: string;
  language: string;
  url: string;
}

const Repository: React.FC<Props> = (RepoInfo: Props): JSX.Element => {
  return (
    <a href={RepoInfo.url} className="Repository">
      <h1 className="text-2xl text-Green font-extrabold capitalize">
        {RepoInfo.name}
      </h1>
      <h2>{RepoInfo.description}</h2>
      <p className="text-sm text-Grey">{RepoInfo.language}</p>
    </a>
  );
};

export default Repository;
