import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="container py-4">
        <Outlet />
      </main>
      <footer className="text-center text-muted py-3 border-top mt-5">
        <small>© {new Date().getFullYear()} CompusHub — Faculty of Computer Science, Kabul University</small>
      </footer>
    </>
  );
}

export default Layout;