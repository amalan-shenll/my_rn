import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.props.navigation.navigate('App')}>Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

Login.propTypes = {
  navigation: PropTypes.object
};

export default Login;