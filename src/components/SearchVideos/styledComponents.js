import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  overflow-y: scroll;
  padding: 30px;
`
export const SearchInput = styled.input`
  width: 250px;
  border: 1px solid #64748b;
  border-radius: 2px;
  margin-left: 60px;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
`
export const VideosContainer = styled.div`
  list-style-type: none;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`
export const ProductsLoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Image = styled.img`
  width: 300px;
  margin: 20px;
`
export const Heading = styled.h1`
  color: black;
  font-size: 30px;
  text-align: center;
`
export const Desc = styled.p`
  color: black;
  font-size: 20px;
  text-align: center;
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  text-decoration: none;
  color: #1e293b;
`
export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
