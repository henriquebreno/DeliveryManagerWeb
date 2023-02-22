
import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { fas, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "./Modal";

export class FetchMenuItem extends Component
{
    displayName = FetchMenuItem.name;


    constructor(props) {
        super(props);
        this.state = {
            menuItens:  [],
            loading: true,
            searchBox: "",
            showModal: false,
            selectedClientId: 0
        }

        this.handlerDelete = this.handlerDelete.bind(this);
        this.handlerRefresh = this.handleRefresh.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleRefresh();
    }

    handleRefresh() {
        fetch('api/MenuItem')
            .then(response => response.json())
            .then(data => {
                this.setState({ menuItens: data, loading: false });
            });
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


    showModal(clientId) {
        this.setState({ showModal: true, selectedClientId: clientId });
    }

    hideModal() {
        this.setState({ showModal: false });
    }

    handlerDelete(clientId) {

        fetch('api/MenuItem/' + clientId, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ clients: data, loading: false });
                this.handleRefresh();
                //this.props.history.push("/fetchclient");
            })

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
        //let contents = this.state.loading
        //    ? <p><em>Loading...</em></p>
        //    : this.renderClientTable(this.state.cardapio);

        return (
            <div className="row card_item_block" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                <div className="col-xs-12">
                    <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/menu-items"><h4 className="pull-left" style={{ fontSize: "20px", color: "#e91e63" }}><i className="fa fa-arrow-left"></i> Back</h4></a>
                    <div className="card mrg_bottom">
                        <div className="page_title_block">
                            <div className="col-md-5 col-xs-12">
                                <div className="page_title">Cardápio</div>
                            </div>
                            <div className="col-md-6 col-md-offset-1 col-xs-12">
                                <div className="col-sm-12">
                                    <div className="search_list">
                                        <div className="search_block">
                                            <form method="GET" action="">
                                                <input
                                                    className="form-control input-sm"
                                                    placeholder="Buscar..."
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
                                                <button type="submit" className="btn-search">
                                                    <i className="" >
                                                        <FontAwesomeIcon icon={faSearch} className="fa" />
                                                    </i>
                                                </button>
                                            </form>
                                        </div>
                                        <Link to={"/addMenuItem"}>
                                            <div className="add_btn_primary">

                                                <a >Add New</a>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="col-md-3 col-xs-12 text-right" style={{ float: " right" }}>
                                    <form method="post" action="">
                                        <div className="checkbox" style={{ width: "100px", marginTop: "5px", marginLeft: "10px", float: "left", right: "110px", position: "absolute" }}>
                                            <input
                                                type="checkbox"
                                                id="checkall"></input>
                                            <label htmlFor="checkall">
                                                Select All                </label>
                                        </div>
                                        <div className="dropdown" style={{ float: "right" }}>
                                            <button className="btn btn-primary dropdown-toggle btn_cust" type="button" data-toggle="dropdown">Action                <span className="caret"></span></button>
                                            <ul className="dropdown-menu" style={{ right: "0", left: "auto" }}>
                                                <li><a href="javascript:void(0)" className="actions" data-table="tbl_users" data-action="enable">Enable</a></li>
                                                <li><a href="javascript:void(0)" className="actions" data-table="tbl_users" data-action="disable">Disable</a></li>
                                                <li><a href="javascript:void(0)" className="actions" data-table="tbl_users" data-action="delete">Delete</a></li>
                                            </ul>
                                        </div>
                                    </form></div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12 mrg-top">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th style={{ width: "40px" }}>#</th>
                                        <th>Nome</th>
                                        <th>Preço</th>
                                        <th>Descrição</th>
                                        <th nowrap="">Registrado em</th>
                                        <th>Status</th>
                                        <th className="cat_action_list">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.menuItens && this.state.menuItens.map((menuItem, index) =>
                                        <tr className="item_holder">

                                            <td>
                                                <div>
                                                    <div className="checkbox">
                                                        <input type="checkbox" name="post_ids[]" id={"checkbox" + (index)} value={index} className="post_ids"></input>
                                                        <label htmlFor={"checkbox" + (index)}>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>
                                            <td nowrap="">{menuItem.Name}</td>
                                            <td>{menuItem.Price.Amount}</td>
                                            <td>{menuItem.Description}</td>
                                            <td></td>
                                            <td>
                                                <input type="checkbox" id={"enable_disable_check_" + (index)} data-id={index} className="cbx hidden enable_disable" ></input>
                                                <label htmlFor={"enable_disable_check_" + (index)} className="lbl"></label>
                                            </td>
                                            <td nowrap="">

                                                <a
                                                    className="btn btn-primary btn_cust"
                                                    data-toggle="tooltip"
                                                    data-tooltip="Edit"
                                                    onClick={id => this.handlerEdit(menuItem.ClientId)}>

                                                    <i className="fa fa-edit">
                                                    </i>
                                                </a>

                                                <a
                                                    className="btn btn-danger btn_delete_a"
                                                    data-base-url="http://viavilab.com/codecanyon/restaurant_script_demo/admin/users/delete_users_id/"
                                                    data-toggle="tooltip"
                                                    data-id="1"
                                                    data-tooltip="Delete"
                                                    onClick={id => this.showModal(menuItem.ClientId)}
                                                >
                                                    <i className="fa fa-trash">
                                                    </i>
                                                </a>
                                            </td>
                                        </tr>

                                    )}

                                </tbody>
                            </table>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12 col-xs-12">
                            <div className="pagination_item_block">
                                <nav>

                                    <nav aria-label="Page navigation">
                                        <ul className="pagination">

                                            <li className="active">
                                                <a href="http://viavilab.com/codecanyon/restaurant_script_demo/admin/users?page=1">
                                                    1            </a>
                                            </li>

                                        </ul>
                                    </nav>              </nav>
                            </div>
                        </div>
                    </div>
                </div>


                <Modal show={this.state.showModal} handleClose={this.hideModal} callBack={(event) => this.handlerDelete(this.state.selectedClientId)}>
                    <p>Modal</p>
                </Modal>

            </div>
        );
    }
}