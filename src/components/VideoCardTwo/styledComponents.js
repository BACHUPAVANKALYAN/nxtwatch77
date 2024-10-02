import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: row;
  width: 100%;
  list-style-type: none;
  margin: 25px;
  cursor: pointer;
  border-bottom: 1px solid #000000;
  padding-bottom: 10px;
`
export const ThumbnailImage = styled.img`
  width: 50%;
  height: 250px;
  object-fit: scale-down;
`

export const VideoCardBottomContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 40px;
`
export const VideoDetailsText = styled.p`
  color: ${props => props.textColor};
  font-family: 'Roboto';
  font-size: ${props => props.size}px;
  font-weight: bold;
`
export const VideoDetailsContainer = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
`
export const NavLink = styled(Link)`
  color: ${props => props.textColor};
  text-decoration: none;
  margin-bottom: 10px;
`
