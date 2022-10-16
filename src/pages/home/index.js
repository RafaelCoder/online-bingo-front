import Button from "../../components/Button";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button onClick={() => alert("teste")}>Botãozin</Button>
    </div>
  );
}
