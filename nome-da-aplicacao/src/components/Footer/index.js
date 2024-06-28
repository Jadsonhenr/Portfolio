import React from 'react';
import './footer.css';

const Footer = () => {
    return (

        <footer className='footer'>
            <section className='redeSocial'>
                <a href='#e'><img className='insta' src='./imagens/instagram.png' alt='Instagram'></img></a>
                <a href='#e'><img className='link' src='./imagens/linkedin.png' alt='Linkedin'></img></a>
                <a href='#e'><img className='git' src='./imagens/github.png' alt='GitHub'></img></a>
                <a href='#e'><img className='gmail' src='./imagens/gmail.png' alt='E-gmail'></img></a>
            </section>
            <sectin className='discricaoFooter'>
                <p>&copy;2024; Desenvolvido por Jadson Henrique &#128513;</p>
            </sectin>
        </footer>
    );
}
export default Footer;