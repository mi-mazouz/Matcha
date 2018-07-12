import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBar = styled.nav`
  background-color: transparent !important;
`

const BurgerWrapper = styled.div`
  &:hover {
    background-color: transparent !important;
  }
  width: 5.25rem !important;
`

const Burger = styled.span`
  color: #ffffff;
  height: 3px !important;
  width: 30px !important;
  ${props => !props.isActive && `margin-top: ${props.marginTop}px`};
`

const Menu = styled.div`
  @media screen and (max-width: 1087px) {
    background-color: transparent !important;
    box-shadow: none !important;
  }
  padding: 0px !important;
  position: relative;

`

const MenuEnd = styled.div`
  margin-right: 10px;
  position: absolute;
  right: 0;
`

const MenuLink = styled(Link)`
  &:hover {
    text-decoration: underline;
    background-color: transparent !important;
    color: #ffffff !important;
  }
  text-align: right;
`

const MenuTitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #ffffff;
  ${props => props.marginToAlign && `margin-right: ${props.marginToAlign}px;`}
`

class LogoutNavBar extends Component {
  state = {
    isActive: false
  }

  handleBurgerClick = () => this.setState({isActive: !this.state.isActive})

  render() {
    return (
      <NavBar className="navbar">
        <div className="navbar-brand">
          <BurgerWrapper onClick={this.handleBurgerClick} className={`navbar-burger ${this.state.isActive && 'is-active'}`}>
            {
              Array(3).fill(null).map((_, index) => (
                <Burger key={index} isActive={this.state.isActive} marginTop={index * 4} />
              ))
            }
          </BurgerWrapper>
        </div>
        <Menu className={`navbar-menu ${this.state.isActive && 'is-active'}`}>
          <MenuEnd className="navbar-end">
            <MenuLink className="navbar-item" to="/sign-in">
              <MenuTitle marginToAlign={10}>Sign In</MenuTitle>
            </MenuLink>
            <MenuLink className="navbar-item" to="/sign-up">
              <MenuTitle>Sign Up</MenuTitle>
            </MenuLink>
          </MenuEnd>
        </Menu>
      </NavBar>
    )
  }
}
  
export default LogoutNavBar