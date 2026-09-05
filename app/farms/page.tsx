import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function Farms() {
  const farms = [
    {
      name: 'Aburi Farm',
      location: 'Ottopayaw, Eastern Region',
      size: '20 hectares',
      crops: 'Sugarloaf, MD2, Smooth Cayenne Pineapples',
      description: 'Our primary pineapple cultivation facility featuring advanced irrigation systems and sustainable farming practices for premium quality export.',
      image: '/images/aburi-farm.jpg'
    },
    {
      name: 'Agona West Farm',
      location: 'Agona Asafo, Central Region',
      size: '80 hectares',
      crops: 'Sugarloaf, MD2, Smooth Cayenne Pineapples',
      description: 'State-of-the-art pineapple growing operation with climate monitoring and precision agricultural techniques ensuring optimal fruit quality.',
      image: '/images/swedru-farm.jpg'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joe-a-sLDurWto3MQ-unsplash-mb3AYP8LuPSuAac5pitbTo5lwP7q4b.jpg')"
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Our Farms</h1>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl">
              State-of-the-art facilities employing sustainable practices across Ghana.
            </p>
          </div>
        </section>

        {/* Farms Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {farms.map((farm) => (
                <div
                  key={farm.name}
                  className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card border border-border"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={farm.image || "/placeholder.svg"}
                      alt={farm.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-primary">{farm.name}</h3>
                    <p className="text-sm text-foreground/70">{farm.location}</p>
                    <div className="space-y-3 text-sm text-foreground/70">
                      <p><span className="font-semibold text-foreground">Size:</span> {farm.size}</p>
                      <p><span className="font-semibold text-foreground">Crops:</span> {farm.crops}</p>
                      <p className="leading-relaxed">{farm.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">State-of-the-Art Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Advanced Technology</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>Precision irrigation systems</li>
                  <li>Climate-controlled storage facilities</li>
                  <li>Advanced sorting and grading equipment</li>
                  <li>Real-time monitoring systems</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Quality Assurance</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>ISO certified facilities</li>
                  <li>Regular quality testing</li>
                  <li>Pest management programs</li>
                  <li>Traceability systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
