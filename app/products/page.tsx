import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export default function Products() {
  const products = [
    {
      name: 'MD2 Pineapple',
      description: 'The most commercially traded pineapple worldwide. Golden color, excellent shelf life, and consistent quality for global distribution.',
      certifications: 'ISO 9001, HACCP Certified',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sugar%20loaf%20pineapple-OTxQjOgTwaSsjZOa3IYfSwQdzdXQXX.jpg'
    },
    {
      name: 'Sugarloaf Pineapple',
      description: 'Sweet, tender, and seedless pineapple variety with exceptional flavor profile. Perfect for fresh consumption and premium export markets.',
      certifications: 'Organic, Fair Trade',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/md2%20pineapple-CAOmTHwrbigAdONT3nAXSZkO6ofnA0.jpg'
    },
    {
      name: 'Smooth Cayenne Pineapple',
      description: 'Classic variety with smooth leaves and superior juice content. Ideal for processing and fresh market applications.',
      certifications: 'ISO 22000, Sustainable',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smooth%20cayenne%20pineapple-g5zjq8Tnx6x08adN774auqVD0KMNpc.jpg'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-20 md:py-32 text-primary-foreground overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kenny-kuo-u-hshXzEjk4-unsplash-kzKWD2UeVSyhmtDY5sKq4mYzB7knMA.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-primary/75" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Our Premium Pineapples</h1>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl">
              J & A Fruits specializes in three superior pineapple varieties, each carefully cultivated to meet the highest international standards.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.name} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <div className="relative w-full h-64 bg-neutral-100">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">{product.name}</h3>
                    <p className="text-sm text-foreground/70 mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.split(', ').map((cert) => (
                        <span key={cert} className="text-xs bg-accent/10 text-accent rounded px-2 py-1 font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
