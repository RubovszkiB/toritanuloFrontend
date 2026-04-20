import { Link } from 'react-router-dom'

export default function HubCard({ to, kicker, title, description, meta, tone = 'primary' }) {
  return (
    <Link to={to} className={`hub-card is-${tone}`}>
      <span>{kicker}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {meta && <small>{meta}</small>}
    </Link>
  )
}
