import React, { PropTypes, } from 'react'
import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native'
import Swiper from 'react-native-swiper'
import PhotoView from 'react-native-photo-view'

const { width, height } = Dimensions.get('window')

const Viewer = ({ index, pressHandle, imgList }) => {

  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.renderContainer}>
        <View style={styles.renderBody}>
          <Text style={styles.renderText}>{index + 1} / {total}</Text>
        </View>
      </View>
    )
  }

  return (
    <Swiper index={index}
            style={styles.wrapper}
            renderPagination={renderPagination}
    >
      {
        imgList.map((item, i) =>
          <View key={i}
                style={styles.slide}>
            <TouchableHighlight onPress={pressHandle}>
              <View>
                <PhotoView source={{ uri: item }}
                           resizeMode='contain'
                           minimumZoomScale={0.5}
                           maximumZoomScale={3}
                           androidScaleType='center'
                           style={styles.photo}
                />
              </View>
            </TouchableHighlight>
          </View>
        )
      }
    </Swiper>
  )
}

// Viewer.propTypes = {
//   index: PropTypes.number.isRequired,
//   pressHandle: PropTypes.func,
//   imgList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
// }

const styles = {
  wrapper: {
    backgroundColor: '#000',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photo: {
    width,
    height,
    flex: 1,
  },
  renderContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 25,
    left: 0,
    right: 0,
  },
  renderBody: {
    borderRadius: 7,
    backgroundColor: 'rgba(255,255,255,.15)',
    padding: 3,
    paddingHorizontal: 7,
  },
  renderText: {
    color: '#fff',
    fontSize: 14,
  }
}

export default Viewer