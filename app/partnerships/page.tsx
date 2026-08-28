import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Partnerships() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: 'url(/images/partnerships-header-bg.jpg)'
            }}
          />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Export & Partnerships</h1>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl">
              Strategic relationships with global distributors and retailers, We are working with Mighty Crop Company Limited, a local pineapple farm from which we hold 30% of their share capital. this partnership allows us to be able to export fruits worldwide with all necessary certifications.
            </p>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12">Why Partner with J & A Fruits?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Reliable Supply Chain</h3>
                  <p className="text-foreground/70">Consistent availability year-round with efficient logistics and real-time tracking.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Competitive Pricing</h3>
                  <p className="text-foreground/70">Direct sourcing ensures optimal pricing while maintaining premium quality standards.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Quality Assurance</h3>
                  <p className="text-foreground/70">Every shipment undergoes rigorous testing and meets international certification requirements.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Technical Support</h3>
                  <p className="text-foreground/70">Dedicated teams provide guidance on storage, ripening, and product handling.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Sustainability Focus</h3>
                  <p className="text-foreground/70">Aligned with global environmental standards and responsible farming initiatives.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Partnership Development</h3>
                  <p className="text-foreground/70">Collaborative approach to understand and meet your unique market requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Export Details */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Export Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">Global Reach</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  We export to over 50 countries across all continents with established logistics networks.
                </p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>Air freight available</li>
                  <li>Ocean shipping standard</li>
                  <li>Dedicated containers</li>
                </ul>
              </div>
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">Certifications</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  All facilities maintain certifications required by major international markets.
                </p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>ISO 9001:2015</li>
                  <li>HACCP Certified</li>
                  <li>Organic Certified</li>
                </ul>
              </div>
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">Documentation</h3>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Complete documentation support for smooth customs clearance worldwide.
                </p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>Phyto-certificates</li>
                  <li>Export permits</li>
                  <li>Quality certificates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold">Interested in Partnership?</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Let's discuss how we can meet your sourcing requirements.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors">
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
