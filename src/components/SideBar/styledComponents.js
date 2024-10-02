import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 80vh;
  position: sticky;
  position: -webkit-sticky;
`
export const NavItemsContainer = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
`
export const TextItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.isActive};
  width: 100%;
  cursor: pointer;
`
export const ItemText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  margin-left: 20px;
  width: 150px;
`
export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`
export const BottomText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 140px;
  font-size: 20px;
`
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const IconImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${props => props.color};
`