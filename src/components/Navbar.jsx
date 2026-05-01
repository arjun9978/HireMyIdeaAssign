const navItems = [
  { label: 'Solutions', caret: true },
  { label: 'Features', caret: false },
  { label: 'Pricing', caret: false },
  { label: 'Blog', caret: true },
  { label: 'Restaurants', caret: false },
  { label: 'Food', caret: true }
]

function Caret() {
  return (
    <span className="ml-1 inline-block text-[10px] text-olive-500">▼</span>
  )
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8">
          <span className="absolute left-0 top-1 h-5 w-5 rounded-full bg-lime-200" />
          <span className="absolute left-1.5 top-0 h-2 w-2 rounded-full bg-lime-500" />
          <span className="absolute left-[18px] top-3.5 h-2 w-2 rounded-full bg-lime-400" />
        </div>
        <span className="text-lg font-semibold text-olive-900">Olive</span>
      </div>

      <div className="hidden items-center gap-7 text-sm font-medium text-olive-500 md:flex">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className="flex items-center transition-colors hover:text-olive-900"
          >
            {item.label}
            {item.caret ? <Caret /> : null}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm font-medium">
        <button
          type="button"
          className="text-olive-500 transition-colors hover:text-olive-900"
        >
          Sign in
        </button>
        <button
          type="button"
          className="rounded-full bg-olive-900 px-5 py-2 text-white shadow-card transition hover:bg-olive-800"
        >
          Get Olive →
        </button>
      </div>
    </nav>
  )
}

export default Navbar
