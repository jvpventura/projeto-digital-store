import { products } from "../data/mockProducts";
import heroImg from "../assets/nike.jpg";
import { Shirt, Headphones, Footprints, Glasses, Watch } from "lucide-react";

// Importando os nossos novos componentes estruturais
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

export default function Home() {
  const trendingProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ================= BANNER PRINCIPAL (Fica como está, pois é customizado) ================= */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <p className="text-primary font-bold mb-2">
              Melhores ofertas personalizadas
            </p>
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              Queima de <br /> estoque Nike 🔥
            </h1>
            <p className="text-gray-600 mb-6">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-pink-700 transition">
              Ver Ofertas
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src={heroImg}
              alt="Tênis Nike em destaque"
              className="w-80 h-80 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= 1. COLEÇÕES EM DESTAQUE ================= */}
      <div className="container mx-auto px-4">
        <Section title="Coleções em destaque" titleAlign="left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#E2E3EA] rounded-lg p-6 relative overflow-hidden flex flex-col justify-end h-64 shadow-sm hover:shadow-md transition">
              <span className="bg-[#E7FF86] text-gray-900 text-xs font-bold px-3 py-1 rounded-full w-max mb-2 z-10">
                30% OFF
              </span>
              <h3 className="text-2xl font-extrabold text-gray-800 z-10 w-2/3">
                Novo drop Supreme
              </h3>
              <button className="text-primary bg-white px-4 py-2 rounded-md font-bold hover:bg-gray-100 transition w-max mt-4 z-10">
                Comprar
              </button>
              <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-gray-300 rounded-full opacity-50"></div>
            </div>
            <div className="bg-[#E2E3EA] rounded-lg p-6 relative overflow-hidden flex flex-col justify-end h-64 shadow-sm hover:shadow-md transition">
              <span className="bg-[#E7FF86] text-gray-900 text-xs font-bold px-3 py-1 rounded-full w-max mb-2 z-10">
                30% OFF
              </span>
              <h3 className="text-2xl font-extrabold text-gray-800 z-10 w-2/3">
                Coleção Adidas
              </h3>
              <button className="text-primary bg-white px-4 py-2 rounded-md font-bold hover:bg-gray-100 transition w-max mt-4 z-10">
                Comprar
              </button>
              <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-gray-300 rounded-full opacity-50"></div>
            </div>
            <div className="bg-[#E2E3EA] rounded-lg p-6 relative overflow-hidden flex flex-col justify-end h-64 shadow-sm hover:shadow-md transition">
              <span className="bg-[#E7FF86] text-gray-900 text-xs font-bold px-3 py-1 rounded-full w-max mb-2 z-10">
                30% OFF
              </span>
              <h3 className="text-2xl font-extrabold text-gray-800 z-10 w-2/3">
                Novo Beats Bass
              </h3>
              <button className="text-primary bg-white px-4 py-2 rounded-md font-bold hover:bg-gray-100 transition w-max mt-4 z-10">
                Comprar
              </button>
              <div className="absolute -right-6 -bottom-6 w-40 h-40 bg-gray-300 rounded-full opacity-50"></div>
            </div>
          </div>
        </Section>
      </div>

      {/* ================= 2. NAVEGAÇÃO POR CATEGORIAS ================= */}
      <div className="container mx-auto px-4">
        <Section title="Comprar por categoria" titleAlign="center">
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { icon: Shirt, label: "Camisetas" },
              { icon: Watch, label: "Acessórios" },
              { icon: Glasses, label: "Óculos" },
              { icon: Headphones, label: "Headphones" },
              { icon: Footprints, label: "Tênis" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition">
                  <item.icon className="text-gray-400 group-hover:text-primary w-10 h-10 transition" />
                </div>
                <span className="text-gray-700 font-semibold group-hover:text-primary transition">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ================= 3. PRODUTOS EM ALTA (Usando o ProductListing) ================= */}
      <div className="container mx-auto px-4">
        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/produtos" }}
        >
          {/* Aqui entra a exigência do professor: */}
          <ProductListing products={trendingProducts} />
        </Section>
      </div>

      {/* ================= OFERTA ESPECIAL ================= */}
      <section className="container mx-auto px-4 pb-20 pt-10">
        <div className="bg-white rounded-lg shadow-sm flex flex-col md:flex-row items-center overflow-hidden">
          <div className="md:w-1/2 p-8 flex justify-center bg-gray-100 h-full relative w-full min-h-[400px]">
            <div className="w-80 h-80 bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src={heroImg}
              alt="Oferta Especial"
              className="relative z-10 w-72 h-72 object-cover rounded-full shadow-2xl mt-8"
            />
          </div>
          <div className="md:w-1/2 p-12">
            <p className="text-primary font-bold mb-2 uppercase tracking-wide">
              Oferta especial
            </p>
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              Air Jordan edição de colecionador
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-md font-bold hover:bg-pink-700 transition">
              Ver Oferta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
