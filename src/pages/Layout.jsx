import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Componente do cabeçalho */}
      <Header />

      {/* Conteúdo dinâmico das páginas */}
      <main className="flex-grow">{children}</main>

      {/* Componente do rodapé */}
      <Footer />
    </div>
  );
}
