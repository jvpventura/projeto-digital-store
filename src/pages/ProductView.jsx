import { useParams } from "react-router-dom";
import { products } from "../data/mockProducts";
import Gallery from "../components/Gallery";

// Importar os novos componentes
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";

export default function ProductView() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  // Passo 3: Array formatado para a Galeria com as imagens corretas do repositório
  const galleryImages = [
    { src: "/product-image-1.jpeg" },
    { src: "/product-image-2.jpeg" },
    { src: "/product-image-3.jpeg" },
    { src: "/product-image-4.jpeg" },
    { src: "/product-image-5.jpeg" },
  ];

  return (
    <div className="bg-[#F9F8FE] min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-[#474747] text-[14px] mb-6">
          Home / Produtos / Tênis /{" "}
          <span className="text-[#1F1F1F] font-bold">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* ================= GALERIA ================= */}
          <div className="w-full md:w-1/2">
            <Gallery
              images={galleryImages}
              showThumbs
              width="700"
              height="570"
              radius="4px"
            />
          </div>

          {/* ================= BUYBOX ================= */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <BuyBox
              name={product.name}
              reference="38416711"
              stars="4.7"
              rating="90"
              price={product.price}
              priceDiscount={product.discountPrice}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
            >
              {/* Opções de Tamanho */}
              <div>
                <h3 className="font-bold text-[#8F8F8F] mb-3 text-[14px]">
                  Tamanho
                </h3>
                <ProductOptions
                  options={["38", "39", "40", "41", "42"]}
                  shape="square"
                  radius="4px"
                  type="text"
                />
              </div>

              {/* Opções de Cor */}
              <div>
                <h3 className="font-bold text-[#8F8F8F] mb-3 text-[14px]">
                  Cor
                </h3>
                <ProductOptions
                  options={["#A5E3EC", "#F5A9B8", "#333333", "#E2E3EA"]}
                  shape="circle"
                  type="color"
                />
              </div>
            </BuyBox>
          </div>
        </div>
      </div>
    </div>
  );
}
