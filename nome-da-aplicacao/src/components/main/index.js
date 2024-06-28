import React from 'react';
import './main.css'
import Projetos from './Projetos';
import Educacao from './Educacao';
import Contato from './Contato';
import Habilidades from './Habilidades';
const Main = () => {
    return (
        <main>
            <section className='main' id='home'>
                <div className='conteudo-sobre-mim'>
                    <h1 className='text'>Meu nome é Jadson<br />sou densenvolvedor <span></span></h1>
                    <p>Olá! Sou um entusiasta da tecnologia e um eterno aprendiz, sempre em busca de novos conhecimentos. Desde cedo, me apaixonei por jogos e essa paixão me levou a explorar o fascinante mundo da programação. Além de passar horas mergulhado em códigos e projetos, também adoro praticar esportes, o que me ajuda a manter a mente afiada e o corpo em movimento. Estou no início da minha jornada na programação, focado em HTML, CSS e JavaScript, com conhecimentos básicos em React e atualmente aprendendo Next.js. Estou animado para continuar crescendo e desenvolver soluções inovadoras e impactantes.</p>
                    <section className='redeSocial1'>
                        <a href='#e'><img className='insta1' src='./imagens/instagram.png' alt='Instagram'></img></a>
                        <a href='#e'><img className='link1' src='./imagens/linkedin.png' alt='Linkedin'></img></a>
                        <a href='#e'><img className='git1' src='./imagens/github.png' alt='GitHub'></img></a>
                        <a href='#e'><img className='gmail1' src='./imagens/gmail.png' alt='E-gmail'></img></a>
                    </section>
                    <div className='button__download'>
                        <a href='./imagens/jadson.pdf' download><button>CURRÍCULO</button></a>
                    </div>
                </div>
                <div className='conteudo-sobre'>
                    <img src='./imagens/jadson1 (1).png'
                        alt='foto de jadson'>
                    </img>
                </div>
                
            </section>
            <Habilidades/>
            <Projetos/>
            <Educacao/>
            <Contato/>
        </main>
    );
}
export default Main;