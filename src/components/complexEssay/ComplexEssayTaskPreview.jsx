export default function ComplexEssayTaskPreview({ preview }) {
  if (!preview) {
    return null
  }

  return (
    <div className="essay-task-preview complex-task-preview">
      <div className="essay-task-preview-header">
        <span>Eredeti komplex feladat</span>
        <a href={preview.url} target="_blank" rel="noreferrer" className="essay-task-open-link">
          PDF megnyitása
        </a>
      </div>
      <div className="essay-task-image-stack">
        {(preview.previewImages || []).map((imageUrl, index) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt={`Eredeti komplex esszé feladat ${index + 1}. oldal`}
            className="essay-task-image"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}
