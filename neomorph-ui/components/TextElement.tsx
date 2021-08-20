import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNeomorphUiContext } from '../context';

interface TextElementProps {
    type: 'primary' | 'accent';

    size?: number;

    weight: string;

    children?: HTMLElement | string;
}

const TextElement = (props: TextElementProps) => {

    const globalStyles = useNeomorphUiContext();

    const getColor = (mode) => {
        if (mode === 'primary') {
            return globalStyles.primaryColor;
        } else if (mode === 'accent') {
            return globalStyles.accentColor;
        } else {
            return globalStyles.primaryColor;
        }
    }

    const styles = StyleSheet.create({
        default: {
            color: getColor(props.type),
            fontSize: props.size ? props.size : 20,
            fontWeight: 'bold'
        }
    });

    

    return <Text style={styles.default}> {props.children} </Text>;
};

export {TextElement};