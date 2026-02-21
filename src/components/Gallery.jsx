import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({
  className,
  width,
  height,
  radius,
  showThumbs,
  images,
  children,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={`flex flex-col gap-4 w-full h-full ${className || ""}`}>
      <div
        className="relative flex items-center justify-center overflow-hidden w-full h-full group"
        style={{
          maxWidth: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "100%",
          borderRadius: radius || "0px",
          backgroundColor: "transparent",
        }}
      >
        {/* 1. CAMADA INFERIOR: A Imagem */}
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          className={`w-full h-full transition-transform duration-700 ${
            showThumbs
              ? "object-contain mix-blend-multiply p-4"
              : "object-cover"
          }`}
        />

        {/* 2. CAMADA DO MEIO: Os textos e degradês (Vêm da Home) */}
        {children && <div className="absolute inset-0 z-10">{children}</div>}

        {/* 3. CAMADA SUPERIOR (Z-50): As Setas (NUNCA serão cobertas por nada) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-6 z-[50] w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white rounded-full drop-shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 text-[#474747] hover:text-primary"
            >
              <ChevronLeft strokeWidth={2.5} className="w-8 h-8 pr-1" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 md:right-6 z-[50] w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white rounded-full drop-shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 text-[#474747] hover:text-primary"
            >
              <ChevronRight strokeWidth={2.5} className="w-8 h-8 pl-1" />
            </button>
          </>
        )}

        {/* 4. CAMADA SUPERIOR: Pontinhos do Carrossel */}
        {!showThumbs && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-[50] pointer-events-auto">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary scale-110"
                    : "bg-white/80 hover:bg-primary/50 shadow-sm"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Miniaturas */}
      {showThumbs && (
        <div className="flex gap-4 mt-2 hidden md:flex">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[117px] h-[95px] bg-[#E2E3EA] flex items-center justify-center cursor-pointer p-2 transition ${
                currentIndex === index
                  ? "border-[2px] border-primary"
                  : "border-[2px] border-transparent hover:border-primary/50"
              }`}
              style={{ borderRadius: radius || "0px" }}
            >
              <img
                src={img.src}
                alt={`Miniatura ${index}`}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
