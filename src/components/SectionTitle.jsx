function SectionTitle({ tag, title, subtitle }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="font-mono text-sm text-mint mb-3">&lt;{tag} /&gt;</p>

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-chalk">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-xl text-fog leading-relaxed">{subtitle}</p>
      )}

      <div className="mt-6 h-px w-24 bg-gradient-to-r from-mint to-azure" />
    </div>
  );
}

export default SectionTitle;
