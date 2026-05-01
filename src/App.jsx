import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PhoneMockup from './components/PhoneMockup'
import ScrollingCarousel from './components/ScrollingCarousel'

const items = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=500&auto=format&fit=crop',
    title: 'Classic Wheat Crackers',
    score: '46/100',
    verdict: 'Avoid',
    description:
      "This product's low score mainly comes from processed sugars, artificial flavors, and synthetic emulsifiers. Consider a cleaner ingredient list for your pantry."
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=500&auto=format&fit=crop',
    title: 'Coconut Yogurt',
    score: '88/100',
    verdict: 'Good',
    description:
      'High in probiotics and low in added sugars. A clean ingredient label makes this a smart dairy-free option.'
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1604909052743-94e838986d24?q=80&w=500&auto=format&fit=crop',
    title: 'Honeyed Oat Bites',
    score: '64/100',
    verdict: 'Okay',
    description:
      'Moderate added sugar and a short ingredient list. Enjoy occasionally if you want a lightly sweet snack.'
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=500&auto=format&fit=crop',
    title: 'Olive Tapenade',
    score: '91/100',
    verdict: 'Great',
    description:
      'Rich in healthy fats with minimal additives. A flavorful spread that stays close to whole-food ingredients.'
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=500&auto=format&fit=crop',
    title: 'Granola Mix',
    score: '78/100',
    verdict: 'Good',
    description:
      'Balanced mix of nuts and grains with moderate sweetness. Watch portions for added sugars.'
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=500&auto=format&fit=crop',
    title: 'Almond Butter',
    score: '90/100',
    verdict: 'Great',
    description:
      'Single-ingredient almond butter with no fillers. A nutrient-dense pantry staple.'
  }
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-olive-50 text-olive-900">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-16 pt-6">
        <Navbar />

        <main className="mt-8 flex flex-col items-center text-center">
          <Hero />

          <section className="relative mt-12 flex w-full justify-center">
            <div className="relative flex w-full justify-center">
              <ScrollingCarousel items={items} activeIndex={activeIndex} />
              <PhoneMockup
                activeItem={items[activeIndex]}
                activeIndex={activeIndex}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
