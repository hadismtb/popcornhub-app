import { Link } from "react-router";
import ThemeToggle from "~/components/common/ThemeToggle";

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="font-bold text-xl">
          PopcornHub 🍿
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
