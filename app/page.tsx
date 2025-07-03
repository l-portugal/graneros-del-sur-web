"use client"

import { useState, useEffect } from "react"
import { Instagram, MessageCircle } from "lucide-react"
import navStyles from "../styles/navigation.module.css"
import heroStyles from "../styles/hero.module.css"
import productStyles from "../styles/products.module.css"
import aboutStyles from "../styles/about.module.css"
import contactStyles from "../styles/contact.module.css"
import footerStyles from "../styles/footer.module.css"

import { Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      {/* Navigation */}
      <nav className={navStyles.nav}>
        <div className={navStyles.navContainer}>

          <div className={navStyles.logo}>
            <img src="/logo-solo.png" alt="Logo" />
          </div>

          <div className={navStyles.logoMobile}>
            <img src="/logo-graneros.png" alt="Logo" />
          </div>

          {/* Botón hamburguesa visible solo en móvil */}
          <button
            className={navStyles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Menú mobile para pantallas pequeñas */}
          <div
            className={`${navStyles.navMenuMobile} ${isOpen ? navStyles.open : ''
              }`}
          >
            <button onClick={() => {
                setIsOpen(false);
                scrollToSection("inicio");
              }} 
              className={navStyles.navButton}>
                Inicio
            </button>
            <button onClick={() => {
                setIsOpen(false);
                scrollToSection("productos");
              }} 
              className={navStyles.navButton}>
                Productos
            </button>
            <button onClick={() => {
                setIsOpen(false);
                scrollToSection("nosotros");
              }} 
              className={navStyles.navButton}>
                Nosotros
            </button>
            <button onClick={() => {
                setIsOpen(false);
                scrollToSection("contacto");
              }} 
              className={navStyles.navButton}>
                Contacto
            </button>
            <button className={navStyles.navButton}>Experiencias</button>
          </div>

          {/* Menú normal para pantallas grandes */}
          <div className={navStyles.navMenu}>
            <button
              onClick={() => scrollToSection("inicio")} 
              className={navStyles.navButton}
              >
              Inicio
            </button>
            <button onClick={() => scrollToSection("productos")} className={navStyles.navButton}>
              Productos
            </button>
            <button onClick={() => scrollToSection("nosotros")} className={navStyles.navButton}>
              Nosotros
            </button>
            <button onClick={() => scrollToSection("contacto")} className={navStyles.navButton}>
              Contacto
            </button>
            <button className={navStyles.navButton}>Experiencias</button>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className={heroStyles.hero}
        style={{
          backgroundImage: "url('/hero-background.jpg')",
        }}
      >
        <div className={heroStyles.heroOverlay} />
        <div className={heroStyles.heroContainer}>
          <div className={heroStyles.heroGrid}>
            <div className={heroStyles.heroContent}>
              <h1
                className={heroStyles.heroTitle}
                style={{
                  transform: `translateY(${scrollY * -0.1}px)`,
                }}
              >
                <p className={heroStyles.heroTitleLowlight}>Sabores de</p>
                <p className={heroStyles.heroTitleHighlight}>Nuestra Tierra</p>
              </h1>
              <p
                className={heroStyles.heroSubtitle}
                style={{
                  transform: `translateY(${scrollY * -0.05}px)`,
                }}
              >
                directo a tu mesa.
              </p>
              <button onClick={() => scrollToSection("productos")} className={heroStyles.heroButton}>
                Conocé nuestros productos
              </button>
            </div>

            <div className={heroStyles.heroLogoSection}>
              <div
                className={heroStyles.heroLogoContainer}
                style={{
                  transform: `translateY(${scrollY * -0.1}px)`,
                }}
              >
                <img src="logo-graneros.png" alt="Graneros del Sur" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="mapa" className={productStyles.mapSection}>
        <div className={productStyles.mapContainer}>
          <div className={productStyles.mapGrid}>
            <div className={productStyles.mapContent}>
              <h2>
                <span style={{ fontSize: "2.5rem", fontWeight: "500" }}>Descubrí los Sabores</span>
                <br />
                <span style={{ fontWeight: "bold" }}>Auténticos de Argentina</span>
              </h2>
              <p>
                Explora nuestro mapa interactivo y conectate directamente con productores locales. Cada producto cuenta
                una historia, cada sabor tiene su origen.
              </p>

              <div className={productStyles.mapButtons}>
                <button className={productStyles.mapButton}>Explorar Mapa</button>
                <button className={productStyles.mapButtonOutline}>Ver Productos</button>
              </div>

              <div className={productStyles.mapStats}>
                <div className={productStyles.mapStat}>
                  <div className={productStyles.mapStatNumber}>23</div>
                  <div className={productStyles.mapStatLabel}>Provincias</div>
                </div>
                <div className={productStyles.mapStat}
                  style={{
                    borderRight: "1px solid",
                    borderLeft: "1px solid",
                  }}
                >
                  <div className={productStyles.mapStatNumber}>150+</div>
                  <div className={productStyles.mapStatLabel}>Productores</div>
                </div>
                <div className={productStyles.mapStat}>
                  <div className={productStyles.mapStatNumber}>500+</div>
                  <div className={productStyles.mapStatLabel}>Productos</div>
                </div>
              </div>
            </div>

            <div className={productStyles.mapVisualization}>
              <div className={productStyles.mapCard}>
                <div className={productStyles.mapCardInner}>
                  <div className={productStyles.mapCanvas}>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11600870.918617535!2d-76.647253748633!3d-37.174401115499556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9426fc3d0e091fbb%3A0xe6f49b54e8428208!2sVilla%20Maz%C3%A1n%2C%20La%20Rioja!5e0!3m2!1ses!2sar!4v1751304322477!5m2!1ses!2sar" height="450" loading="lazy" style={{ width: "100vw", border: 0 }}></iframe>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className={productStyles.productsSection}
        style={{
          backgroundImage: "url('/fondo-productos.jpg')",
        }}
      >
        <div className={productStyles.productsContainer}>
          <h2 className={productStyles.productsTitle}>
            Productos Regionales <span className={productStyles.productsTitleItalic}>de Argentina</span>
          </h2>
          <div className={productStyles.productsGrid}>
            <div className={`${productStyles.productCard} ${productStyles.productCardOils}`}>
              <h3 className={productStyles.productCardTitle}>Aceites</h3>
              <h4 className={productStyles.productCardSubtitle}>& Conservas</h4>
              <p className={productStyles.productCardDescription}>
                Aceites de oliva, conservas artesanales y productos gourmet de diferentes regiones argentinas.
              </p>
              <div className={productStyles.productCardFeatures}>
                Aceites de oliva premium / Conservas tradicionales / Productos gourmet
              </div>
              {/* <button className={productStyles.productCardButton}>Ver Productos</button> */}
            </div>

            <div className={`${productStyles.productCard} ${productStyles.productCardWines}`}>
              <h3 className={productStyles.productCardTitle}>Vinos</h3>
              <h4 className={productStyles.productCardSubtitle}>& Bebidas</h4>
              <p className={productStyles.productCardDescription}>
                Vinos de alta calidad y bebidas tradicionales de las mejores bodegas y productores del país.
              </p>
              <div className={productStyles.productCardFeatures}>
                Vinos de autor / Bebidas artesanales / Licores regionales
              </div>
              {/* <button className={productStyles.productCardButton}>Ver Productos</button> */}
            </div>

            <div className={`${productStyles.productCard} ${productStyles.productCardSweets}`}>
              <h3 className={productStyles.productCardTitle}>Dulces</h3>
              <h4 className={productStyles.productCardSubtitle}>& Especias</h4>
              <p className={productStyles.productCardDescription}>
                Dulces caseros, especias aromáticas y condimentos únicos de cada región argentina.
              </p>
              <div className={productStyles.productCardFeatures}>
                Dulces artesanales / Especias regionales / Condimentos únicos
              </div>
              {/* <button className={productStyles.productCardButton}>Ver Productos</button> */}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="nosotros"
        className={aboutStyles.aboutSection}
        style={{
          backgroundImage: "url('/mission-background.jpg')",
        }}
      >
        <div className={aboutStyles.aboutContainer}>
          <div className={aboutStyles.aboutContent}>
            <h2 className={aboutStyles.aboutTitle}>Nuestra Misión</h2>
            <p className={aboutStyles.aboutText}>
              <strong>Graneros del Sur</strong> nace con la misión de conectar los sabores auténticos de Argentina con tu mesa.
              Trabajamos como puente entre productores locales de todo el país y consumidores que buscan calidad y
              autenticidad.
            </p>
            <p className={aboutStyles.aboutTextLast}>
              Cada producto que distribuimos cuenta una historia única, representa una tradición familiar y lleva
              consigo el sabor genuino de su región de origen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={contactStyles.contactSection}>
        <div className={contactStyles.contactContainer}>
          <div className={contactStyles.contactGrid}>
            <div className={contactStyles.contactInfo}>
              <div className={contactStyles.contactLogo}>
                {/* <svg viewBox="0 0 200 200" className={contactStyles.contactLogoIcon}>
                  <circle cx="60" cy="50" r="16" />
                  <path d="M30 90 Q60 70, 90 90 Q120 110, 150 90 Q170 80, 180 100 L180 140 Q170 150, 150 140 Q120 130, 90 140 Q60 150, 30 140 Z" />
                </svg> */}
                <img src="/logo-contacto.png" alt="Logo" />
              </div>

              {/* <div className={contactStyles.contactLogoText}>
                <div className={contactStyles.contactLogoTitle}>GRANEROS</div>
                <div className={contactStyles.contactLogoSubtitle}>DEL SUR</div>
              </div> */}

              <p className={contactStyles.contactTitle}>Contactanos</p>

              <div className={contactStyles.contactDetails}>
                <div className={contactStyles.contactDetail}>+54 11 71908080</div>
                <div className={contactStyles.contactDetail}>info@granerosdelsur.com.ar</div>
              </div>

              <h4 className={contactStyles.socialTitle}>Síguenos en Redes Sociales</h4>
              <div className={contactStyles.socialLinks}>
                {/* <a href="#" className={contactStyles.socialLink}>
                  <Facebook className={contactStyles.socialIcon} />
                </a> */}
                <a href="https://instagram.com/granerosdelsur.ar" target="_blank" className={contactStyles.socialLink}>
                  <Instagram className={contactStyles.socialIcon} />
                </a>
                {/* <a href="#" className={contactStyles.socialLink}>
                  <Twitter className={contactStyles.socialIcon} />
                </a> */}
              </div>
            </div>

            <div className={contactStyles.contactForm}>
              <div className={contactStyles.formRow}>
                <input placeholder="Nombre" className={contactStyles.formInput} />
                <input placeholder="Apellido" className={contactStyles.formInput} />
              </div>
              <input type="email" placeholder="Email" className={contactStyles.formInput} />
              <input placeholder="Teléfono" className={contactStyles.formInput} />
              <textarea placeholder="Mensaje" rows={6} className={contactStyles.formTextarea} />
              <button type="submit" className={contactStyles.formButton}>
                Enviar Mensaje
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={footerStyles.footer}>
        <div className={footerStyles.footerContainer}>
          <div className={footerStyles.footerLogo}>
            <img src="/logo-solo.png" alt="Graneros del Sur Logo" width={100} height={100} />
          </div>

          <p className={footerStyles.footerCopyright}>© 2025 Graneros del Sur. Todos los derechos reservados.</p>
          <p className={footerStyles.footerSlogan}>
            Productos Argentinos para el mundo, celebrando la diversidad gastronómica de nuestro país.
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      {/* <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.whatsappFloat}
      >
        <MessageCircle className={footerStyles.whatsappFloatIcon} />
      </a> */}
    </div>
  )
}
