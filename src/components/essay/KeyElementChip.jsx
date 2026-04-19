export default function KeyElementChip({ children, active = false, muted = false }) {
  return (
    <span className={`essay-chip ${active ? 'is-active' : ''} ${muted ? 'is-muted' : ''}`}>
      {children}
    </span>
  )
}
