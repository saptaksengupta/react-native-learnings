import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useNeomorphUiContext } from '..';

const Input = () => {
    const globalStyles = useNeomorphUiContext();
    const styles = StyleSheet.create({
        default: {
            width: '90%',
            height: 50,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: globalStyles.colors.gray_1,
            paddingRight: 5,
            paddingLeft: 15
        }
    }); 

    return <TextInput style={styles.default} />;
}

export {
    Input
}