import React, { Component } from 'react';
import { cpfMask, telephoneMask } from '../shared/mask';
import '../css/Client.css'

export class Cliente {
    constructor() {
        this.cpf = "";
        this.nome = "";
        this.telefone = "";       
        this.id_Cliente = 0;
        this.logradouro = "";
        this.cep = "";
        this.numero = "";
        this.bairro = "";
        this.cidade = "";
        this.estado = "";
        this.complemento = "";
        this.id_Endereco = 0
    }
}  

export class AddClient extends Component
{
    displayName = AddClient.name;

    constructor(props)
    {
        super(props);     
        this.state = { title: "", loading: true, clientData: new Cliente };

        var clientId = this.props.match.params["clientId"];
        if (clientId) {
            fetch('Clientes/Details/' + clientId)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ title: "Edit", loading: false, clientData: data });
                    fetch('Enderecos/Details/' + clientId)
                        .then((response) => response.json())
                        .then((data) => {
                            this.setState({ title: "Edit", loading: false, clientData: data});

                    })
                })
        } else
        {
            this.state = { title: "Create", loading: false, clientData: new Cliente  };
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }



    handleSave(event) {
 
        event.preventDefault();
        const data = new FormData(event.target);

        var  clientData  = this.state.clientData;


        // PUT request for Edit employee.  
        if (clientData.id_Cliente) {
            data.set("Id_Cliente", clientData.id_Cliente)
            fetch('Clientes/Edit/' + clientData.id_Cliente, {
                method: 'PUT',
                body: data,
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    data.set("Id_Endereco", clientData.id_Endereco)
                    fetch('Enderecos/Edit/' + clientData.id_Cliente, {
                        method: 'PUT',
                        body: data,
                    })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.props.history.push("/fetchclient");
                    })
                })
        }

        // POST request for Add employee.  
        else {
            fetch('Clientes/Create', {
                method: 'POST',
                body: data,
            })
            .then((response) => response.json())
            .then((responseJson) => {
                data.set("Id_Cliente", responseJson.id_cliente)
                fetch('Enderecos/Create', {
                    method: 'POST',
                    body: data,
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchclient");
                })
            })
        }              

    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/fetchclient");   
    }  


    renderCreateForm()
    {
        return (
            <form onSubmit={ this.handleSave}>
                < div className="form-group row" >
                    <div className="col-md-10" >
                        <label className=" control-label text-primary h4" htmlFor="Informacoes Pessoais">Informações Pessoais</label>
                        <input type="hidden" name="ClienteId" />
                    </div>
                    <div class="col-md-5">
                        <label className=" control-label" htmlFor="Nome">Nome Completo</label>
                        <div className="">
                            <input id="teste"
                                className="form-control"
                                type="text"
                                name="Nome"
                                value={this.state.clientData.nome}
                                onChange={(event) => {
                                    this.state.clientData.nome = event.target.value;
                                    this.setState({ clientData: this.state.clientData });
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <label className=" control-label" htmlFor="Cpf">Cpf</label>
                        <div className="">
                            <input className="form-control"
                                type="text"
                                name="Cpf" value={this.state.clientData.cpf}
                                onChange={(event) => {
                                    this.state.clientData.cpf = cpfMask(event.target.value);
                                    this.setState({ clientData: this.state.clientData });
                                }}  
                                required
                            />
                        </div>
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Telefone" >Telefone</label>
                    <div className="col-md-4">
                        <input className="form-control"
                            type="text" name="Telefone"
                            value={this.state.clientData.telefone}
                            onChange={(event) => {
                                this.state.clientData.telefone = telephoneMask(event.target.value);
                                this.setState({ clientData: this.state.clientData });
                            }}
                            required
                        />
                    </div>
                </div>

                < div className="form-group row" >
                    <div className="col-md-12" >
                        <label className=" control-label text-primary h4" htmlFor="Endereco">Endereço</label>
                        <input type="hidden" name="ClienteId" />
                    </div>
                    <div class="col-md-2">
                        <label className=" control-label" htmlFor="Nome">CEP</label>
                        <div className="">
                            <input  className="form-control"
                                type="text"
                                name="Cep"
                                value={this.state.clientData.cep}
                                onChange={(event) => {
                                    this.state.clientData.cep = event.target.value;
                                    this.setState({ clientData: this.state.clientData });
                                }} 
                                required
                            />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <label className=" control-label" htmlFor="Cpf">Logradouro</label>
                        <div className="">
                            <input className="form-control"
                                type="text"
                                name="Logradouro"
                                value={this.state.clientData.logradouro}
                                onChange={(event) => {
                                    this.state.clientData.logradouro = event.target.value;
                                    this.setState({ clientData: this.state.clientData });
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div class="col-md-3    ">
                        <label className=" control-label" htmlFor="Cpf">Número</label>
                        <div className="">
                            <input className="form-control"
                                type="text"
                                name="Numero"
                                value={this.state.clientData.numero}
                                onChange={(event) => {
                                    this.state.clientData.numero = event.target.value;
                                    this.setState({ clientData: this.state.clientData });
                                }}
                                required
                            />
                        </div>
                    </div>
                </div >
                < div className="form-group row" >

                    <div class="col-md-4">
                        <label className=" control-label" htmlFor="Nome">Bairro</label>
                        <div className="">
                            <input id="teste"
                                className="form-control"
                                type="text"
                                name="Bairro"
                                value={this.state.clientData.bairro}
                                onChange={(event) => {
                                    this.state.clientData.bairro = event.target.value;
                                    this.setState({ clientData: this.state.clientData });
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label className=" control-label" htmlFor="Cpf">Cidade</label>
                        <div className="">
                            <input className="form-control"
                                type="text"
                                name="Cidade"
                                value={this.state.clientData.cidade}
                                onChange={(event) => {
                                    this.state.clientData.cidade = event.target.value;
                                    this.setState({ clientData: this.state.clientData });
                                }}
                                required
                            />
                        </div>
                    </div>
                    <div class="col-md-3">
                        <label className=" control-label" htmlFor="Cpf">Estado</label>
                        <div className="">
                            <input className="form-control"
                                type="text"
                                name="Estado" value={this.state.clientData.estado}
                                onChange={(event) => {
                                    this.state.clientData.estado = event.target.value;
                                    this.setState({ clientData: this.state.clientData });
                                }}
                                required
                            />
                        </div>
                    </div>
                </div >
                < div className="form-group row" >

                    <div class="col-md-4">
                        <label className=" control-label" htmlFor="Nome">Complemento</label>
                        <div className="">
                            <input id="teste"
                                className="form-control"
                                type="text"
                                name="Complemento"
                                value={this.state.clientData.complemento}
                                onChange={(event) => {
                                    this.state.clientData.complemento = event.target.value;
                                    this.setState({ clientData: this.state.clientData });
                                }}

                            />
                        </div>
                    </div>
                   
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default" >Save</button>&nbsp;    
                    <button className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )  
    }
    render()
    {
        let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : this.renderCreateForm();
        return (

            <div>
                <h3>Clientes</h3>
                <hr />
                {contents}
            </div>  
        );
    }
}