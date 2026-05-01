const navItems = [
  { label: 'Features', caret: false },
  { label: 'Pricing', caret: false },
  { label: 'Blog', caret: true },
  { label: 'Restaurants', caret: false }
]

const solutionsItems = [
  {
    title: 'Gluten Free Scanning',
    description: 'Detect gluten ingredients instantly',
    tone: 'bg-emerald-100'
  },
  {
    title: 'Sugar Insight',
    description: 'Spot hidden added sugars',
    tone: 'bg-lime-100'
  },
  {
    title: 'Family Profiles',
    description: 'Personalize for every diet',
    tone: 'bg-amber-100'
  },
  {
    title: 'Label Scanner',
    description: 'Scan barcodes in seconds',
    tone: 'bg-rose-100'
  }
]

const foodItems = [
  'Explore Foods',
  'Allergy Scanner',
  'Ingredient Checker'
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
        <div className="relative group">
          <button
            type="button"
            className="flex items-center transition-colors hover:text-olive-900"
          >
            Solutions
            <Caret />
          </button>
          <div className="absolute left-0 top-full mt-4 min-w-[300px] translate-y-2 rounded-xl bg-white p-6 shadow-lg opacity-0 invisible transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible z-50">
            <div className="grid grid-cols-2 gap-4">
              {solutionsItems.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className={`h-8 w-8 rounded-md ${item.tone}`} />
                  <div>
                    <p className="font-medium text-olive-900">{item.title}</p>
                    <p className="text-sm text-olive-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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

        <div className="relative group">
          <button
            type="button"
            className="flex items-center transition-colors hover:text-olive-900"
          >
            Food
            <Caret />
          </button>
          <div className="absolute left-0 top-full mt-4 min-w-[300px] translate-y-2 rounded-xl bg-white p-6 shadow-lg opacity-0 invisible transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible z-50">
            <div className="flex flex-col gap-3 text-sm text-olive-600">
              {foodItems.map((item) => (
                <span
                  key={item}
                  className="cursor-pointer transition-colors hover:text-olive-900"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
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
