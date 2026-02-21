import { products } from "../data/mockProducts";
import { Shirt, Headphones, Footprints, Glasses, Watch } from "lucide-react";

// Importando os componentes exigidos
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import Gallery from "../components/Gallery";

export default function Home() {
  const trendingProducts = products.slice(0, 8);

  // Aqui estão as imagens dos slides da Home
  const homeGalleryImages = [
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
  ];

  return (
    <div className="bg-[#F9F8FE] min-h-screen">
      {/* ================= 1. BANNER PRINCIPAL ================= */}
      <div className="w-full relative bg-[#F5F5F5] flex justify-center overflow-hidden h-[450px] md:h-[681px]">
        <div className="w-full max-w-[1440px] relative flex items-center justify-center h-full">
          {/* Abertura da Tag Gallery */}
          <Gallery images={homeGalleryImages} width="1440" height="681">
            {/* TUDO AQUI DENTRO AGORA ESTÁ SEGURAMENTE ATRÁS DAS SETAS! */}

            {/* Ornamento do Figma */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-[radial-gradient(#CCCCCC_2px,transparent_2px)] [background-size:16px_16px] opacity-40 pointer-events-none hidden md:block"></div>

            {/* Gradiente de Legibilidade */}
            <div className="absolute top-0 left-0 w-full md:w-3/5 h-full bg-gradient-to-r from-[#F5F5F5] via-[#F5F5F5]/90 to-transparent pointer-events-none"></div>

            {/* Texto posicionado na ESQUERDA */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center pointer-events-none">
              <div className="container mx-auto px-4 md:px-10">
                <div className="w-full md:w-1/2 flex flex-col items-start pointer-events-auto pl-16 md:pl-28 mt-10 md:mt-0">
                  <p className="text-warning font-bold mb-4 text-[16px] tracking-wide">
                    Melhores ofertas personalizadas
                  </p>
                  <h1 className="text-5xl md:text-[64px] font-extrabold text-[#1F1F1F] mb-6 leading-[1.1]">
                    Queima de <br /> estoque Nike 🔥
                  </h1>
                  <p className="text-[#474747] text-[18px] mb-10 max-w-[400px] leading-relaxed">
                    Consequat culpa exercitation mollit nisi excepteur do do
                    tempor laboris eiusmod irure consectetur.
                  </p>
                  <button className="bg-primary text-white px-12 py-4 rounded-[4px] font-bold text-[16px] hover:bg-pink-700 transition shadow-md">
                    Ver Ofertas
                  </button>
                </div>
              </div>
            </div>

            {/* Fechamento da Tag Gallery */}
          </Gallery>
        </div>
      </div>

      {/* ================= 2. COLEÇÕES EM DESTAQUE ================= */}
      <div className="container mx-auto px-4 mt-16">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/collection-1.png"
              alt="Coleção Supreme"
              className="w-full rounded-[4px] shadow-sm hover:shadow-md transition cursor-pointer"
            />
            <img
              src="/collection-2.png"
              alt="Coleção Adidas"
              className="w-full rounded-[4px] shadow-sm hover:shadow-md transition cursor-pointer"
            />
            <img
              src="/collection-3.png"
              alt="Coleção Beats"
              className="w-full rounded-[4px] shadow-sm hover:shadow-md transition cursor-pointer"
            />
          </div>
        </Section>
      </div>

      {/* ================= NAVEGAÇÃO POR CATEGORIAS ================= */}
      <div className="container mx-auto px-4 mt-16">
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
                <div className="w-[104px] h-[104px] bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition">
                  <item.icon className="text-[#8F8F8F] group-hover:text-primary w-10 h-10 transition" />
                </div>
                <span className="text-[#474747] font-bold group-hover:text-primary transition">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ================= 3. PRODUTOS EM ALTA ================= */}
      <div className="container mx-auto px-4 mt-16 mb-20">
        <Section
          title="Produtos em alta"
          titleAlign="left"
          link={{ text: "Ver todos", href: "/produtos" }}
        >
          <ProductListing products={trendingProducts} />
        </Section>
      </div>

      {/* ================= OFERTA ESPECIAL ================= */}
      <section className="container mx-auto px-4 pb-20 pt-10">
        <div className="bg-white rounded-lg shadow-sm flex flex-col md:flex-row items-center overflow-hidden">
          <div className="md:w-1/2 p-8 flex justify-center bg-gray-100 h-full relative w-full min-h-[400px]">
            <div className="w-80 h-80 bg-gradient-to-tr from-gray-200 to-gray-300 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src="/product-image-1.jpeg"
              alt="Oferta Especial"
              className="relative z-10 w-72 h-72 object-cover rounded-full shadow-2xl mt-8 transform hover:scale-110 transition duration-500"
            />
          </div>
          <div className="md:w-1/2 p-12">
            <p className="text-primary font-bold mb-2 uppercase tracking-wide">
              Oferta especial
            </p>
            <h2 className="text-4xl font-extrabold text-[#1F1F1F] mb-4 leading-tight">
              Air Jordan edição de colecionador
            </h2>
            <p className="text-[#474747] mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-primary text-white px-10 py-4 rounded-[4px] font-bold text-[16px] hover:bg-pink-700 transition shadow-md">
              Ver Oferta
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
