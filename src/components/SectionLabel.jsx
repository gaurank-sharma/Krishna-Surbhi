export default function SectionLabel({ text, centered = false }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
      <div className="w-8 h-px bg-forest flex-shrink-0" />
      <span className="text-forest text-xs tracking-[0.28em] font-semibold uppercase">
        {text}
      </span>
      {centered && <div className="w-8 h-px bg-forest flex-shrink-0" />}
    </div>
  );
}
