export function Card({ title, icon: Icon, children, className = '' }) {
  return (
    <div className={`rounded-xl border bg-white py-6 shadow-sm hover:shadow-lg transition-shadow ${className}`}>
      <div className="px-6 mb-4 flex items-center gap-3">
        {Icon && (
          <div className="h-10 w-10 rounded-lg bg-[#cc0000]/10 flex items-center justify-center shrink-0">
            <Icon className="h-5 w-5 text-[#cc0000]" aria-hidden="true" />
          </div>
        )}
        <h2 className="font-semibold text-lg">{title}</h2>
      </div>
      <div className="px-6">{children}</div>
    </div>
  );
}

export function Row({ label, value, bold, negative, accent }) {
  return (
    <div className={`flex justify-between py-1.5 ${bold ? 'font-bold text-lg' : 'text-gray-600'} ${negative ? 'text-red-600' : ''} ${accent ? 'text-green-700' : ''}`}>
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}

export function Divider() {
  return <div className="border-t my-2" />;
}
