import CartContext from '../context/CartContext'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottomContainer,
  ProfileImage,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './StyledComponents'

const VideoCard = props => {
  const {details} = props
  const {channel, id, title, thumbnailUrl, PublishedAt, ViewCount} = details
  const {name, profileImageUrl} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f5f5f5'

        const textColor = isDarkTheme ? '#f5f5f5' : '#181818'
        return (
          <NavLink to={`videos/${id}`}>
            <VideoCardContainer bgColor={bgColor}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideoCardBottomContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailsContainer>
                  <VideoDetailsText color={textColor}>{title}</VideoDetailsText>
                  <VideoDetailsText color={textColor}>{name}</VideoDetailsText>
                  <VideoDetailsText color={textColor}>
                    {ViewCount} views
                  </VideoDetailsText>
                  <VideoDetailsText>{PublishedAt}</VideoDetailsText>
                </VideoDetailsContainer>
              </VideoCardBottomContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}
export default VideoCard
