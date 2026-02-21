import starIcon from "../assets/star-icon.svg";

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  return (
    <div className="flex flex-col justify-center w-full">
      <h1 className="text-[32px] font-bold text-[#1F1F1F] mb-2">{name}</h1>
      <p className="text-[12px] text-[#666666] mb-4">Referência: {reference}</p>

      {/* Avaliações */}
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-warning flex items-center gap-1 px-3 py-1 rounded-[4px]">
          <span className="text-white text-[14px] font-bold">{stars}</span>
          <img src={starIcon} alt="Estrela" className="w-3 h-3 invert" />
        </div>
        <span className="text-[#8F8F8F] text-[14px]">
          ({rating} avaliações)
        </span>
      </div>

      {/* Preços */}
      <div className="flex items-center gap-3 mb-6">
        {priceDiscount ? (
          <>
            <span className="text-[#CCCCCC] line-through text-[16px]">
              ${price}
            </span>
            <span className="text-[32px] font-bold text-[#474747]">
              ${priceDiscount}
            </span>
          </>
        ) : (
          <span className="text-[32px] font-bold text-[#474747]">${price}</span>
        )}
      </div>

      {/* Descrição */}
      <div className="mb-6">
        <h3 className="font-bold text-[#8F8F8F] mb-2">Descrição do produto</h3>
        <p className="text-[14px] text-[#474747] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Seletores (ProductOptions) passados como filhos */}
      <div>{children}</div>

      {/* Botão Comprar */}
      <button className="bg-warning text-white px-12 py-4 rounded-[4px] font-bold text-[16px] hover:opacity-80 transition w-full md:w-max mt-8 shadow-md">
        COMPRAR
      </button>
    </div>
  );
}
