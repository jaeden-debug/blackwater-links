import Image from "next/image";
export default function HomePage() {
  return (
    <main className="page">
      <div className="noise" />
      <div className="glow glow1" />
      <div className="glow glow2" />

      <section className="wrap">
        <Image
  className="logo"
  src="https://blackwateraquatics.ca/cdn/shop/files/9c0b6d45c3e27bd48858033d0395a3f5fe35d04b14f6d7c63e520e5f50614fd4.png?height=124&v=1764785598"
  alt="Blackwater Aquatics logo"
  width={124}
  height={124}
  priority
/>

        <h1>WELCOME TO BLACKWATER AQUATICS</h1>

        <p className="subtext">
          Thanks for scanning. Looking for live scuds fast? Use the quick order
          button below, or explore the site, lab notes, contact page, and
          TikTok.
        </p>

        <a
          className="quickCta"
          href="https://blackwateraquatics.ca/products/scud-culture?variant=50685840523549"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Shop scud culture"
        >
          SHOP SCUD CULTURE <span className="arrow">→</span>
        </a>

        <nav className="links" aria-label="Quick links">
          <a
            className="link"
            href="https://blackwateraquatics.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="title">
              HOMEPAGE <span className="arrow">→</span>
            </span>
            <span className="desc">
              Explore the main Blackwater Aquatics site
            </span>
          </a>

          <a
            className="link"
            href="https://blackwateraquatics.ca/pages/lab-notes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="title">
              LAB NOTES <span className="arrow">→</span>
            </span>
            <span className="desc">
              Read guides, updates, and useful tutorials
            </span>
          </a>

          <a
            className="link"
            href="https://blackwateraquatics.ca/pages/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="title">
              CONTACT <span className="arrow">→</span>
            </span>
            <span className="desc">
              Questions, orders, and general inquiries
            </span>
          </a>

          <a
            className="link"
            href="https://www.tiktok.com/@blackwater.aquatics.mtl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="title">
              TIKTOK <span className="arrow">→</span>
            </span>
            <span className="desc">@blackwater.aquatics.mtl</span>
          </a>
        </nav>

        <footer className="footer">blackwateraquatics.ca</footer>
      </section>
    </main>
  );
}