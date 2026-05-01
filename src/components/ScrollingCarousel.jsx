const cardWidth = 188

function ScrollingCarousel({ items, activeIndex }) {
  const looped = [...items, ...items]
  return (
    <div className="carousel-group absolute inset-0 flex items-center overflow-hidden">
      <div className="carousel-mask w-full">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${activeIndex * cardWidth}px)`,
            transition: 'transform 0.6s ease-in-out'
          }}
        >
          {looped.map((item, index) => {
            const position = index % items.length
            const isActive = position === activeIndex

            return (
              <div
                key={`${item.title}-${index}`}
                className={`carousel-card transition-all duration-500 ease-in-out ${
                  isActive
                    ? 'scale-100 opacity-100 blur-0 z-10'
                    : 'scale-90 opacity-50 blur-sm'
                }`}
              >
                <div className="h-24 w-full overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`h-full w-full object-cover transition-transform duration-700 ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 text-xs font-semibold text-olive-900">
                  {item.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ScrollingCarousel
