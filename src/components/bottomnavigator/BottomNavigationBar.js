/**
 * Bottom Navigation Bar
 *
 * @format
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

//BOTTOM NAVIGATION TABS ICONS
import homeIcon from '../../../src/assets/images/home.png';
import accountSummary from '../../../src/assets/images/accountSummary.png';
import offers from '../../../src/assets/images/offers.png';
import help from '../../../src/assets/images/help.png';
import airportServices from '../../../src/assets/images/airportServices.png';

class BottomNavigationBar extends PureComponent {

  render() {
    return (
      <View style={{
        height: 65,
        width: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flexDirection: 'row',
      }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Dashboard')}
          activeOpacity={0.5}
          style={{
            flex: 1,
            backgroundColor: '#0C58A3',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 30,
          }}>
          <Image
            source={homeIcon}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ color: '#FFFFFF', fontWeight: '100', fontSize: 11, marginTop: 4 }}>Home </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AccountSummaryScreen')}
          activeOpacity={0.5}
          style={{
            flex: 1,
            backgroundColor: '#135CA4',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 4,
          }}>
          <Image
            source={accountSummary}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ color: '#FFFFFF', fontWeight: '100', fontSize: 11, marginTop: 4 }}>Account </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('OffersScreen')}
          activeOpacity={0.5}
          style={{
            flex: 1,
            backgroundColor: '#0C58A3',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={offers}
            style={{
              width: 20,
              height: 20
            }}
          />
          <Text style={{ color: '#FFFFFF', fontWeight: '100', fontSize: 11, marginTop: 4 }}>Offers </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HelpScreen')}
          activeOpacity={0.5}
          style={{
            flex: 1,
            backgroundColor: '#135CA4',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={help}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ color: '#FFFFFF', fontWeight: '100', fontSize: 11, marginTop: 4 }}>Help </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AirportLoungeServicesScreen')}
          activeOpacity={0.5}
          style={{
            flex: 1,
            backgroundColor: '#0C58A3',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 4,
            borderTopRightRadius: 30,
          }}>
          <Image
            source={airportServices}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ color: '#FFFFFF', fontWeight: '100', fontSize: 11, marginTop: 4 }}>Airport </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default BottomNavigationBar;
