import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { fas, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export class FetchClient extends Component {
    displayName = FetchClient.name;

    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            loading: true,
            searchBox: ""
        }

        fetch('api/Client')
            .then(response => response.json())
            .then(data => {
                this.setState({ clients: data, loading: false });
            });
        this.handlerDelete = this.handlerDelete.bind(this);
        this.handlerEdit = this.handlerEdit.bind(this);
    }

    handleChange(event) {
        const path = event.target.name.split('.');
        const depth = path.length;
        const state = { ...this.state };
        let stateRef = state;
        for (let i = 0; i < depth; i += 1) {
            if (i === depth - 1) {
                stateRef[path[i]] = event.target.value;
            } else {
                stateRef = stateRef[path[i]];
            }
        }
        this.setState(state);
    }


    handlerDelete(clientId) {
        
        fetch('client/' + clientId, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then((data) => {
            this.setState({ clients: data, loading: false });
            this.props.history.push("/fetchclient");
        })
            
    }

    handlerEdit(clienteId) {
        this.props.history.push("/Clientes/Edit/" + clienteId);
    }

    renderClientTable(cliente) {
        return (

            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cpf</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {cliente.map(cliente =>
                        <tr>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.telefone}</td>
                            <td>
                                <button className="btn btn-success" onClick={id => this.handlerEdit(cliente.id_cliente)}>Editar</button>&nbsp;
                                <button className="btn btn-danger " onClick={id => this.handlerDelete(cliente.id_cliente)}>Deletar</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : /*this.renderClientTable(this.state.cliente);*/ "";

        return (
            <div class="row card_item_block" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                <div class="col-xs-12">
                    <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/menu-items"><h4 class="pull-left" style={{ fontSize: "20px", color: "#e91e63" }}><i class="fa fa-arrow-left"></i> Back</h4></a>
                    <div class="card mrg_bottom">
                        <div class="page_title_block">
                            <div class="col-md-5 col-xs-12">
                                <div class="page_title">Users</div>
                            </div>
                            <div class="col-md-6 col-md-offset-1 col-xs-12">
                                <div class="col-sm-12">
                                    <div class="search_list">
                                        <div class="search_block">
                                            <form method="GET" action="">
                                                <input
                                                    class="form-control input-sm"
                                                    placeholder="Search here..."
                                                    aria-controls="DataTables_Table_0"
                                                    type="search"
                                                    name="searchBox"
                                                    required=""
                                                    value={this.state.searchBox}
                                                    onChange={(event) => {

                                                        this.handleChange(event)
                                                    }}
                                                >
                                                </input>
                                                <button type="submit" class="btn-search">
                                                    <i class="" >
                                                        <FontAwesomeIcon icon={faSearch} className="fa" />
                                                    </i>
                                                </button>
                                            </form>
                                        </div>
                                        <Link to={"/addclient"}>
                                            <div class="add_btn_primary">

                                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/users/add">Add New</a>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="col-md-3 col-xs-12 text-right" style={{ float: " right" }}>
                                    <form method="post" action="">
                                        <div class="checkbox" style={{ width: "100px", marginTop: "5px", marginLeft: "10px", float: "left", right: "110px", position: "absolute" }}>
                                            <input
                                                type="checkbox"
                                                id="checkall"></input>
                                            <label for="checkall">
                                                Select All                </label>
                                        </div>
                                        <div class="dropdown" style={{ float: "right" }}>
                                            <button class="btn btn-primary dropdown-toggle btn_cust" type="button" data-toggle="dropdown">Action                <span class="caret"></span></button>
                                            <ul class="dropdown-menu" style={{ right: "0", left: "auto" }}>
                                                <li><a href="javascript:void(0)" class="actions" data-table="tbl_users" data-action="enable">Enable</a></li>
                                                <li><a href="javascript:void(0)" class="actions" data-table="tbl_users" data-action="disable">Disable</a></li>
                                                <li><a href="javascript:void(0)" class="actions" data-table="tbl_users" data-action="delete">Delete</a></li>
                                            </ul>
                                        </div>
                                    </form></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-12 mrg-top">
                            <table class="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th style={{ width: "40px" }}>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th nowrap="">Register On</th>
                                        <th>Status</th>
                                        <th class="cat_action_list">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.clients.map(client =>
                                        <tr class="item_holder">

                                            <td>
                                                <div>
                                                    <div class="checkbox">
                                                        <input type="checkbox" name="post_ids[]" id="checkbox0" value="1" class="post_ids"></input>
                                                        <label for="checkbox0">
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td nowrap="">{client.FullName}</td>
                                            <td>{client.Email}</td>
                                            <td></td>
                                            <td>
                                                <input type="checkbox" id="enable_disable_check_0" data-id="1" class="cbx hidden enable_disable" ></input>
                                                <label for="enable_disable_check_0" class="lbl"></label>
                                            </td>
                                            <td nowrap="">

                                                <a href=""
                                                    class="btn btn-primary btn_cust"
                                                    data-toggle="tooltip"
                                                    data-tooltip="Edit"
                                                    onClick={client=> this.handlerEdit(client.ClientId)}>

                                                    <i class="fa fa-edit">
                                                    </i>
                                                </a>

                                                <a href=""
                                                    class="btn btn-danger btn_delete_a"
                                                    data-base-url="http://viavilab.com/codecanyon/restaurant_script_demo/admin/users/delete_users_id/"
                                                    data-toggle="tooltip"
                                                    data-id="1"
                                                    data-tooltip="Delete"
                                                    onClick={client => this.handlerDelete(client.ClientId)}
                                                >
                                                    <i class="fa fa-trash">
                                                    </i>
                                                </a>
                                            </td>
                                        </tr>

                                    )}

                                </tbody>
                            </table>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-12 col-xs-12">
                            <div class="pagination_item_block">
                                <nav>

                                    <nav aria-label="Page navigation">
                                        <ul class="pagination">

                                            <li class="active">
                                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/users?page=1">
                                                    1            </a>
                                            </li>

                                        </ul>
                                    </nav>              </nav>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}