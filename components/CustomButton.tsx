import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle } from "react-native"
import { styles } from '../services/core.service';

export interface ICustomButton {
    onPress: (e: GestureResponderEvent) => void;
    title: string;
    style?: StyleProp<ViewStyle>;
}

export default function CustomButton(props: ICustomButton) {

    const style = { ...styles.button, ...props.style as {} };

    return <TouchableOpacity
        style={style}
        onPress={props.onPress}
    >
        <Text>{props.title}</Text>
    </TouchableOpacity>;


}