import { Link } from "react-router-dom";

export default function Menu() {
  const routs = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Login",
      to: "/login",
    },
    {
      label: "Matches",
      to: "/matches",
    },
  ];

  return (
    <nav>
      <ul>
        {routs.map((rt, idx) => (
          <li key={idx} className=".menu .link">
            <Link to={rt.to}>{rt.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
