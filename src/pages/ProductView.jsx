import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/mockProducts";

export default function ProductView() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  // 1. Estados para controlar a interatividade (Galeria, Tamanho e Cor)
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [selectedSize, setSelectedSize] = useState("39");
  const [selectedColor, setSelectedColor] = useState("cor1");

  // Arrays de opções para renderizar os botões
  const sizes = ["38", "39", "40", "41", "42"];
  const colors = [
    { id: "cor1", hex: "bg-[#A5E3EC]" }, // Azul claro
    { id: "cor2", hex: "bg-[#F5A9B8]" }, // Rosa
    { id: "cor3", hex: "bg-[#333333]" }, // Preto
    { id: "cor4", hex: "bg-[#E2E3EA]" }, // Cinza
  ];

  // Criando um array mockado para a galeria (usando a mesma imagem como exemplo)
  const gallery = [product.image, product.image, product.image, product.image];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb (Navegação superior) */}
        <div className="text-gray-500 text-sm mb-6">
          Home / Produtos / Tênis /{" "}
          <span className="text-gray-800 font-bold">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* ================= GALERIA (ESQUERDA) ================= */}
          <div className="w-full md:w-1/2">
            {/* Imagem Principal */}
            <div className="bg-[#E2E3EA] h-[400px] sm:h-[500px] rounded-lg mb-6 flex items-center justify-center p-8 shadow-sm">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            {/* Miniaturas da Galeria */}
            <div className="flex gap-4">
              {gallery.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 bg-[#E2E3EA] rounded-lg flex items-center justify-center cursor-pointer p-2 transition border-2 ${
                    selectedImage === img && index === 0
                      ? "border-primary"
                      : "border-transparent hover:border-primary/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= INFORMAÇÕES (DIREITA) ================= */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              Casual | Nike | REF:38416711
            </p>

            {/* Avaliação Mockada */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-yellow-400 text-lg">★★★★☆</span>
              <span className="text-gray-400 text-sm">(90 avaliações)</span>
            </div>

            {/* Preço Condicional que ajeitamos antes */}
            <div className="flex items-center gap-3 mb-8">
              {product.discountPrice ? (
                <>
                  <span className="text-gray-400 line-through text-lg">
                    ${product.price}
                  </span>
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.discountPrice}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
              )}
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-gray-500 mb-2">
                Descrição do produto
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>

            {/* SELETORES DE TAMANHO */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-500 mb-3">Tamanho</h3>
              <div className="flex gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-md font-bold text-sm transition border ${
                      selectedSize === size
                        ? "bg-primary text-white border-primary"
                        : "bg-white text-gray-600 border-gray-300 hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* SELETORES DE COR */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-500 mb-3">Cor</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <div
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-8 h-8 rounded-full cursor-pointer transition flex items-center justify-center ${
                      selectedColor === color.id
                        ? "ring-2 ring-primary ring-offset-2"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full ${color.hex} border border-black/10`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            <button className="bg-[#F6AA1C] text-white px-12 py-4 rounded-md font-bold hover:bg-yellow-600 transition w-full md:w-max shadow-md shadow-yellow-600/20">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
