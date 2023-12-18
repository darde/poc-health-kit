import { View } from "react-native"
import Svg, { Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated'
import { useEffect } from "react";


const AnimatedCircle = Animated.createAnimatedComponent(Circle)

type RingProgressProps = {
  radius?: number
  strokeWidth?: number
  progress: number
}

const RingProgress = ({ radius = 100, strokeWidth = 36, progress }: RingProgressProps) => {
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
  const fill = useSharedValue(0)
  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * fill.value, circumference],
  }))

  useEffect(() => {
    fill.value = withTiming(progress, { duration: 300 })
  }, [progress])

  return (
    <View style={{ width: radius * 2, height: radius * 2, alignSelf: 'center' }}>
      <Svg>
        <Circle
          {...commonCircleProperties}
          strokeOpacity={0.2}
        />
        <AnimatedCircle
          {...commonCircleProperties}
          animatedProps={animatedProps}
          fill={'transparent'}
          strokeLinecap="round"
          rotation={'-90'}
          originX={radius}
          originY={radius}
        />
      </Svg>
    </View>
  )
}

export default RingProgress