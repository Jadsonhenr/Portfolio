import './habilidades.css'
const Habilidades = () => {
    return (
        <section className='Conteudo__habilidades' id='habilidades'>
            <h2>Tecnologias</h2>
            <div className='tech'>            
                <div>
                    <h3>Frontend</h3>
                    <p>Html: Avançado | Css: Avançado</p>
                    <p>JavaScript: Interediario</p>
                    <p>React: Basico</p>
                </div>
                <div>
                    <h3>Backend</h3>
                    <p>Estudando o framework Express.js<br/> consumindo APIs MongoDb e Jwt </p>
                </div>
                <div>
                    <h3>Informaçãoes</h3>
                    <p>Nome: Jadson Henrique Silva Almeida | Idade: 20 anos</p>
                    <p>Gmail: jadsonhenriquex91@gmail.com  | Numero de Telefone: (94)984457723</p>
                </div>
            </div>
        </section>
    );
};
export default Habilidades;