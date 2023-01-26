import React, { Component, useReducer,useRef } from 'react';
import CameraIcon from '../img/camera-icon.png';
import { Modal } from 'react-modal';

export class Cardapio {
    constructor() {
        this.preco = 0;
        this.descricao = "";
        this.nome = "";
        this.url = CameraIcon;
        this.id_Cardapio = 0
    }
}  

export class AddCardapio extends Component
{
    displayName = AddCardapio.name;

    constructor(props) {
        super(props);
        this.state = { title: "", loading: true, cardapioData: new Cardapio };
        this.foodImageRef = React.createRef();

        var clientId = this.props.match.params["cardapioId"];
        if (clientId) {
            fetch('Cardapios/Details/' + clientId)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ title: "Edit", loading: false, cardapioData: data });
                })
        } else {
            this.state = { title: "Create", loading: false, cardapioData: new Cardapio };
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleRef = this.handleRef.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
       
    }



    handleSave(event) {
 
        event.preventDefault();
        const data = new FormData(event.target);

        var cardapioData  = this.state.cardapioData;


        // PUT request for Edit employee.  
        if (cardapioData.id_Cardapio) {
            data.set("Url", cardapioData.url);
            fetch('ImageAjax/Edit', {
                method: 'PUT',
                body: data,
            })
            .then((response) => response.json())
            .then((responseJson) => {
                data.set("Url", responseJson)
                data.set("Id_Cardapio", cardapioData.id_Cardapio)
                fetch('Cardapios/Edit/' + cardapioData.id_Cardapio, {
                    method: 'PUT',
                    body: data,
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchcardapio");
                })
            })
        }

        // POST request for Add employee.  
        else {
            fetch('ImageAjax/Create', {
                method: 'POST',
                body: data,
            })
            .then((response) => response.json())
            .then((responseJson) => {
                data.set("Url",responseJson)
                fetch('Cardapios/Create', {
                    method: 'POST',
                    body: data,
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchcardapio");
                })
            })
        }            

    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/fetchclient");   
    }  

    handleRef(e,element) {
        element.current.click();
    }

    handleImageChange(event) {

        this.state.cardapioData.url = window.URL.createObjectURL(event.target.files[0]);
        this.setState({ cardapioData: this.state.cardapioData });

    }

    RenderCreateForm()
    {

        return (
            <form onSubmit={this.handleSave}>
                <div>
                    <div className="col-md" >
                        <label className=" control-label text-primary h4" htmlFor="Informacoes Pessoais">Adicionar Comida</label>
                        <input type="hidden" name="" />
                    </div>
                    <div className="row">              
                        <div className="col-md-3">
                            < div className="form-group row" >                      
                                <div class="col-md-10">
                                    <label className=" control-label" htmlFor="Nome">Nome</label>
                                    <div className="">
                                        <input 
                                            className="form-control"
                                            type="text"
                                            name="Nome"
                                            value={this.state.cardapioData.nome}
                                            onChange={(event) => {
                                                this.state.cardapioData.nome = event.target.value;
                                                this.setState({ cardapioData: this.state.cardapioData });
                                            }}
                                            required
                                        />
                                    </div>
                                </div>                  
                            </div >
                            <div className="form-group row">
                            <div class="col-md-10">
                                    <label className=" control-label" htmlFor="Descricao">Descrição</label>
                                    <div className="">
                                        <input className="form-control"
                                            type="text"
                                            name="Descricao"
                                            value={this.state.cardapioData.descricao}
                                            onChange={(event) => {
                                                this.state.cardapioData.descricao = event.target.value;
                                                this.setState({ cardapioData: this.state.cardapioData });
                                            }}  
                                            required
                                        />
                                    </div>
                            </div>
                        </div >
                            <div className="form-group row">
                                <label className="control-label col-md-12" htmlFor="Preco" >Preco</label>
                                <div className="col-md-10">
                                    <input className="form-control"
                                        type="text" name="Preco"
                                        value={this.state.cardapioData.preco}
                                        onChange={(event) => {
                                            this.state.cardapioData.preco = event.target.value;
                                            this.setState({ cardapioData: this.state.cardapioData });
                                        }}
                                        required    
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">   
                            <br></br>
                            <div  onClick={(event) => this.handleRef(event, this.foodImageRef)}> 
                                <input
                                    type="file"
                                    id="foodImageRef"
                                    name="fileImage"
                                    style={{ display: "none" }}
                                    ref={this.foodImageRef}
                                    onChange={ this.handleImageChange}/>
                                <img src={this.state.cardapioData.url} alt="camera icon image" width="200px" height="100px" />
                            </div>
                            <br></br>
                        </div>

                    </div>
                    <div className="col-md">
                        <button type="submit" className="btn btn-default" >Save</button>&nbsp;    
                        <button className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
                    </div >
                </div>
            </form >
        )  
    }


    render()
    {
        let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : this.RenderCreateForm();
        return (

            <div>
                <h3>Cardápio</h3>
                <hr />
                {contents}
            </div>  
        );
    }
}