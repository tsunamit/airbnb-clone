import React, { Component } from 'react';
import { 
  StyleSheet, Text, View, Image, TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import colors from '../styles/colors'
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoggedOut extends Component {
  onFacebookPress() {
    alert('Facebook button pressed');
  }

  onCreateAccountPress() {
    alert('Create account pressed');
  }

  onPressMoreOptions() {
    alert('More options pressed');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.welcomeWrapper}>
          <Image
            source={require('../img/airbnb-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Welcome to Airbnb</Text>
          <RoundedButton 
            text="Continue with Facebook" 
            textColor={colors.green01}
            background={colors.white}
            icon={
              <Icon 
                name="facebook" 
                size={20} 
                style={styles.facebookButtonIcon}
              />
            }
            handleOnPress={() => this.onFacebookPress()}
          />
          <RoundedButton 
            text="Create Account" 
            textColor={colors.white}
            handleOnPress={() => this.onCreateAccountPress()}
          />
          <TouchableOpacity 
            style={styles.moreOptionsButton}
            onPress={() => {this.onPressMoreOptions()}}>
            <Text style={styles.moreOptionsText}>More Options</Text>
          </TouchableOpacity>
          <View style={styles.termsAndConditions}>
            {/* Divided text among a few lines so that they're individual parts and they can wrap */}
            <Text style={styles.termsText}>By tapping Continue, Create Account, </Text>
            <Text style={styles.termsText}>or More, I agree to </Text>
            <Text style={styles.termsText}>Airbnb's </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: colors.green01,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  facebookButtonIcon: {
    color: colors.green01,
    position: 'relative',
    left: 20, // 20 pixels from the left of the parent 
    zIndex: 8, // TODO experiment to find out what this does
  },
  moreOptionsButton: {
    marginTop: 15,
  },
  moreOptionsText: {
    color: colors.white,
    fontSize: 16,
  },
  termsAndConditions: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'flex-start',
    flexWrap: 'wrap', // To wrap the text
  },
  termsText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderColor: colors.white,
  },
})
