function Hero() {
  return (
    <section className="mt-10 flex flex-col items-center text-center">
      <div className="flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 text-sm text-olive-600 shadow-sm backdrop-blur">
        <div className="flex -space-x-2">
          {['bg-amber-200', 'bg-rose-200', 'bg-emerald-200', 'bg-sky-200'].map(
            (tone) => (
              <span
                key={tone}
                className={`h-7 w-7 rounded-full border-2 border-white ${tone}`}
              />
            )
          )}
        </div>
        <span className="font-medium">Trusted by thousands of healthy families</span>
      </div>

      <h1 className="mt-8 text-4xl font-semibold leading-[1.05] text-olive-900 sm:text-5xl lg:text-6xl">
        <span className="block">The Safest Way to</span>
        <span className="block">Shop for Groceries</span>
      </h1>

      <p className="mt-4 max-w-[560px] text-base text-olive-500 sm:text-lg">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients
        from Your Family&apos;s Diet and Get Expert-Backed Food Info.
      </p>

      <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-olive-900 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-olive-800"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/20 text-[10px] font-semibold">
            iOS
          </span>
          Download for iOS
        </button>
        <button
          type="button"
          className="rounded-full px-6 py-3 text-sm font-semibold text-olive-700 transition hover:bg-olive-900 hover:text-white"
        >
          Join the Olive Community →
        </button>
      </div>
    </section>
  )
}

export default Hero
