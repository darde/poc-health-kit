// the v2 config imports the css driver on web and react-native on native

// for reanimated: @tamagui/config/v2-reanimated

// for react-native only: @tamagui/config/v2-native
import { config } from '@tamagui/config/v2-native'
import { createTamagui, createTokens } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter';
import { themes } from '@tamagui/themes';
import { VariableVal } from '@tamagui/core';

const headingFont = createInterFont();

const bodyFont = createInterFont();

type TokensProps = {
  [key: string]: VariableVal
}


const tamaguiConfig = createTamagui({
  ...config,
  defaultFont: 'body',
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: true,
    fonts: {
      body: bodyFont,
      heading: headingFont,
    },
    themes: {
      dark: {
        background: 'black',
        color: 'white',
      },
      light: {
        background: 'red',
        color: 'black',
      },
    },
    // tokens,
})
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig

declare module 'tamagui' {

  interface TamaguiCustomConfig extends Conf {}

}
export default tamaguiConfig
// depending on if you chose tamagui, @tamagui/core, or @tamagui/web

// be sure the import and declare module lines both use that same name
