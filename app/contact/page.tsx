'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }



  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_TEMPLEATE_KEY!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "mrjessemisiame@gmail.com",
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error: any) => {
          console.error(error);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 md:py-32 text-primary-foreground" style={{
          backgroundImage: "linear-gradient(to bottom right, #9b9b9b6b, #2726264d), url('/images/contact-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: "center"
        }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">Contact Us</h1>
            <p className="mt-6 text-lg text-primary-foreground/90 max-w-2xl">
              Get in touch with our team. We're here to help and answer any questions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold">Get in Touch</h2>

                <div className="flex gap-4">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <p className="text-foreground/70">GT-336-4604, House Number RP/14/ANX/7A<br />Tema Community 14, Accra, Ghana</p>
                    <br />
                    <p className="text-foreground/70">CHEMIN DE LA GOUTTE, D'OR, 17 2014 BOLE<br />Switzerland</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "center"
                    }}>
                      <a href="tel:+233245026980">+233245026980 </a>
                      <a href="tel:+233277864574">+233277864574 </a>
                      <a href="tel:+41793553204">+41793553204</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a
                      href="mailto:jafruitsltd@gmail.com?subject=Inquiry%20About%20Pineapple%20Availability%2C%20Types%20and%20Prices&body=Hello%20J%26A%20Fruits%20Team%2C%0A%0AI%20hope%20you%20are%20doing%20well.%20I%20would%20like%20to%20inquire%20about%20your%20pineapple%20products.%20Could%20you%20please%20provide%20information%20on%20the%20following%3A%0A%0A1.%20The%20types%20or%20varieties%20of%20pineapples%20currently%20available%0A2.%20Their%20availability%20(weekly%20or%20monthly%20supply)%0A3.%20The%20pricing%20for%20both%20wholesale%20and%20retail%0A4.%20Any%20minimum%20order%20requirements%20and%20delivery%20options%0A%0AThank%20you%2C%0A%5BYour%20Name%5D"
                      className="text-foreground/70"
                    >
                      jafruitsltd@gmail.com
                    </a>

                  </div>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg mt-8">
                  <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                  <p className="text-sm text-foreground/70">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-foreground/70">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-sm text-foreground/70">Sunday: Closed</p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main >
      <Footer />
    </>
  )
}
