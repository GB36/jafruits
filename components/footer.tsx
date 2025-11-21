import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">J & A Fruits</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Premium agricultural exports serving global markets with excellence and sustainability.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/farms" className="hover:text-accent transition-colors">Our Farms</Link></li>
              <li><Link href="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Business</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/partnerships" className="hover:text-accent transition-colors">Partnerships</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:jafruitsltd@gmail.com" className="hover:text-accent transition-colors">Email</a></li>
              <li><a href="tel:+233277864574" className="hover:text-accent transition-colors">Phone</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-primary-foreground/70 text-center">
            © {new Date().getFullYear()} J & A Fruits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
