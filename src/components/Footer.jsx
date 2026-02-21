import { Link } from "react-router-dom";
import Logo from "./Logo";
import Information from "./Information";
import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import twitterIcon from "../assets/twitter.svg";

export default function Footer() {
  const infoPages = [
    { text: "Sobre Drip Store", link: "/sobre" },
    { text: "Segurança", link: "/seguranca" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
  ];

  const categoryPages = [
    { text: "Camisetas", link: "/produtos" },
    { text: "Calças", link: "/produtos" },
    { text: "Bonés", link: "/produtos" },
    { text: "Tênis", link: "/produtos" },
  ];

  return (
    <footer className="bg-[#1F1F1F] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <Link to="/" className="mb-6 block">
              <Logo color="white" />
            </Link>
            <p className="text-[#8F8F8F] mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src={twitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Colunas usando o componente Information exigido pelo professor */}
          <Information title="Informação" informations={infoPages} />
          <Information title="Categorias" informations={categoryPages} />

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <div className="text-[#8F8F8F] flex flex-col gap-4">
              <p>Rua Fulano de Tal, 123 - Fortaleza, CE</p>
              <p>(85) 99999-9999</p>
            </div>
          </div>
        </div>

        <hr className="border-[#474747] mb-8" />
        <p className="text-center text-[#8F8F8F] text-[14px]">
          &copy; {new Date().getFullYear()} Digital Store
        </p>
      </div>
    </footer>
  );
}
