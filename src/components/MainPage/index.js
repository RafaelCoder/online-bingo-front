import Menu from "../Menu";
import { Outlet } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
