import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <Link to="/" className="text-3xl font-extrabold mb-6 block">
              Digital Store
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-primary transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Informação */}
          <div>
            <h3 className="text-lg font-bold mb-6">Informação</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li>
                <Link to="/sobre" className="hover:text-white transition">
                  Sobre Drip Store
                </Link>
              </li>
              <li>
                <Link to="/seguranca" className="hover:text-white transition">
                  Segurança
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-white transition">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Categorias */}
          <div>
            <h3 className="text-lg font-bold mb-6">Categorias</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li>
                <Link to="/produtos" className="hover:text-white transition">
                  Tênis
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition">
                  Camisetas
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition">
                  Calças
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="hover:text-white transition">
                  Bonés
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <div className="text-gray-400 flex flex-col gap-4">
              <p>Rua Fulano de Tal, 123 - Fortaleza, CE</p>
              <p>(85) 99999-9999</p>
            </div>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Digital Store. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
