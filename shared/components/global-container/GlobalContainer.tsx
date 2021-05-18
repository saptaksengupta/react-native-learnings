import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNeomorphUiContext } from '../../../neomorph-ui';

export const GlobalContainer = (props) => {
    const glStyles = useNeomorphUiContext();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: glStyles.bgColor,
            height: '100%',
            width: '100%'
        }
    })

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}