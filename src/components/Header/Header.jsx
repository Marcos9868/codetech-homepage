import React from 'react'
import { Container, Menu } from './Style'

function Header() {
  return (
    <Container>
      <section>
        <h1>Logo Codetech</h1>
      </section>
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