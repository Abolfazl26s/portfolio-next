import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-8 text-[var(--primary)] dark:text-[var(--primary)] backdrop-blur-xl bg-transparent">
      {/* {logo section} */}
      <div>
        <Link
          href="/"
          className="text-2xl font-bold flex gap-2 items-center group"
        >
          
          <Image
            src="/images/logo.png"
            alt="abolfazl saeidabadi"
            width={80}
            height={80}
            className="w-10 h-10 lg:w-15 lg:h-15 xl:w-20 xl:h-20"
            priority
          />
          <span className="relative font-[var(--font-display)]">
            Welcome
            <span className="absolute left-0 -bottom-1 h-0.5 w-full scale-x-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
          </span>
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
