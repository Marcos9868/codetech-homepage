import React from 'react'
import { Container, ContainerLogo, Logo, Menu } from './Style'
import LogoCodetech from '../../assets/Logo-Codetech.jpeg'

function Header() {
  return (
    <Container>
      <ContainerLogo>
        <Logo src={LogoCodetech} alt="" />
      </ContainerLogo>
      <section>
        <Menu>
          <li>Quem Somos</li>
          <li>Produtos</li>
          <li>Contato</li>
        </Menu>
      </section>
    </Container>
  )
}

export default Header