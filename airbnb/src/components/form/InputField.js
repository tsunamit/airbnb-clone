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
        const { labelText, labelTextSize } = this.props
        const fontSize = labelTextSize || 14;
        return (
            <View style={styles.wrapper}>
                <Text style={[{fontSize}, styles.label]}>{labelText}</Text>
            </View>
        );
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },

    label: {
        fontWeight: '700',
        marginBottom: 10,
    }
});

