import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

const GEMINI_KEY = process.env.GEMINI_API_KEY

app.post('/api/analyze-stroke', async (req, res) => {
  try {
    const { frames } = req.body
    if (!frames || frames.length === 0) {
      return res.status(400).json({ error: 'No frames provided' })
    }

    const parts = []
    for (const frame of frames.slice(0, 8)) {
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: frame,
        },
      })
    }

    parts.push({
      text: 'You are a swimming coach AI. Analyze these sequential frames from a swimming video. Identify the swimming stroke type. Respond with ONLY a JSON object in this exact format: {"stroke": "Freestyle|Backstroke|Breaststroke|Butterfly", "confidence": 0-100, "feedback": "brief coaching tip about their form"}',
    })

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts }] }),
      }
    )

    const data = await response.json()

    if (data.error) {
      console.error('Gemini error:', data.error)
      return res.status(500).json({ error: data.error.message })
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

    const jsonMatch = text.match(/\{[\s\S]*?\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      return res.json(parsed)
    }

    return res.json({
      stroke: 'Detecting...',
      confidence: 0,
      feedback: 'Could not analyze stroke from video.',
    })
  } catch (err) {
    console.error('Server error:', err)
    res.status(500).json({ error: err.message })
  }
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`SwimIQ backend running on port ${PORT}`)
})
