import React, { Component, } from 'react'
import {
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window')

export default class extends Component {

  render() {
    return (
      <View>
        <StatusBar barStyle='light-content' />
        <Image source={require('./img/bg.jpg')}>
          <Swiper style={styles.wrapper}
                  dot={<View style={styles.dot} />}
                  activeDot={<View style={[styles.dot, { backgroundColor: '#fff' }]} />}
                  paginationStyle={styles.pagination}
                  loop={false}
          >
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./img/1.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./img/2.jpg')} />
            </View>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('./img/3.jpg')} />
            </View>
          </Swiper>
        </Image>
      </View>
    )
  }
}

const styles = {
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 13,
    height: 13,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  pagination: {
    bottom: 70,
  },
  wrapper: {},
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    width,
    height,
    flex: 1,
  }
}

