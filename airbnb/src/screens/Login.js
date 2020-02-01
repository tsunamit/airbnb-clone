import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, ScrollView, StyleSheet, KeyboardAvoidingView,
} from 'react-native';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';

export default class LogIn extends Component {
  handleNextButton() {
    alert('next button pressed');
  }

  handleCloseNotification() {
    alert('Closing Notification');
  }

  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.wrapper}
        behavior='padding'
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log In</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              customStyle={{marginBottom: 30}}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType={'secure'}
              customStyle={{marginBottom: 30}} 
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton
              handleNextButton={this.handleNextButton}
            />
          </View>
          <View>
            <Notification
              showNotification={true}
              handleCloseNotification={this.handleCloseNotification}
              type='Error'
              firstLine="Those credentials don't look right."
              secondLine="Please try again"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.green01,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 10,
  },
})