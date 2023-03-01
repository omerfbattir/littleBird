import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="https://github.com/omerfbattir" >
              GitHub
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarText>littleBird</NavbarText>
      </Navbar>
    </div>
  );
}

export default Navi;