import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Site Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Building Your <br />
              <span className="text-primary">Vision</span> With Precision
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              We are a premium construction company dedicated to creating enduring structures with uncompromising quality, innovative design, and expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-primary/30 text-center">
                Get a Free Quote
              </Link>
              <Link href="#projects" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg transition-all text-center border border-white/20">
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white dark:bg-darker">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-4xl md:text-5xl font-black text-dark dark:text-white mb-6">Our Services</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Comprehensive construction solutions tailored to meet the highest standards of safety, durability, and aesthetics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Commercial Construction", icon: "🏢", desc: "State-of-the-art office spaces, retail centers, and industrial facilities built for maximum efficiency." },
              { title: "Residential Development", icon: "🏡", desc: "Custom luxury homes and modern residential complexes designed for comfort and elegance." },
              { title: "Renovation & Remodeling", icon: "🔨", desc: "Transforming existing spaces with modern upgrades, structural improvements, and premium finishes." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 hover:border-primary/50 transition-all hover:-translate-y-2 group cursor-pointer shadow-sm hover:shadow-xl">
                <div className="text-5xl mb-6 bg-white dark:bg-gray-700 w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-dark dark:text-white mb-4">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Work</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h3>
            </div>
            <Link href="/projects" className="text-primary hover:text-white border-b border-primary hover:border-white pb-1 font-semibold transition-colors">
              View All Projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2262&auto=format&fit=crop" alt="The Apex Tower" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent/50 opacity-90" />
              <div className="absolute bottom-0 left-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-primary font-bold text-sm mb-2 block">Commercial</span>
                <h4 className="text-3xl font-bold text-white mb-2">The Apex Tower</h4>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100">A 45-story modern office space.</p>
              </div>
            </div>
            <div className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Luxury Villa Estate" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent/50 opacity-90" />
              <div className="absolute bottom-0 left-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-primary font-bold text-sm mb-2 block">Residential</span>
                <h4 className="text-3xl font-bold text-white mb-2">Luxury Villa Estate</h4>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Exclusive 12-home gated community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-gray-50 dark:bg-darker">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop" alt="Construction Team" fill className="object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-dark dark:text-white mb-8">Building Excellence Since 1995.</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                For over two decades, ConstructX has been at the forefront of the construction industry. We blend traditional craftsmanship with cutting-edge technology and sustainable practices.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed">
                Our team of dedicated professionals ensures every project is executed with flawless precision, on time and within budget, forging a reputation built on trust and reliability.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-gray-200 dark:border-gray-800 pt-10">
                <div>
                  <h4 className="text-4xl font-black text-primary mb-2">150+</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-4xl font-black text-primary mb-2">25</h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
