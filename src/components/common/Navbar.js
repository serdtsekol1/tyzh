import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" expand="md">
        <div className="container">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Новини</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Статті
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Усі рубрики</DropdownItem>
                  <DropdownItem>Політика</DropdownItem>
                  <DropdownItem>Світ</DropdownItem>
                  <DropdownItem>Культура</DropdownItem>
                  <DropdownItem>Наука</DropdownItem>
                  <DropdownItem>Авто</DropdownItem>
                  <DropdownItem>Економіка</DropdownItem>
                  <DropdownItem>Суспільство</DropdownItem>
                  <DropdownItem>Історія</DropdownItem>
                  <DropdownItem>Подорожі</DropdownItem>
                  <DropdownItem>Війна</DropdownItem>
                  <DropdownItem>Спецтеми</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">Колонки</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Фоторепортаж</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Журнал</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Передплата</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>The Ukrainian Week</NavbarText>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
