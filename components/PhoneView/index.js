import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native'

import Viewer from './Viewer'

export default class extends Component {

  constructor(props) {
    super(props)

    this.state = {
      imgList: [
        'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
        'https://assets-cdn.github.com/images/modules/site/business-hero.jpg',
        'https://placeholdit.imgix.net/~text?txtsize=29&txt=350%C3%971150&w=350&h=1150'
      ],
      showViewer: true,
      showIndex: 0,
    }
    this.viewerPressHandle = this.viewerPressHandle.bind(this)
  }

  // viewerPressHandle = () => {
  //   this.setState({
  //     showViewer: false,
  //   })
  // }
  //
  thumbPressHandle = (i) => {
    this.setState({
      showIndex: i,
      showViewer: true,
    })
  }

  viewerPressHandle() {
    this.setState({
      showViewer: false,
    })
  }

  render() {
    return (
      <View style={{ position: 'relative' }}>
        {
          this.state.showViewer &&
          <Viewer index={this.state.showIndex}
                  pressHandle={this.viewerPressHandle}
                  imgList={this.state.imgList} />
        }
        <View style={styles.thumbWrap}>
          {
            this.state.imgList.map((item, i) =>
              <TouchableOpacity key={i}
                                onPress={(e) => this.thumbPressHandle(i)}
              >
                <Image style={styles.thumb}
                       source={{ uri: item }} />
              </TouchableOpacity>)
          }
        </View>
      </View>
    )
  }
}

const styles = {
  thumbWrap: {
    marginTop: 100,
    borderWidth: 5,
    borderColor: '#000',
    flexDirection: 'row',
  },
  thumb: {
    width: 50,
    height: 50,
  }
}
