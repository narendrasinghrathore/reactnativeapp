import React from 'react';
import { View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../services/core.service';
import CustomButton from '../components/CustomButton';



export default function LoginScreen(props) {
    const [value, onChangeText] = React.useState('Useless Placeholder');
    const onPress = (e: any) => {
        console.log(e);
    }
    return <View >
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
        <CustomButton title={"New Button"} onPress={onPress} />
    </View>

}