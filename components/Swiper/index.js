import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'

const { width, } = Dimensions.get('window')

export default class extends Component {

  render() {
    return (
      <View>
        <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <Swiper style={styles.wrapper} height={240}
                onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                dot={<View style={styles.dot}></View> }
                activeDot={<View style={styles.activeDot} />}
                paginationStyle={styles.paging}
                loop>
          <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/1.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/2.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/3.jpg')} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    margin: 3
  },
  activeDot: {
    backgroundColor: '#000',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  paging: {
    bottom: -23,
    left: null,
    right: 10,
  },
  image: {
    width,
    flex: 1,
  }
}