import './index.css'

const List = props => {
  const {emojiDetails, onClicked} = props
  const {name, imageUrl} = emojiDetails
  const isTriggered = () => {
    onClicked()
  }
  return (
    <li className="list-item">
      <div className="emoji-card0 ">
        <img
          className="emoji"
          src={imageUrl}
          alt={name}
          onClick={isTriggered}
        />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default List
