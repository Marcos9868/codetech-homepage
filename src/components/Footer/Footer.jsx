import React from 'react'
import { AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { Container, ContainerSocialMedia, SocialMedia } from './Style'

function Footer() {
  return (
    <Container>
      <ContainerSocialMedia>
        <SocialMedia>
          <a href='https://www.linkedin.com/company/codetech-solucoes-em-software/'>
            <AiFillLinkedin />
            Linkedin
          </a>
          <a href=''>
            <AiFillFacebook />
            Facebook
          </a>
        </SocialMedia>
      </ContainerSocialMedia>
      <section>
        <p>&copy;2023 Todos os direitos reservados</p>
      </section>
    </Container>
  )
}

export default Footer