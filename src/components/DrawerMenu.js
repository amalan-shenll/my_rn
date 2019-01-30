import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet } from 'react-native';

class DrawerMenu extends Component {

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.closeDrawer()}>DrawerMenu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

DrawerMenu.propTypes = {
  navigation: PropTypes.object
};

export default DrawerMenu;