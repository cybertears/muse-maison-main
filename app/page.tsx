"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Camera,
  Film,
  Play,
  Instagram,
  Youtube,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Heart,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react"
import { useState } from "react"
import { FilmGrainOverlay } from "@/components/film-grain-overlay"
import { FilmTexture } from "@/components/film-texture"
import { PolaroidImage } from "@/components/polaroid-image"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111111]">
      <FilmGrainOverlay />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <PortfolioSection />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-[#111111]" style={{ fontFamily: "serif" }}>
            MUSE
          </span>
          <span className="text-2xl font-light tracking-tight text-[#FF0000]" style={{ fontFamily: "sans-serif" }}>
            MAISON
          </span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#portfolio"
            className="text-sm font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
          >
            Portfolio
          </Link>
          <Link
            href="#about"
            className="text-sm font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
          >
            Services
          </Link>
          <Link
            href="#blog"
            className="text-sm font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
          >
            Journal
          </Link>
          <Link
            href="#contact"
            className="text-sm font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="https://instagram.com" className="text-neutral-600 hover:text-[#FF0000]">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://youtube.com" className="text-neutral-600 hover:text-[#FF0000]">
            <Youtube className="h-5 w-5" />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="https://twitter.com" className="text-neutral-600 hover:text-[#FF0000]">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-neutral-600 hover:bg-neutral-100 hover:text-[#FF0000]"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-3/4 bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-0">
                <span className="text-2xl font-bold tracking-tighter text-[#111111]" style={{ fontFamily: "serif" }}>
                  MUSE
                </span>
                <span
                  className="text-2xl font-light tracking-tight text-[#FF0000]"
                  style={{ fontFamily: "sans-serif" }}
                >
                  MAISON
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-neutral-600 hover:bg-neutral-100 hover:text-[#FF0000]"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-4">
              <Link
                href="#portfolio"
                className="text-lg font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-lg font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-lg font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#blog"
                className="text-lg font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
                onClick={() => setIsOpen(false)}
              >
                Journal
              </Link>
              <Link
                href="#contact"
                className="text-lg font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-8 flex gap-4">
              <Link href="https://instagram.com" className="text-neutral-600 hover:text-[#FF0000]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="text-neutral-600 hover:text-[#FF0000]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://twitter.com" className="text-neutral-600 hover:text-[#FF0000]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
      <FilmTexture className="opacity-15" />
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 relative">
              <div className="inline-block text-xs font-mono tracking-widest text-[#FF0000] mb-4">
                PHOTOGRAPHY & FILM
              </div>
              <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none">
                <span className="font-serif">VISUAL</span>
                <span className="block font-light text-[#FF0000]" style={{ fontFamily: "sans-serif" }}>
                  STORYTELLING
                </span>
              </h1>
              <p className="max-w-[600px] text-neutral-600 md:text-xl font-light tracking-wide mt-4">
                Capturing moments, crafting narratives, and creating timeless visual stories through the lens.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
              <Button size="lg" className="px-8 bg-[#FF0000] text-white hover:bg-[#CC0000] rounded-none">
                VIEW PORTFOLIO
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-[#FF0000] rounded-none group"
              >
                CONTACT ME
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="relative">
              <div className="absolute inset-0 border-8 border-white shadow-lg rotate-3"></div>
              <div className="absolute inset-0 border-8 border-white shadow-lg -rotate-3 translate-y-4"></div>
              <div className="relative border-[12px] border-white shadow-xl bg-white">
                <Image
                  src="/placeholder.svg?height=550&width=450&text=Fashion+Portrait"
                  width={450}
                  height={550}
                  alt="Portrait Photography"
                  className="relative object-cover"
                />
                <div className="absolute bottom-4 left-4 text-xs font-mono text-white bg-black/50 px-2 py-1">
                  PARIS, 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block text-xs font-mono tracking-widest text-[#FF0000] mb-4">PORTFOLIO</div>
            <h2 className="text-3xl font-serif tracking-tight md:text-5xl/tight">SELECTED WORKS</h2>
            <p className="max-w-[600px] text-neutral-600 md:text-xl/relaxed font-light mx-auto">
              A curated collection of my favorite photography and film projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <PolaroidImage
            src="/placeholder.svg?height=400&width=300&text=Fashion+Editorial"
            alt="Fashion Editorial"
            caption="VOGUE EDITORIAL"
            date="SUMMER 2023"
            aspectRatio="portrait"
            rotation={2}
          />
          <PolaroidImage
            src="/placeholder.svg?height=300&width=400&text=Street+Photography"
            alt="Street Photography"
            caption="STREET STORIES"
            date="SPRING 2023"
            className="md:mt-12"
            aspectRatio="landscape"
            rotation={-1}
          />
          <PolaroidImage
            src="/placeholder.svg?height=400&width=300&text=Portrait+Series"
            alt="Portrait Session"
            caption="PORTRAIT SERIES"
            date="WINTER 2022"
            aspectRatio="portrait"
            rotation={1}
          />
          <PolaroidImage
            src="/placeholder.svg?height=300&width=400&text=Wedding+Photography"
            alt="Wedding Photography"
            caption="WEDDING COLLECTION"
            date="FALL 2023"
            aspectRatio="landscape"
            rotation={-2}
          />
          <PolaroidImage
            src="/placeholder.svg?height=350&width=350&text=Tokyo+Travels"
            alt="Travel Documentary"
            caption="TOKYO TRAVELS"
            date="SUMMER 2022"
            className="md:mt-12"
            aspectRatio="square"
            rotation={0}
          />
          <PolaroidImage
            src="/placeholder.svg?height=400&width=300&text=Film+Still"
            alt="Film Still"
            caption="SHORT FILM: ECHO"
            date="WINTER 2023"
            aspectRatio="portrait"
            rotation={-1.5}
          />
        </div>

        <div className="flex justify-center mt-16">
          <Button className="px-8 bg-transparent hover:bg-[#FF0000] text-[#FF0000] hover:text-white border border-[#FF0000] rounded-none">
            VIEW ALL WORK
          </Button>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
      <FilmTexture className="opacity-10" />
      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#FF0000]"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[#FF0000]"></div>
            <div className="relative border-[8px] border-white shadow-lg bg-white">
              <Image
                src="/placeholder.svg?height=500&width=400&text=Photographer+Portrait"
                width={400}
                height={500}
                alt="Photographer Portrait"
                className="relative object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-block text-xs font-mono tracking-widest text-[#FF0000] mb-4">ABOUT ME</div>
            <h2 className="text-3xl font-serif tracking-tight md:text-4xl/tight">CAPTURING LIFE THROUGH MY LENS</h2>
            <p className="text-neutral-600 font-light">
              Hello, I'm Alex Chen, a photographer and filmmaker based in New York City. With over 10 years of
              experience, I specialize in fashion photography, documentary filmmaking, and editorial work.
            </p>
            <p className="text-neutral-600 font-light">
              My approach combines technical precision with artistic intuition, allowing me to create images that tell
              compelling stories. I believe in the power of visual storytelling to evoke emotion and preserve moments
              that might otherwise be forgotten.
            </p>
            <p className="text-neutral-600 font-light">
              When I'm not behind the camera, you can find me exploring new cities, visiting art galleries, or
              experimenting with vintage film cameras.
            </p>

            <div className="flex gap-6 mt-8">
              <div>
                <p className="text-4xl font-light text-[#FF0000]">10+</p>
                <p className="text-sm font-mono text-neutral-600">YEARS OF EXPERIENCE</p>
              </div>
              <div>
                <p className="text-4xl font-light text-[#FF0000]">200+</p>
                <p className="text-sm font-mono text-neutral-600">PROJECTS COMPLETED</p>
              </div>
              <div>
                <p className="text-4xl font-light text-[#FF0000]">50+</p>
                <p className="text-sm font-mono text-neutral-600">HAPPY CLIENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-start space-y-4 mb-12">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block text-xs font-mono tracking-widest text-[#FF0000] mb-4">SERVICES</div>
            <h2 className="text-3xl font-serif tracking-tight md:text-5xl/tight">WHAT I OFFER</h2>
            <p className="max-w-[600px] text-neutral-600 md:text-xl/relaxed font-light">
              Professional photography and videography services tailored to your needs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <ServiceCard
            icon={<Camera className="h-8 w-8 text-[#FF0000]" />}
            title="PORTRAIT PHOTOGRAPHY"
            description="Capturing your authentic self in carefully composed portraits that tell your unique story."
            price="Starting at $300"
            image="/placeholder.svg?height=200&width=300&text=Portrait+Photography"
          />
          <ServiceCard
            icon={<Film className="h-8 w-8 text-[#FF0000]" />}
            title="WEDDING PHOTOGRAPHY"
            description="Documenting your special day with a blend of candid moments and artistic compositions."
            price="Starting at $2,000"
            image="/placeholder.svg?height=200&width=300&text=Wedding+Photography"
          />
          <ServiceCard
            icon={<Play className="h-8 w-8 text-[#FF0000]" />}
            title="COMMERCIAL VIDEOGRAPHY"
            description="Creating compelling visual content for brands that connects with audiences and drives engagement."
            price="Starting at $1,500"
            image="/placeholder.svg?height=200&width=300&text=Commercial+Video"
          />
        </div>

        <div className="mt-16 p-8 bg-white border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block text-xs font-mono tracking-widest text-[#FF0000] mb-4">CUSTOM PACKAGES</div>
              <h3 className="text-2xl font-serif mb-4">TAILORED TO YOUR VISION</h3>
              <p className="text-neutral-600 font-light mb-6">
                Need something specific? I offer custom photography and videography packages designed to meet your
                unique requirements and creative vision.
              </p>
              <Button className="px-8 bg-[#FF0000] text-white hover:bg-[#CC0000] rounded-none">GET IN TOUCH</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-50 p-4">
                <p className="text-sm font-mono text-neutral-800">Fashion Lookbooks</p>
              </div>
              <div className="bg-neutral-50 p-4">
                <p className="text-sm font-mono text-neutral-800">Product Photography</p>
              </div>
              <div className="bg-neutral-50 p-4">
                <p className="text-sm font-mono text-neutral-800">Event Coverage</p>
              </div>
              <div className="bg-neutral-50 p-4">
                <p className="text-sm font-mono text-neutral-800">Documentary Films</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description, price, image }) {
  return (
    <div className="bg-white p-8 border border-neutral-200 shadow-sm transition-all hover:shadow-md">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-serif mb-3">{title}</h3>
      <p className="text-neutral-600 font-light mb-6">{description}</p>

      {image && (
        <div className="mb-6 overflow-hidden relative vintage-effect">
          <div className="absolute inset-0 bg-black opacity-[0.03] mix-blend-multiply pointer-events-none z-10 film-grain-animation"></div>
          <Image
            src={image || "/placeholder.svg"}
            width={300}
            height={200}
            alt={title}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="h-px w-full bg-neutral-200 my-6"></div>
      <p className="text-[#FF0000] font-mono text-sm">{price}</p>
    </div>
  )
}

function BlogSection() {
  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-start space-y-4 mb-12">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block text-xs font-mono tracking-widest text-[#FF0000] mb-4">JOURNAL</div>
            <h2 className="text-3xl font-serif tracking-tight md:text-5xl/tight">BEHIND THE SCENES</h2>
            <p className="max-w-[600px] text-neutral-600 md:text-xl/relaxed font-light">
              Stories, insights, and creative processes from recent projects.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <BlogPost
            src="/placeholder.svg?height=300&width=400&text=Film+Photography"
            alt="Film Photography"
            title="The Revival of Film Photography in the Digital Age"
            excerpt="Exploring why analog photography continues to captivate in our digital world."
            date="June 15, 2023"
            comments={12}
          />
          <BlogPost
            src="/placeholder.svg?height=300&width=400&text=Natural+Light+Portrait"
            alt="Lighting Setup"
            title="Mastering Natural Light: Tips for Stunning Portraits"
            excerpt="How to use natural light to create beautiful, evocative portrait photography."
            date="May 22, 2023"
            comments={8}
          />
          <BlogPost
            src="/placeholder.svg?height=300&width=400&text=Camera+Gear"
            alt="Camera Gear"
            title="Essential Gear for the Modern Photographer"
            excerpt="A curated list of must-have equipment for both beginners and professionals."
            date="April 10, 2023"
            comments={15}
          />
        </div>

        <div className="flex justify-center mt-16">
          <Button className="px-8 bg-transparent hover:bg-[#FF0000] text-[#FF0000] hover:text-white border border-[#FF0000] rounded-none">
            VIEW ALL POSTS
          </Button>
        </div>
      </div>
    </section>
  )
}

function BlogPost({ src, alt, title, excerpt, date, comments }) {
  return (
    <div className="group">
      <div className="overflow-hidden mb-4 relative vintage-effect vignette">
        <div className="absolute inset-0 bg-black opacity-[0.03] mix-blend-multiply pointer-events-none z-10 film-grain-animation"></div>
        <Image
          src={src || "/placeholder.svg"}
          width={400}
          height={300}
          alt={alt}
          className="object-cover w-full h-[240px] transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center text-xs text-neutral-500">
          <Calendar className="h-3 w-3 mr-1" />
          {date}
        </div>
        <div className="flex items-center text-xs text-neutral-500">
          <MessageSquare className="h-3 w-3 mr-1" />
          {comments} comments
        </div>
      </div>
      <h3 className="text-xl font-serif mb-2 group-hover:text-[#FF0000] transition-colors">{title}</h3>
      <p className="text-neutral-600 font-light mb-4">{excerpt}</p>
      <Link
        href="#"
        className="text-xs font-mono uppercase tracking-widest text-[#FF0000] flex items-center group-hover:underline"
      >
        Read More
        <ArrowRight className="ml-2 h-3 w-3" />
      </Link>
    </div>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-neutral-50 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block text-xs font-mono tracking-widest text-[#FF0000] mb-4">GET IN TOUCH</div>
            <h2 className="text-3xl font-serif tracking-tight md:text-4xl/tight">
              LET'S CREATE SOMETHING BEAUTIFUL TOGETHER
            </h2>
            <p className="text-neutral-600 md:text-xl/relaxed font-light max-w-[500px]">
              Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from
              you.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center bg-[#FF0000]/10">
                  <User className="h-5 w-5 text-[#FF0000]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Alex Chen</p>
                  <p className="text-sm text-neutral-500">Photographer & Filmmaker</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center bg-[#FF0000]/10">
                  <MessageSquare className="h-5 w-5 text-[#FF0000]" />
                </div>
                <div>
                  <p className="text-sm font-medium">hello@musemaison.com</p>
                  <p className="text-sm text-neutral-500">Email me anytime</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Link href="https://instagram.com" className="text-neutral-600 hover:text-[#FF0000]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="text-neutral-600 hover:text-[#FF0000]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://twitter.com" className="text-neutral-600 hover:text-[#FF0000]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 border border-neutral-200 shadow-sm">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono text-neutral-800">
                  NAME
                </label>
                <input
                  id="name"
                  className="w-full border border-neutral-200 p-3 text-sm focus:border-[#FF0000] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-neutral-800">
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-neutral-200 p-3 text-sm focus:border-[#FF0000] focus:outline-none"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-neutral-800">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  className="w-full border border-neutral-200 p-3 text-sm focus:border-[#FF0000] focus:outline-none h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-[#FF0000] text-white hover:bg-[#CC0000] rounded-none">SEND MESSAGE</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-0 mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-tighter text-[#111111]" style={{ fontFamily: "serif" }}>
              MUSE
            </span>
            <span className="text-xl font-light tracking-tight text-[#FF0000]" style={{ fontFamily: "sans-serif" }}>
              MAISON
            </span>
          </div>

          <div className="flex gap-8">
            <Link
              href="#portfolio"
              className="text-xs font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="text-xs font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-xs font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
            >
              Services
            </Link>
            <Link
              href="#blog"
              className="text-xs font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
            >
              Journal
            </Link>
            <Link
              href="#contact"
              className="text-xs font-light uppercase tracking-widest text-neutral-600 hover:text-[#FF0000]"
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://instagram.com" className="text-neutral-600 hover:text-[#FF0000]">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://youtube.com" className="text-neutral-600 hover:text-[#FF0000]">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="https://twitter.com" className="text-neutral-600 hover:text-[#FF0000]">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-neutral-500 font-light">
            &copy; {new Date().getFullYear()} Muse Maison. All rights reserved.
          </div>
          <div className="text-xs text-neutral-500 font-mono tracking-wider mt-4 md:mt-0 flex items-center">
            MADE WITH <Heart className="h-3 w-3 text-[#FF0000] mx-1" /> IN CHICAGO
          </div>
        </div>
      </div>
    </footer>
  )
}
