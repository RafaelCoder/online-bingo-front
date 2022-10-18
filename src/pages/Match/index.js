import { useParams } from "react-router-dom";
import NotFound from "../NotFound";

export default function Match() {
  const { id } = useParams();

  if (id == 10) return <NotFound />;

  return <h1>Match {id}</h1>;
}
