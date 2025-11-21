import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Leaf, Droplets, Sun, Trees } from 'lucide-react'

export default function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Soil Health',
      description: 'Crop rotation and organic composting to maintain soil fertility and biodiversity.'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Advanced irrigation systems reducing water usage by 40% while maintaining yields.'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Solar panels powering 60% of farm operations and storage facilities.'
    },
    {
      icon: Trees,
      title: 'Reforestation',
      description: 'Planting 50 trees annually to offset carbon footprint and restore ecosystems.'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section
          className="py-20 md:py-32 text-primary-foreground relative"
          style={{
            backgroundImage: 'linear-gradient(rgba(22, 101, 52, 0.7), rgba(22, 101, 52, 0.7)), url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-PTAj2idYNbVOll07NTIL5Oc1n9bL4p.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Sustainability</h1>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl">
              Environmental stewardship is at the core of everything we do.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                J & A Fruits is committed to leaving the world better than we found it. We recognize that sustainable agriculture is not just an ethical imperative—it's essential for long-term business success and global food security.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Our sustainability initiatives encompass environmental conservation, fair labor practices, community development, and economic responsibility. Every decision we make considers our impact on people and the planet.
              </p>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Our Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {initiatives.map((init) => {
                const Icon = init.icon
                return (
                  <div key={init.title} className="bg-background p-6 rounded-lg">
                    <Icon className="text-accent mb-4" size={32} />
                    <h3 className="text-lg font-semibold text-primary mb-2">{init.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{init.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">40%</div>
                <p className="text-sm text-foreground/70">Water Saved Annually</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">50</div>
                <p className="text-sm text-foreground/70">Trees Planted Yearly</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">60%</div>
                <p className="text-sm text-foreground/70">Renewable Energy Used</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <p className="text-sm text-foreground/70">Fair Wages Paid</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
