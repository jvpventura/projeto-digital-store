import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

// Importando os componentes e assets exigidos
import Logo from "./Logo";
import miniCart from "../assets/mini-cart.svg";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (searchValue.trim() !== "") {
        navigate(`/produtos?filter=${searchValue}`);
      }
    }
  };

  // Função para aplicar o estilo apenas na página ativa
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-primary font-bold border-b-2 border-primary pb-1 transition"
      : "text-gray-600 hover:text-primary font-medium pb-1 transition";

  return (
    <header className="bg-white shadow-sm py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Usando o Componente Logo exigido */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Campo de Busca */}
        <div className="flex items-center flex-1 max-w-md mx-8 relative w-full">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full bg-gray-100 text-gray-700 rounded-md py-3 pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          <Search
            onClick={handleSearch}
            className="absolute right-4 text-gray-400 w-6 h-6 cursor-pointer hover:text-primary transition"
          />
        </div>

        {/* Navegação e Ações */}
        <nav className="flex items-center gap-8">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/produtos" className={navLinkStyle}>
            Produtos
          </NavLink>
          <NavLink to="/categorias" className={navLinkStyle}>
            Categorias
          </NavLink>
          <NavLink to="/meus-pedidos" className={navLinkStyle}>
            Meus Pedidos
          </NavLink>

          <div className="flex items-center gap-6 ml-4">
            <Link
              to="/cadastre-se"
              className="text-[#474747] underline text-[16px] hover:text-primary transition"
            >
              Cadastre-se
            </Link>
            <Link
              to="/login"
              className="bg-primary text-white w-[114px] h-[40px] flex justify-center items-center rounded-[4px] font-bold text-[14px] hover:bg-pink-700 transition"
            >
              Entrar
            </Link>
          </div>

          <button className="relative hover:opacity-80 transition ml-2">
            <img src={miniCart} alt="Carrinho" className="w-8 h-8" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
