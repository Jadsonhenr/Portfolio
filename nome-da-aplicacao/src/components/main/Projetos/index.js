import './projetos.css'
const Projetos = () => {
    return (
        <section className="Conteudo__Projetos" id='projetos'>
            <h2>Projetos</h2>

            <div className='project__box'>
                <div className='project-card'>
                    <img src='./imagens/projeto1.png' alt='Projetos'></img>
                    <h3>Clone da Netflix</h3>
                    <p>Usando Js, Css e html</p>
                    <div className='btn'>
                    <a href='#e'><img src='./imagens/github.png' alt='GitHub'></img></a>
                    <a href="./">Previu</a>
                    </div>
                </div>
                <div className='project-card'>
                    <img src='./imagens/unnamed.jpg' alt='Projetos'></img>
                    <h3>App de Chat</h3>
                    <p>Aprendendo</p>
                    <div className='btn' id='indisponivel'>
                    <a href='#e'><img src='./imagens/github.png' alt='GitHub'></img></a>
                    <a href="./">Previu</a></div>
                </div>
                <div className='project-card' >
                    <img src='./imagens/unnamed.jpg' alt='Projetos'></img>
                    <h3>Dashboard admin</h3>
                    <p>Um projeto FullStack, html, js, css<br/> espress, MongoDB, Mongoose, JWT </p>
                    <div className='btn' id='indisponivel'>
                    <a href='#e'><img src='./imagens/github.png' alt='GitHub'></img></a>
                    <a href="./">Previu</a></div>
                </div>
                <div className='project-card'>
                    <img src='./imagens/unnamed.jpg' alt='Projetos'></img>
                    <h3>Clone da Spotify</h3>
                    <p>Vou usa react native</p>
                    <div className='btn' id='indisponivel'>
                    <a href='#e'><img src='./imagens/github.png' alt='GitHub'></img></a>
                    <a href="./">Previu</a>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Projetos;