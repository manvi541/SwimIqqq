const STROKE_TIPS = {
  Freestyle: {
    symmetry: {
      low: 'In freestyle, keep both arms pulling with equal reach. Your weaker arm is shortening the stroke.',
      high: 'Great freestyle symmetry — both arms are pulling evenly.',
    },
    extension: {
      low: 'Reach further forward on hand entry before starting the pull. Full extension = more distance per stroke.',
    },
    consistency: {
      low: 'Your stroke timing is inconsistent. Try to maintain a steady rhythm — count strokes per length.',
    },
    head: 'Keep your head neutral — look at the pool bottom, not forward.',
    rate: {
      slow: 'Your stroke rate is low for freestyle. Try to increase tempo while maintaining form.',
      fast: 'You\'re stroking fast — focus on lengthening each stroke for better efficiency.',
    },
  },
  Backstroke: {
    symmetry: {
      low: 'In backstroke, both arms should rotate equally. One arm is pulling deeper than the other.',
      high: 'Excellent backstroke symmetry — both arms are balanced.',
    },
    extension: {
      low: 'Reach fully behind your head on entry. Your pinky should enter the water first.',
    },
    consistency: {
      low: 'Try to keep a consistent kick rhythm — it drives your stroke timing.',
    },
    head: 'Keep your head still and eyes looking up. Don\'t tuck your chin.',
    rate: {
      slow: 'Pick up the pace slightly — backstroke benefits from a consistent turnover.',
      fast: 'Slow down and focus on catching more water with each pull.',
    },
  },
  Breaststroke: {
    symmetry: {
      low: 'In breaststroke, both arms must move together. One side is lagging behind.',
      high: 'Perfect breaststroke symmetry — both arms are synchronized.',
    },
    extension: {
      low: 'Extend your arms fully forward during the glide phase. Don\'t rush the recovery.',
    },
    consistency: {
      low: 'Maintain the pull-breath-kick-glide rhythm. Rushing breaks the timing.',
    },
    head: 'Lift your head only during the breath phase, then tuck it back down for the glide.',
    rate: {
      slow: 'You can afford a slightly faster pull, but never sacrifice the glide phase.',
      fast: 'You\'re rushing the stroke. Breaststroke is about the glide — hold it longer.',
    },
  },
  Butterfly: {
    symmetry: {
      low: 'In butterfly, both arms must recover over the water simultaneously. One arm is trailing.',
      high: 'Great butterfly symmetry — both arms are in sync.',
    },
    extension: {
      low: 'Push both hands past your hips on the pull, then swing them forward together.',
    },
    consistency: {
      low: 'Focus on the two-kick rhythm: one kick on entry, one on exit. It drives the stroke.',
    },
    head: 'Your head leads the body undulation. Look forward on breath, then tuck on entry.',
    rate: {
      slow: 'Butterfly requires a strong rhythm. Use the dolphin kick to drive the tempo.',
      fast: 'Control your speed — butterfly is about power per stroke, not turnover.',
    },
  },
  'Detecting...': {},
}

export function generateTips(snapshot) {
  if (!snapshot) return []
  const tips = []

  const stroke = snapshot.strokeType
  const tipsForStroke = STROKE_TIPS[stroke] || STROKE_TIPS['Detecting...']

  if (snapshot.strokeCount < 2) {
    tips.push({
      type: 'info',
      text: stroke === 'Detecting...'
        ? 'Keep moving — detecting stroke pattern...'
        : `Detected: ${stroke}. Keep swimming to analyze form.`,
    })
    return tips
  }

  // Symmetry
  if (snapshot.symmetry < 60 && tipsForStroke.symmetry) {
    tips.push({
      type: 'warning',
      text: tipsForStroke.symmetry.low,
    })
  } else if (snapshot.symmetry >= 85 && tipsForStroke.symmetry) {
    tips.push({
      type: 'success',
      text: tipsForStroke.symmetry.high,
    })
  }

  // Extension
  if (snapshot.avgLeftExtension < 55 || snapshot.avgRightExtension < 55) {
    if (tipsForStroke.extension) {
      tips.push({
        type: 'info',
        text: tipsForStroke.extension.low,
      })
    }
  }

  // Consistency
  if (snapshot.consistency < 50 && tipsForStroke.consistency) {
    tips.push({
      type: 'warning',
      text: tipsForStroke.consistency.low,
    })
  }

  // Head alignment
  if (snapshot.headAlignment !== null && snapshot.headAlignment < 60 && tipsForStroke.head) {
    tips.push({
      type: 'info',
      text: tipsForStroke.head,
    })
  }

  // Stroke rate
  if (snapshot.strokeRate > 0 && tipsForStroke.rate) {
    if (snapshot.strokeRate < 25) {
      tips.push({
        type: 'info',
        text: tipsForStroke.rate.slow,
      })
    } else if (snapshot.strokeRate > 65) {
      tips.push({
        type: 'info',
        text: tipsForStroke.rate.fast,
      })
    }
  }

  if (tips.length === 0) {
    tips.push({
      type: 'success',
      text: `Solid ${stroke} form! Focus on maintaining consistency.`,
    })
  }

  return tips.slice(0, 3)
}
