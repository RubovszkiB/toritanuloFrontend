export default function HubHero({ eyebrow, title, description, children }) {
  return (
    <section className="hub-hero">
      <div className="container">
        <div className="hub-hero-grid">
          <div>
            <span className="hub-eyebrow">{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  )
}
