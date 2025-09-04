import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center py-4 px-8 
                 bg-background text-foreground border-b border-border 
                 transition-colors duration-300 ease-in-out"
    >
      {/* {logo section} */}
      <div>
        <Link
          href="/"
          className="text-2xl font-bold hover:underline"
        >
          Wellcome
        </Link>
      </div>
      {/* buttons section */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-secondary hover:text-foreground">FA</button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
