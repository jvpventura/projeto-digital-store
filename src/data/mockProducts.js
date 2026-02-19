import nikeImg from "../assets/nike.jpg";
import adidasImg from "../assets/adidas.jpg";
import pumaImg from "../assets/puma.jpg";
import reebokImg from "../assets/reebok.jpg";

export const products = [
  {
    id: 1,
    name: "Tênis Nike Revolution",
    category: "Tênis Corrida",
    price: 299.9,
    discountPrice: 199.9, // 🔥 Preço com desconto!
    image: nikeImg,
  },
  {
    id: 2,
    name: "Tênis Adidas Run",
    category: "Tênis Casual",
    price: 259.9,
    // Este continua sem desconto para testarmos
    image: adidasImg,
  },
  {
    id: 3,
    name: "Tênis Puma Sport",
    category: "Tênis Esportivo",
    price: 199.9,
    discountPrice: 149.9, // 🔥 Mais um com desconto!
    image: pumaImg,
  },
  {
    id: 4,
    name: "Tênis Reebok Classic",
    category: "Tênis Casual",
    price: 179.9,
    image: reebokImg,
  },
];
