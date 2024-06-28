import React from 'react';
import './contato.css';
import { sendEmail } from './contato';

const Contato = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        if (name && email && message) {
            const subject = `${name} - This is the subject`;
            const body = `gmail: ${email} \n\n ${message}`;

            sendEmail('jadsonhenriquex91@gmail.com', 'jadsonhenriquex91@gmail.com', subject, body).then(
                () => {
                    alert('Mensagem enviada!');
                    window.location.reload();
                },
                (error) => {
                    alert('Erro ao enviar mensagem: ' + error);
                }
            );

            e.target.reset();
        } else {
            alert('Preencha os campos!');
        }
    };

    return (
        <section className='Conteudo__contato' id='contato'>
            <h2>Contato</h2>
            <div className='conteudo__contato'>
                <form id='form' onSubmit={handleSubmit}>
                    <h3>Preencha o formulário para entrar em contato</h3>
                    <input type="text" id="name" name="name" placeholder="Nome" required />
                    <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                    <textarea cols="30" rows="10" id="message" name="message" placeholder="Sua mensagem" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Contato;
