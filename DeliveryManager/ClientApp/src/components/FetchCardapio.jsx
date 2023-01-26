import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class FetchCardapio extends Component
{
    displayName = FetchCardapio.name;


    constructor(props){
        super(props);
        this.state = { cardapio: [], loading :true }

        fetch('Cardapios')
            .then(response => response.json())
            .then(data => {
                this.setState({ cardapio: data, loading: false });
            });
        this.handlerDelete = this.handlerDelete.bind(this);
        this.handlerEdit = this.handlerEdit.bind(this);
    }

     handlerDelete(cardapioId) {

        fetch('Cardapios/Delete/' + cardapioId, {
            method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({ cardapio: data, loading: false });
            this.props.history.push("/fetchcardapio");
        })
        
     } 

    handlerEdit(cardapioId)
    {
        this.props.history.push("/Cardapios/Edit/" + cardapioId);   
    }

    renderClientTable(cardapio) {
        return (
             
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preco</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {cardapio.map(cardapio =>
                        <tr>
                            <td>{cardapio.nome}</td>
                            <td>{cardapio.descricao}</td>
                            <td>{cardapio.preco}</td>
                            <td><img src={cardapio.url}  width="200" height="100" /></td>
                            <td>
                                <button className="btn btn-success" onClick={id => this.handlerEdit(cardapio.id_Cardapio)}>Editar</button>&nbsp;                                
                                <button className="btn btn-danger " onClick={id => this.handlerDelete(cardapio.id_Cardapio)}>Deletar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render()
    {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderClientTable(this.state.cardapio);

        return (
            <div>
                <h1>Cardápio</h1> 
                <p>
                    <Link to={"/addcardapio"}>
                        <button className="btn btn-primary" >Criar Comida</button>
                    </Link> 
                </p>
                {contents}
            </div>
        );
    }
}