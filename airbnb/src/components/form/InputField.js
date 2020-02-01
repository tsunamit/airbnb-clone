import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class InputField extends Component {
    render() {
        const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle } = this.props
        const fontSize = labelTextSize || 14;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const inputBorderColor = borderBottomColor || 'transparent';

        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{color, fontSize}, styles.label]}>{labelText}</Text>
                <TextInput
                    autoCorrect={false}
                    style={[{color: inputColor, borderBottomColor: inputBorderColor}, styles.inputField]}
                    secureTextEntry={inputType === 'secure' ? true : false }
                />
            </View>
        );
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string,
    customStyle: PropTypes.object,
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },

    label: {
        fontWeight: '700',
        marginBottom: 10,
    },
    
    inputField: {
        borderBottomWidth: 1, // creates the non boxed, "sign here" line effect
        paddingTop: 5,
    }
});

