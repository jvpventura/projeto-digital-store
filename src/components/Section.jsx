export default function Section({
  title,
  titleAlign = "left",
  link,
  children,
}) {
  return (
    <section className="w-full py-8">
      {/* Cabeçalho da Seção com Título e Link */}
      <div
        className={`flex ${titleAlign === "center" ? "justify-center" : "justify-between"} items-center mb-6`}
      >
        {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}

        {/* Renderiza o link se ele for passado na prop */}
        {link && titleAlign !== "center" && (
          <a
            href={link.href}
            className="text-primary font-bold hover:underline"
          >
            {link.text} →
          </a>
        )}
      </div>

      {/* Conteúdo Dinâmico (os cards, ícones, etc) */}
      {children}
    </section>
  );
}
