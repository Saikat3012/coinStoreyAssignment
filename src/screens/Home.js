import React, { Component,useState } from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
    
} from 'react-native';

import coins from '../assets/coins'
import NewsPart from '../components/NewsPart'

const { width: SCREEN_WIDTH } = Dimensions.get("screen")
const { height: SCREEN_HEIGHT } = Dimensions.get("screen")


const HEADER_EXPANDED_HEIGHT = SCREEN_HEIGHT * 0.1;
const HEADER_COLLAPSED_HEIGHT = SCREEN_HEIGHT * 0.05;



export default class Home extends Component {
  
  constructor() {
    super();
    this.state = {
      scrollY: new Animated.Value( 0 ),
    }
  }
  render() {
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
      extrapolate: 'clamp'
    });
    const headerTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    });
    const heroTitleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_EXPANDED_HEIGHT-HEADER_COLLAPSED_HEIGHT],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    const headerTitle = 'HOME'

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.Text style={{textAlign: 'center', fontSize: 18, color: 'black', opacity: headerTitleOpacity}}>{headerTitle}</Animated.Text>
          <Animated.Text style={{textAlign: 'center', fontSize: 32, color: 'black', position: 'absolute', bottom: 16, left: 16, opacity: heroTitleOpacity}}>CoinMarketCap</Animated.Text>
        </Animated.View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          onScroll={Animated.event(
            [{ nativeEvent: {
                contentOffset: {
                  y: this.state.scrollY
                }
              }
            }])
          }
          scrollEventThrottle={16}>
          <View style={styles.coinContainer}>
            <ScrollView style ={styles.coinsScroll} horizontal={true}>
              {
                coins.map( ( coin ) => {
                  return (
                    <View key={coin.id} style={styles.coinDetails}>
                      <Image source={{ uri: coin.image }} style={{
                        height: SCREEN_WIDTH * 0.1,
                        width: SCREEN_WIDTH * 0.1,
                        resizeMode: 'contain',
                        marginRight : SCREEN_WIDTH * 0.02
                      }} />
                      <View style={{
                        flexWrap: 'wrap',
                        width: SCREEN_WIDTH * 0.2,
                      }}>
                        <Text>{coin.name}</Text>
                        <Text>{coin.price}</Text>
                        { coin.is_coin_of_the_week ? <Text>Coin of The Week</Text> : null }
                      </View>
                    </View>
                    
                  )
                })
              }
            </ScrollView>
          </View>
          <NewsPart/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  scrollContainer: {
    padding: 16,
    paddingTop: HEADER_EXPANDED_HEIGHT
  },
  header: {
    backgroundColor: 'lightblue',
    position: 'absolute',
    width: SCREEN_WIDTH,
    top: 0,
    left: 0,
      zIndex: 9999,
    justifyContent : 'center'
  },
  title: {
    marginVertical: 16,
    color: "black",
    fontWeight: "bold",
    fontSize: 24
  },
  coinContainer: {
    height: SCREEN_HEIGHT * 0.15,
    marginTop: SCREEN_HEIGHT * 0.02,
    marginBottom :SCREEN_HEIGHT * 0.05
    
  },
  coinsScroll: {
    
  },
  coinDetails: {
    padding: 2,
    marginVertical: 5,
    width: SCREEN_WIDTH * 0.42,
    marginHorizontal: SCREEN_WIDTH * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SCREEN_WIDTH * 0.02,
    elevation: 3,
    flexDirection: 'row',
    // flexWrap :'wrap'
  }
});