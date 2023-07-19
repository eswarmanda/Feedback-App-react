import {Component} from 'react'

import './index.css'

import List from './listItem'

class Feedback extends Component {
  state = {isClicked: false}

  isEmojiClicked = () => {
    console.log('yes')
    this.setState({isClicked: true})
    setTimeout(() => {
      this.setState({isClicked: false})
    }, 5000)
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-cont">
        <div className="card">
          {isClicked ? (
            <div className="feedback-card">
              <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
              <h1 className="greetings">Thank You</h1>
              <p className="p">
                We will use your feedback to improve our costumer support
                performance!
              </p>
            </div>
          ) : (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emoji-card">
                {emojis.map(eachEmoji => (
                  <List
                    emojiDetails={eachEmoji}
                    key={eachEmoji.id}
                    onClicked={this.isEmojiClicked}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
