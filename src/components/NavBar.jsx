import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  LayoutDashboard,
  Code2,
  BookOpen,
  GitBranch,
  Plus,
  Menu,
  X,
} from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    {
      name: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
      end: true,
    },
    {
      name: "DSA",
      path: "/dsa",
      icon: Code2,
    },
    {
      name: "Machine Code",
      path: "/technical",
      icon: BookOpen,
    },
    {
      name: "Git & GitHub",
      path: "/git-github",
      icon: GitBranch,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#10110f]/95 text-white backdrop-blur-lg">
      <div className="mx-auto flex min-h-[72px] w-[92%] max-w-7xl items-center justify-between gap-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-xl font-black text-[#10110f] shadow-md shadow-lime-300/10">
            P
          </span>

          <span className="text-xl font-bold tracking-tight">
            Prep<span className="text-lime-300">Track</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ name, path, icon: Icon, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-lime-300/10 text-lime-300"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={17} />
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Add Question */}
        <NavLink
          to="/add-question"
          className={({ isActive }) =>
            `hidden shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all sm:flex ${
              isActive
                ? "bg-lime-200 text-[#10110f]"
                : "bg-lime-300 text-[#10110f] hover:-translate-y-0.5 hover:bg-lime-200"
            }`
          }
        >
          <Plus size={18} strokeWidth={2.5} />
          Add Question
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="border-t border-white/10 bg-[#10110f] px-[4%] py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map(({ name, path, icon: Icon, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-lime-300/10 text-lime-300"
                      : "text-zinc-400 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={18} />
                {name}
              </NavLink>
            ))}

            <NavLink
              to="/add-question"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-4 py-3 font-semibold text-[#10110f] transition hover:bg-lime-200"
            >
              <Plus size={19} />
              Add Question
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
