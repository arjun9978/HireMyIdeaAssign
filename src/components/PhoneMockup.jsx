function PhoneMockup({ activeItem }) {
  return (
    <div className="relative z-10">
      <div className="relative mx-auto h-[520px] w-[280px] rounded-[38px] border border-olive-200 bg-white shadow-soft sm:h-[560px] sm:w-[320px]">
        <div className="absolute left-1/2 top-4 h-5 w-24 -translate-x-1/2 rounded-full bg-olive-950" />
        <div className="px-6 pb-8 pt-16">
          <div className="rounded-3xl bg-olive-50/70 p-4">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="h-28 w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-olive-900">
                  {activeItem.title}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-rose-500">
                  <span className="h-2 w-2 rounded-full bg-rose-500" />
                  {activeItem.score}
                  <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold text-rose-600">
                    {activeItem.verdict}
                  </span>
                </div>
                <p className="mt-3 text-[11px] leading-relaxed text-olive-500">
                  {activeItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneMockup
