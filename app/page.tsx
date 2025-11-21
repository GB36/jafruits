import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Premium Fruits <span className="text-accent">for Global Markets</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed">
                J & A Fruits is a premium pineapple exporter established in 2022, committed to sustainable farming practices, world-class quality standards, and excellence in global agricultural trade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                  Explore Our Products →
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-2xl">
                  🌱
                </div>
                <h3 className="text-xl font-semibold">Sustainable Farming</h3>
                <p className="text-foreground/70 leading-relaxed">
                  We employ eco-conscious practices across all our operations, protecting the environment for future generations.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-2xl">
                  🌍
                </div>
                <h3 className="text-xl font-semibold">Global Reach</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Our products reach over 50 countries, maintaining consistent quality and reliability in every shipment.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <h3 className="text-xl font-semibold">Premium Quality</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Every fruit meets rigorous international standards, ensuring customer satisfaction consistently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Partner with Us?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Join our network of satisfied partners and distributors worldwide.
            </p>
            <Link href="/partnerships" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
              Learn About Partnerships →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
