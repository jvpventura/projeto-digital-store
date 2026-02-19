import { useState } from "react";
import { useSearchParams } from "react-router-dom"; // Importe novo para ler a URL!
import ProductListing from "../components/ProductListing";
import { products } from "../data/mockProducts";

export default function ProductList() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  // Capturando o que o usuário pesquisou no Header
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("filter") || "";

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // Filtragem Dupla (Por Marca + Pelo Texto da Barra de Pesquisa)
  let filteredProducts = products.filter((product) => {
    // 1. Filtro da barra lateral (Checkboxes)
    const matchBrand =
      selectedBrands.length === 0 ||
      selectedBrands.some((brand) =>
        product.name.toLowerCase().includes(brand.toLowerCase()),
      );

    // 2. Filtro da barra superior (Search Header)
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // O produto só aparece se passar nos dois testes!
    return matchBrand && matchSearch;
  });

  // Lógica de Ordenação
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
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* SIDEBAR */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-md shadow-sm h-fit">
          <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">
            Filtrar por
          </h3>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-700 mb-3">Marca</h4>
            <div className="space-y-3">
              {["Adidas", "Nike", "Puma", "Reebok"].map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 text-gray-600 cursor-pointer hover:text-primary transition"
                >
                  <input
                    type="checkbox"
                    className="accent-primary w-4 h-4 cursor-pointer"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Gênero</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-primary w-4 h-4 cursor-pointer"
                />{" "}
                Masculino
              </label>
              <label className="flex items-center gap-3 text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-primary w-4 h-4 cursor-pointer"
                />{" "}
                Feminino
              </label>
            </div>
          </div>
        </aside>

        {/* LISTAGEM */}
        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600 font-bold">
              {searchQuery
                ? `Pesquisa: "${searchQuery}" - `
                : "Resultados para Tênis - "}
              <span className="font-normal">
                {filteredProducts.length} produtos
              </span>
            </p>

            <select
              className="border border-gray-300 rounded-md py-2 px-4 bg-white text-gray-700 focus:outline-none focus:border-primary cursor-pointer"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Ordenar por: Mais relevantes</option>
              <option value="Menor preço">Menor preço</option>
              <option value="Maior preço">Maior preço</option>
            </select>
          </div>

          {/* O código ficou super limpo chamando o ProductListing! */}
          {filteredProducts.length > 0 ? (
            <ProductListing products={filteredProducts} />
          ) : (
            <div className="flex flex-col items-center justify-center h-64 bg-white rounded-md border border-dashed border-gray-300">
              <p className="text-gray-500 text-lg font-bold">Poxa! 😕</p>
              <p className="text-gray-400">
                Nenhum produto encontrado com esses filtros ou pesquisa.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
