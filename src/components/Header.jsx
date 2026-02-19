import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // Função exigida pelo professor: Buscar ao apertar Enter ou clicar na Lupa
  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchValue.trim() !== "") {
        navigate(`/produtos?filter=${searchValue}`);
      }
    }
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-3xl font-extrabold text-primary tracking-tight"
        >
          Digital Store
        </Link>

        {/* Barra de Pesquisa Atualizada */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full bg-gray-100 text-gray-700 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          <Search
            onClick={handleSearch}
            className="absolute right-3 text-gray-400 w-5 h-5 cursor-pointer hover:text-primary transition"
          />
        </div>

        <nav className="flex items-center gap-6">
          <Link
            to="/produtos"
            className="text-gray-600 hover:text-primary font-medium transition"
          >
            Produtos
          </Link>
          <Link
            to="/cadastre-se"
            className="text-gray-600 hover:text-primary font-medium transition"
          >
            Cadastre-se
          </Link>
          <Link
            to="/login"
            className="bg-primary text-white px-6 py-2 rounded-md font-bold hover:bg-pink-700 transition shadow-md"
          >
            Entrar
          </Link>

          <button className="relative text-gray-600 hover:text-primary transition">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
