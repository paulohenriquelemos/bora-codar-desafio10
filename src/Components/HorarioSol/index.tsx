interface HorarioSolProps {
  percentage: number
}

export function HorarioSol({ percentage }: HorarioSolProps) {
  const sqrBox = 36
  const radius = sqrBox / 2
  const diameter = radius * 2
  const xPos = sqrBox / 2
  const yPos = (sqrBox - diameter) / 2

  const catetoAdjacente = 2 * (50 - percentage)

  const anguloRadiano = Math.acos(catetoAdjacente / 100)

  const anguloGraus = anguloRadiano * (180 / Math.PI)

  return (
    <svg viewBox={`0 0 ${sqrBox} ${sqrBox / 2}`} className="overflow-visible">
      <linearGradient
        id="donutGradient"
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(80)"
      >
        <stop offset="0%" stopColor="rgba(251, 219, 96, 0.2)"></stop>
        <stop offset="101%" stopColor="rgba(251, 219, 96, 0)"></stop>
      </linearGradient>
      <mask id="myMask">
        <rect
          x="0"
          y="0"
          width={(sqrBox * percentage) / 100}
          height={sqrBox / 2}
          fill="white"
          className="animate-sunGraphic"
        />
      </mask>
      <path
        d={`M${yPos} ${xPos} a${radius} ${radius} 0 0 1 ${diameter} 0`}
        fill="url(#donutGradient)"
        mask="url(#myMask)"
      />
      <path
        d={`M${yPos} ${xPos} a${radius} ${radius} 0 0 1 ${diameter} 0`}
        stroke="#F6C833"
        strokeWidth="1"
        fill="none"
        strokeDasharray=".2 2"
        strokeDashoffset="21.3"
      />
      <path
        d={`M 0 18 L 36 18`}
        stroke="#f6c83366"
        strokeWidth=".1"
        fill="none"
      />
      <path
        d={`M 0 18 L 1 18`}
        stroke="#F6C833"
        strokeWidth="1"
        fill="none"
        strokeDasharray=".2 2"
      />
      <path
        d={`M 36 18 L 35 18`}
        stroke="#F6C833"
        strokeWidth="1.4"
        fill="none"
        strokeDasharray=".2 2"
      />

      <circle
        cx={yPos}
        cy={xPos}
        r="1"
        transform={`rotate(${anguloGraus})`}
        fill="#F6C833"
        className="animate-sunTranslate origin-sun"
      ></circle>
    </svg>
  )
}
