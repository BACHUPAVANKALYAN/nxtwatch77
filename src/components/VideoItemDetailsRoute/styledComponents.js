import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`
export const VideoDetailsSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 30px;
`
export const VideoDetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
`
export const VideoDetailsTitle = styled.p`
  font-family: 'Roboto';
  margin-left: 10px;
  font-weight: bold;
  color: #181818;
`
export const ViewsDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`
export const LikesContainer = styled.div`
  display: flex;
`
export const ViewsText = styled.p`
color=${props => props.color};
font-family: 'Roboto';
margin-left: 10px;
`
export const IconContainer = styled.button`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
  border: 0px none;
  background-color: transparent;
  cursor: pointer;
  color=${props => props.color};
`
export const HorizontalLine = styled.hr`
  color: #181818;
  width: 100%;
  background-color: #181818;
  margin: 15px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
`
export const LogoContainer = styled.div`
  border-radius: 40px;
  background-color: #cbd5e3;
  padding: 10px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100vh;
`
export const Image = styled.img`
  width: 300px;
  margin: 20px;
`
export const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  color: black;
`
export const Desc = styled.p`
  text-align: center;
  color: black;
  font-size: 20px;
`
export const Text = styled.p`
  text-align: center;
  color: black;
  font-size: 20px;
`
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`
export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
