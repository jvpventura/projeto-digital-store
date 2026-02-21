import ProductCard from "./ProductCard";

export default function ProductListing({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.discountPrice}
        />
      ))}
    </div>
  );
}
