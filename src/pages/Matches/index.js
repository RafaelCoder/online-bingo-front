import { Link } from "react-router-dom";

export default function Matches() {
  const matches = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>Matches created by logged user</h1>
      <ol>
        {matches.map((m, i) => (
          <li key={i}>
            <Link to={`/match/${m}`}>Match {m}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}
