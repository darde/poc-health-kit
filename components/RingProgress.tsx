import { Text, View } from "react-native"
import Svg, { Circle } from 'react-native-svg';

type RingProgressProps = {
  radius?: number
  strokeWidth?: number
}


const RingProgress = ({ radius = 100, strokeWidth = 36 }: RingProgressProps) => {
  const color = "#EE0F55"
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius
  const commonCircleProperties = {
    r: innerRadius,
    cx: radius,
    cy: radius,
    strokeWidth,
    stroke: color,
  }

  return (
    <View style={{ width: radius * 2, height: radius * 2, alignSelf: 'center' }}>
      <Svg>
        <Circle
          {...commonCircleProperties}
          strokeOpacity={0.2}
        />
        <Circle
          {...commonCircleProperties}
          fill={'transparent'}
          strokeDasharray={[circumference * 0.2, circumference]}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

export default RingProgress