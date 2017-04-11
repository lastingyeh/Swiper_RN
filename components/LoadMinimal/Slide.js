import React from 'react'
import {
  View,
  Image,
  Dimensions,
} from 'react-native'
const { width } = Dimensions.get('window')

const Slide = ({ loadHandle, loaded, uri, }) => {
  return (
    <View style={styles.slide}>
      <Image onLoad={loadHandle}
             style={styles.image}
             source={{ uri: uri }} />
      {
        !loaded && <View style={styles.loadingView}>
          <Image style={styles.loadingImage}
                 source={require('./img/loading.gif')} />
        </View>
      }
    </View>
  )
}

Slide.propTypes = {}

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width,
    flex: 1,
    backgroundColor: 'transparent',
  },
  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },
  loadingImage: {
    width: 60,
    height: 60,
  }
}

export default Slide
