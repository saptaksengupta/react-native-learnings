import { colors } from "./theme/foundation/colors";
import { mode } from './shared/utils';
/**
 * Global Props for Neomorphism-ui
 */
export interface UseNeomorphismUiProps {
    /**
     * Mode can be `light`, `dark`
     */
    colorMode: 'light' | 'dark';
}

const deafultColorMode = 'light';

/**
 * 
 * @param props 
 * @returns Global base style object  
 */
const useNeomorphism = (props: UseNeomorphismUiProps) => {
    return {
        colorMode: props.colorMode,
        bgColor: mode(colors.light.bg, colors.dark.bg)(props),
        primaryColor: mode(colors.light.primary, colors.dark.primary)(props),
        accentColor: mode(colors.light.accent, colors.dark.accent)(props),
        colors: {
            white: colors.white,
            black: colors.black,
            gray_1: colors.gray_1
        }
    }
}


export type useNeomorphismReturn = ReturnType<typeof useNeomorphism>;
export {useNeomorphism}