


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

const useNeomorphism = (props: UseNeomorphismUiProps) => {
    return {
        colorMode: props.colorMode
    }
}


export type useNeomorphismReturn = ReturnType<typeof useNeomorphism>;
export {useNeomorphism}