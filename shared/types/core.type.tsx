import React from 'react';

export type RootStackParamList = {
    CardCategories: undefined;
    Players: undefined;
};

export interface DefaultPropTypes {
    children?: HTMLElement | string;
    style?: object;
    mode?: 'light' | 'dark';
}