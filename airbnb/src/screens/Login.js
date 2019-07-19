import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, ScrollView, StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import colors from '../styles/colors';

export default class LogIn extends Component {
  render() {
    return (
      <KeyboardAvoidingView>
        <View>
          <ScrollView>
            <Text>Log In</Text>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}