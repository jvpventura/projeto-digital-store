import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-md shadow hover:shadow-lg transition">
      <div className="bg-gray-100 rounded-md mb-4 flex justify-center items-center h-48">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-full"
        />
      </div>
      <p className="text-xs text-gray-400 font-bold mb-1">{product.category}</p>
      <h3 className="text-lg text-gray-800 font-normal mb-2">{product.name}</h3>

      <div className="flex items-center gap-2">
        {product.discountPrice ? (
          <>
            <span className="text-gray-400 line-through text-sm">
              ${product.price}
            </span>
            <span className="text-gray-900 font-bold text-lg">
              ${product.discountPrice}
            </span>
          </>
        ) : (
          <span className="text-gray-900 font-bold text-lg">
            ${product.price}
          </span>
        )}
      </div>
      <Link
        to={`/produto/${product.id}`}
        className="mt-4 block text-center bg-primary text-white py-2 rounded-md hover:bg-pink-700 transition"
      >
        Ver Produto
      </Link>
    </div>
  );
}
