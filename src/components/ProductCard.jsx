import { Link } from "react-router-dom";

export default function ProductCard({ id, name, image, price, priceDiscount }) {
  return (
    <Link
      to={`/produto/${id || 1}`}
      className="group block w-full max-w-[292px] mx-auto"
    >
      {/* Caixa da Imagem */}
      <div className="bg-white rounded-[4px] shadow-sm mb-4 relative flex justify-center items-center h-[321px] w-full overflow-hidden group-hover:shadow-md transition">
        {/* Renderiza a tag de desconto se existir a prop priceDiscount */}
        {priceDiscount && (
          <span className="absolute top-4 left-4 bg-[#E7FF86] text-gray-900 text-xs font-bold px-3 py-1 rounded-full z-10">
            30% OFF
          </span>
        )}

        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-4 mix-blend-multiply"
        />
      </div>

      {/* Informações do Produto */}
      <h3 className="text-[#8F8F8F] text-[12px] font-bold mb-1">Tênis</h3>

      {/* Usando direto a prop name */}
      <p className="text-[#474747] text-[24px] mb-2 leading-tight">{name}</p>

      {/* Lógica do Preço usando direto as props price e priceDiscount */}
      <div className="flex items-center gap-2 text-[24px]">
        {priceDiscount ? (
          <>
            <span className="text-[#8F8F8F] line-through text-[24px]">
              ${price}
            </span>
            <span className="text-[#1F1F1F] font-bold text-[24px]">
              ${priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-[#1F1F1F] font-bold text-[24px]">${price}</span>
        )}
      </div>
    </Link>
  );
}
