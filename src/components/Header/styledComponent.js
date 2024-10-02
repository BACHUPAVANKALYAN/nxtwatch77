import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  scroll-behavior: smooth;
  height: 50px;
  background-color: ${props => props.bgColor};

  @media screen and(max-width:768px) {
    flex-direction: column;
  }
`
export const ProfileImage = styled.img`
  margin-right: 10px;
  margin-left: 10px;
  width: 30px;
  height: 30px;
`
export const ContentContainer = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  width: 15%;
`
export const LogoutButton = styled.button`
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 10px;
  padding: 8px 16px;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`
export const ContentListItem = styled.li`
  display: flex;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: opx none;
  cursor: pointer;
  color: ${props => props.color};
`
export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and(min-width:768px) {
    width: 165px;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`
export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  padding: 20px;
  border-radius: 10px;
`
export const CloseButton = styled.div`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid grey;
  padding: 13px;
  padding-left: 20px;
  padding-right: 20px;
  color: grey;
  outline: none;
  margin: 12px;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: black;
`
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  margin: 10px;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 15px;
`
export const HeaderList = styled.ul`
  list-style-type: none;
  display:flex;
  justify-content:space-between:
`
