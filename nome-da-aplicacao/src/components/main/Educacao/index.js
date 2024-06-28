import './educacao.css'
const Educacao = ()=>{
    return(
        <section className='Conteudo__educacao' id='educacao'>
            <h2>Formação academica</h2>
            <div className='linha__do__tempo__listas'>
                <div className='linha__do__tempo__lista'>
                    <div className="linha__do__tempo__">
                        <div className='linha__do__tempo__data'>2024</div>
                        <div className='linha__do__tempo__conteudo'>
                            <h3>Alura</h3>
                            <h4>Explore React com JavaScript</h4>
                            <p>Aprenda a criar interfaces do usuário com React, um dos frameworks JavaScript mais utilizados, e desenvolva uma aplicação</p>
                            <p>68h</p>
                        </div>
                    </div>
                </div>
                <div className='linha__do__tempo__lista'>
                    <div className="linha__do__tempo__">
                        <div className='linha__do__tempo__data'>2022-Atualmente</div>
                        <div className='linha__do__tempo__conteudo'>
                            <h3>Ensino Superior</h3>
                            <h4>Universidade Federal de Rio Grande</h4>
                            <p>Formação em Exatas e Computação, domínio de raciocínio abstrato e senso crítico para adaptação às novas tecnologias, capacidade de solucionar problemas, espírito empreendedor e métodos atualizados de gerência.</p>
                        </div>
                    </div>
                </div>
                <div className='linha__do__tempo__lista'>
                    <div className="linha__do__tempo__">
                        <div className='linha__do__tempo__data'>2019-2022</div>
                        <div className='linha__do__tempo__conteudo'>
                            <h3>Ensino medio</h3>
                            <h4>Janelas para o mundo</h4>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default Educacao;