import tetelPdfManifest from '../data/tetelPdfManifest.json'

const manifestBySorszam = new Map(
  (tetelPdfManifest.entries || []).map((item) => [Number(item.sorszam), item]),
)

export function getTetelPdfMeta(tetel) {
  if (!tetel) {
    return null
  }

  return manifestBySorszam.get(Number(tetel.sorszam)) || null
}

export function enrichTetelWithPdf(tetel, progress = null) {
  const pdfMeta = getTetelPdfMeta(tetel)

  return {
    ...tetel,
    pdfMeta,
    hasPdf: Boolean(pdfMeta?.pdfPath),
    progress,
  }
}

export function getProgressForTetel(progressList, tetelId) {
  return (progressList || []).find((item) => Number(item.tetelId) === Number(tetelId)) || null
}

export function formatProgressLabel(progress) {
  if (!progress?.vanMentes) {
    return 'Még nem kezdted'
  }

  if (progress.completed || Number(progress.haladasSzazalek) >= 100) {
    return 'Befejezve'
  }

  return `${Number(progress.haladasSzazalek || 0)}%`
}

export function formatLastOpened(value) {
  if (!value) {
    return ''
  }

  try {
    return new Intl.DateTimeFormat('hu-HU', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(value))
  } catch {
    return ''
  }
}
