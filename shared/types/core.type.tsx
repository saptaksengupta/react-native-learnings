import React from 'react';

export type RootStackParamList = {
    Home: undefined;
};

export interface DefaultPropTypes {
    children?: HTMLElement | string;
    style?: object;
    mode?: 'light' | 'dark';
}