import { LINKS } from "@/lib/links";
export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-semibold tracking-wide">
          Sai Charan
        </h1>

        <div className="space-x-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#connect" className="hover:text-white transition">
            Connect
          </a>
          <a href={LINKS.email} className="hover:text-white transition">Email</a>
        </div>
      </div>
    </nav>
  );
}