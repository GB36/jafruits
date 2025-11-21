import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function About() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-primary text-primary-foreground bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/artem-r-nCjgg25inaE-unsplash-V5ECYCt1HskgtrixUZY9MrwSPF4aZ6.jpg')" }}>
          <div className="absolute inset-0 bg-primary/70 z-10"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">About J & A Fruits</h1>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl">
              With over three decades of expertise in agricultural exports, we've built a reputation for excellence.
            </p>
          </div>
        </section>

        {/* History */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  J & A Fruits was established in 2022 with a vision to become a premier supplier of premium pineapples to the global market. Our company has quickly built a reputation for excellence and sustainability.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Our commitment to quality, integrity, and sustainable farming practices has been the foundation of our rapid growth. We invest continuously in our farms, infrastructure, and people to maintain the highest standards.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Today, we're proud to serve major retailers, distributors, and businesses worldwide, maintaining relationships built on trust and excellence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg h-64 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-accent text-6xl font-bold">2022</div>
                  <p className="text-primary font-semibold mt-2">Founded</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
                <p className="text-foreground/70 leading-relaxed">
                  To deliver premium agricultural products that exceed customer expectations while advancing sustainable farming practices and enriching our communities.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Values</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>Excellence in quality and service</li>
                  <li>Environmental stewardship</li>
                  <li>Fair trade and ethical practices</li>
                  <li>Innovation and continuous improvement</li>
                  <li>Community support and development</li>
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
