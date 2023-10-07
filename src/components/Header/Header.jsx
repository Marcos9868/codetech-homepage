import React from 'react'
import { Container, ContainerLogo, Logo, Menu, MenuOptions } from './Style'
import LogoCodetech from '../../assets/Logo-Codetech.jpeg'

function Header() {
  return (
    <Container>
      <ContainerLogo>
        <Logo src={LogoCodetech} alt="" />
      </ContainerLogo>
      <section>
        <Menu>
          <MenuOptions>
            <a href="">
              Quem Somos
            </a>
          </MenuOptions>
          <MenuOptions>
            <a href="">
              Produtos
            </a>
          </MenuOptions>
          <MenuOptions>
            <a href="">
              Contato
            </a>
          </MenuOptions>
        </Menu>
      </section>
    </Container>
  )
}

export default Header