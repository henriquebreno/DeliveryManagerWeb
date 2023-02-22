import React, { Component } from 'react';
import { cpfMask, telephoneMask, birthDateMask } from '../shared/mask';
import '../css/Client.css'
import { InputCursorText } from 'react-bootstrap-icons';



export class Cliente {
    constructor() {
        this.email = "";
        this.cpf = "";
        this.nome = "";
        this.telefone = "";
        this.id_Cliente = 0;
        //this.logradouro = "";
        //this.cep = "";
        //this.numero = "";
        //this.bairro = "";
        //this.cidade = "";
        //this.estado = "";
        //this.complemento = "";
        this.id_Endereco = 0
        this.dataNascimento = "";
    }
}

export class AddClient extends Component {
    displayName = AddClient.name;

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            loading: true,
            clientData: new Cliente
        };

        var clientId = this.props.match.params["clientId"];
        if (clientId) {
            fetch('Clientes/Details/' + clientId)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ title: "Edit", loading: false, clientData: data });
                    fetch('Enderecos/Details/' + clientId)
                        .then((response) => response.json())
                        .then((data) => {
                            this.setState({ title: "Edit", loading: false, clientData: data });

                        })
                })
        } else {
            this.state = { title: "Create", loading: false, clientData: new Cliente };
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

    }



    handleSave(event) {

        event.preventDefault();
        var clientData = this.state.clientData;


        // POST request for Add employee.  

        fetch('api/client', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Cpf: clientData.cpf,
                FullName: clientData.nome,
                Cellphone: clientData.telefone,
                Email: clientData.email,
                //this.logradouro = "";
                //this.cep = "";
                //this.numero = "";
                //this.bairro = "";
                //this.cidade = "";
                //this.estado = "";
                //this.complemento = "";

                BirthDate: clientData.dataNascimento
            })
        })
        .then((response) => {
            if (response.length > 0)
                return response.json()
            } 
        )
        .then((response) => {
            this.props.history.push("/fetchclient");
        }).catch((error) => {
            console.log(error)
        });


    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/fetchclient");
    }

    handleChange(event, callback) {

        const path = event.target.name.split('.');
        const depth = path.length;
        const state = { ...this.state };
        let stateRef = state;
        for (let i = 0; i < depth; i += 1) {
            if (i === depth - 1) {
                var valueRef = callback != null ? callback(event.target.value) : event.target.value;
                event.target.value = valueRef;
                stateRef[path[i]] = event.target.value = valueRef;
            } else {
                stateRef = stateRef[path[i]];
            }
        }

        this.setState(state);
    }

    renderCreateForm() {

    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : null;
        return (
            <div class="col-md-12">

                <div class="card">
                    <div class="page_title_block">
                        <div class="col-md-5 col-xs-12">
                            <div class="page_title">Add Users</div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="card-body">
                        <form action="http://viavilab.com/codecanyon/restaurant_script_demo/admin/users/addForm" method="post" class="form form-horizontal" enctype="multipart/form-data">
                            <input type="hidden" name="csrf_test_name" value="ca3b4de8a742c8c50ec794ced876df2d"></input>
                            <div class="section">
                                <div class="section-body">
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">Nome:-</label>
                                        <div class="col-md-6">
                                            <input type="text" required="" placeholder="Insira o nome completo" id="name" name="clientData.nome" class="form-control" value={this.state.clientData.nome}
                                                onChange={(event) => {

                                                    this.handleChange(event)
                                                }}></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-3 control-label">Email :-
                </label>
                                        <div class="col-md-6">
                                            <input type="text" required="" placeholder="Insira o email" id="email" name="clientData.email" class="form-control" value={this.state.clientData.email}
                                                onChange={(event) => {

                                                    this.handleChange(event)
                                                }}></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-3 control-label">Telefone :-
                                        
                </label>
                                        <div class="col-md-6">

                                            <input type="text" onkeypress="return isNumberKey(event)" maxlength="15" placeholder="Insira o telefone" id="phone" name="clientData.telefone" class="form-control" value={this.state.clientData.Telefone}
                                                onChange={(event) => {
                                                    this.handleChange(event, telephoneMask)
                                                }}></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-md-3 control-label">Data de Nascimento :-
                                        
                </label>
                                        <div class="col-md-6">
                                            <input type="text" onkeypress="return isNumberKey(event)" maxlength="15" placeholder="Insira a data de Nascimento" id="birthDate" name="clientData.dataNascimento" class="form-control" value={this.state.clientData.dataNascimento}
                                                onChange={(event) => {

                                                    this.handleChange(event, birthDateMask)
                                                }}></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-md-3 control-label">Cpf :-
                                        
                </label>
                                        <div class="col-md-6">
                                            <input type="text" onkeypress="return isNumberKey(event)" maxlength="15" placeholder="Insira o cpf" id="phone" name="clientData.cpf" class="form-control" value={this.state.clientData.cpf}
                                                onChange={(event) => {

                                                    this.handleChange(event, cpfMask)
                                                }}></input>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-9 col-md-offset-3">
                                            <button type="submit" name="btn_submit" class="btn btn-primary" onClick={(event) => this.handleSave(event)}>Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}