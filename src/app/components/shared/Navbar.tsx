import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 text-[var(--primary)] dark:text-[var(--primary)] dark:bg-[var(--background)] bg-[var(--background)] ">
      {/* {logo section} */}
      <div>
        <Link
          href="/"
          className="text-2xl font-bold hover:underline flex gap-2 items-center"
        >
          Wellcome
        </Link>
      </div>
      {/* buttons section */}
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
