import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductListing from "../components/ProductListing";
import FilterGroup from "../components/FilterGroup";
import { products } from "../data/mockProducts";

export default function ProductList() {
  const [sortOrder, setSortOrder] = useState("");
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("filter") || "";

  // 1. Definindo as opções dos filtros
  const brandOptions = [
    { text: "Adidas", value: "Adidas" },
    { text: "Calenciaga", value: "Calenciaga" },
    { text: "K-Swiss", value: "K-Swiss" },
    { text: "Nike", value: "Nike" },
    { text: "Puma", value: "Puma" },
  ];

  const categoryOptions = [
    { text: "Esporte e lazer", value: "Esporte" },
    { text: "Casual", value: "Casual" },
    { text: "Utilitário", value: "Utilitário" },
    { text: "Corrida", value: "Corrida" },
  ];

  const genderOptions = [
    { text: "Masculino", value: "Masculino" },
    { text: "Feminino", value: "Feminino" },
    { text: "Unisex", value: "Unisex" },
  ];

  const stateOptions = [
    { text: "Novo", value: "Novo" },
    { text: "Usado", value: "Usado" },
  ];

  // Filtro pelo texto da barra de pesquisa do Header
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Ordenação
  if (sortOrder === "Menor preço") {
    filteredProducts.sort(
      (a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price),
    );
  } else if (sortOrder === "Maior preço") {
    filteredProducts.sort(
      (a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price),
    );
  }

  return (
    <div className="bg-[#F9F8FE] min-h-screen py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* ================= SIDEBAR COM COMPONENTES FILTERGROUP ================= */}
        <aside className="w-full md:w-[308px] bg-white p-6 rounded-[4px] shadow-sm h-fit">
          <h3 className="font-bold text-[#474747] text-[16px] mb-4 border-b border-[#CCCCCC] pb-4">
            Filtrar por
          </h3>

          <FilterGroup
            title="Marca"
            inputType="checkbox"
            options={brandOptions}
          />
          <FilterGroup
            title="Categoria"
            inputType="checkbox"
            options={categoryOptions}
          />
          <FilterGroup
            title="Gênero"
            inputType="checkbox"
            options={genderOptions}
          />
          <FilterGroup
            title="Estado"
            inputType="radio"
            options={stateOptions}
          />
        </aside>

        {/* ================= LISTAGEM DE PRODUTOS ================= */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p className="text-[#474747] text-[16px]">
              <span className="font-bold">
                {searchQuery
                  ? `Resultados para "${searchQuery}"`
                  : "Resultados para Tênis"}
              </span>{" "}
              - {filteredProducts.length} produtos
            </p>

            <div className="flex items-center gap-2 border border-[#474747] rounded-[4px] px-4 py-2 w-[308px] h-[60px] bg-transparent">
              <label className="text-[#474747] text-[16px] font-bold">
                Ordenar por:
              </label>
              <select
                className="bg-transparent text-[#474747] text-[16px] focus:outline-none cursor-pointer flex-1"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="">Mais relevantes</option>
                <option value="Menor preço">Menor preço</option>
                <option value="Maior preço">Maior preço</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductListing products={filteredProducts} />
          ) : (
            <div className="flex flex-col items-center justify-center h-64 bg-white rounded-md border border-dashed border-[#CCCCCC]">
              <p className="text-[#8F8F8F] text-lg font-bold">
                Nenhum produto encontrado.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
