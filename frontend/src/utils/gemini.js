export async function analyzeStrokeWithGemini(videoElement, duration) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 640
  canvas.height = 360

  const sampleCount = 8
  const interval = Math.min(duration, 60) / sampleCount
  const frames = []

  for (let i = 0; i < sampleCount; i++) {
    videoElement.currentTime = i * interval + 0.5
    await new Promise((r) => {
      videoElement.onseeked = r
    })

    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height)
    const base64 = canvas.toDataURL('image/jpeg', 0.6).split(',')[1]
    frames.push(base64)
  }

  const res = await fetch('/api/analyze-stroke', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ frames }),
  })

  if (!res.ok) throw new Error('Gemini analysis failed')
  return await res.json()
}
