import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(){
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={()=>this.openMenu()}>DrawerMenu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

Dashboard.propTypes = {
  navigation: PropTypes.object
};

export default Dashboard;