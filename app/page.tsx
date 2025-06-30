"use client"

import { useState, useEffect } from "react"
import { Instagram, MessageCircle } from "lucide-react"
import navStyles from "../styles/navigation.module.css"
import heroStyles from "../styles/hero.module.css"
import productStyles from "../styles/products.module.css"
import aboutStyles from "../styles/about.module.css"
import contactStyles from "../styles/contact.module.css"
import footerStyles from "../styles/footer.module.css"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

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
          
          <div className={navStyles.navMenu}>
            <button
              onClick={() => scrollToSection("inicio")}
              className={`${navStyles.navButton}`}
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

          {/* <div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className={navStyles.whatsappButton}
            >
              <MessageCircle className={navStyles.whatsappIcon} />
            </a>
          </div> */}
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
                {/* <div className={heroStyles.heroLogo}>
                  <svg viewBox="0 0 200 200" className={heroStyles.heroLogoIcon}>
                    <circle cx="60" cy="50" r="16" />
                    <path d="M30 90 Q60 70, 90 90 Q120 110, 150 90 Q170 80, 180 100 L180 140 Q170 150, 150 140 Q120 130, 90 140 Q60 150, 30 140 Z" />
                  </svg>
                </div>

                <div className={heroStyles.heroLogoText}>
                  <div className={heroStyles.heroLogoTitle}>GRANEROS</div>
                  <div className={heroStyles.heroLogoSubtitle}>DEL SUR</div>
                </div> */}

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
                    {/* <svg viewBox="0 0 400 600" className={productStyles.mapSvg} fill="none">
                      <rect width="400" height="600" fill="#E8F4FD" />
                      <path
                        d="M200 50 C220 55, 250 70, 280 100 L320 140 C340 180, 350 220, 340 260 L330 300 C320 340, 310 380, 290 420 L270 460 C250 490, 230 510, 200 530 C170 510, 150 490, 130 460 L110 420 C90 380, 80 340, 70 300 L60 260 C50 220, 60 180, 80 140 L120 100 C150 70, 180 55, 200 50 Z"
                        fill="#A8E6A3"
                        stroke="#4A5568"
                        strokeWidth="2"
                      />
                      <path d="M150 150 L250 150 L250 200 L150 200 Z" fill="#90CDF4" opacity="0.7" />
                      <path d="M180 220 L280 220 L280 280 L180 280 Z" fill="#FBD38D" opacity="0.7" />
                      <path d="M160 300 L260 300 L260 360 L160 360 Z" fill="#F687B3" opacity="0.7" />
                      <circle cx="200" cy="250" r="8" fill="#E53E3E" />
                      <path
                        d="M200 235 C205 235, 210 240, 210 245 C210 250, 200 265, 200 265 C200 265, 190 250, 190 245 C190 240, 195 235, 200 235 Z"
                        fill="#E53E3E"
                      />
                    </svg> */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11600870.918617535!2d-76.647253748633!3d-37.174401115499556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9426fc3d0e091fbb%3A0xe6f49b54e8428208!2sVilla%20Maz%C3%A1n%2C%20La%20Rioja!5e0!3m2!1ses!2sar!4v1751304322477!5m2!1ses!2sar" width="600" height="450"  loading="lazy" ></iframe>

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
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
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
                <div className={contactStyles.contactDetail}>+54 11 1234-5678</div>
                <div className={contactStyles.contactDetail}>info@granerosdelsur.com.ar</div>
              </div>

              <h4 className={contactStyles.socialTitle}>Síguenos en Redes Sociales</h4>
              <div className={contactStyles.socialLinks}>
                {/* <a href="#" className={contactStyles.socialLink}>
                  <Facebook className={contactStyles.socialIcon} />
                </a> */}
                <a href="#" className={contactStyles.socialLink}>
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
