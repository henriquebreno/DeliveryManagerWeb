import React from "react";
import '../css/Modal.css';

const ModalDelete = props => {
    const { className, modalRef } = props;

    return (
        <div class="du-dialog dlg--open">
            <div class="dlg-wrapper" tabindex="0">
                <div class="dlg-header">Are you sure?
                    </div>
                <div class="dlg-content">All data will be removed which belong to this!</div>
                <div class="dlg-actions">
                    <button class="dlg-action cancel-action" tabindex="2">Cancel</button>
                    <button class="dlg-action ok-action" tabindex="1">Proceed</button>
                </div>
            </div>
        </div>
    )
}



export function Modal  ({handleClose, callBack, show, children }) {
    const showHideClassName = show ? "modal-display-block" : "modal-display-none";

    return (
        <div class={"du-dialog dlg--open " +  (showHideClassName)} >
            <div class="dlg-wrapper" tabindex="0">
                <div class="dlg-header">Tem a certeza?
                    </div>
                <div class="dlg-content">A ação será confirmada e não será possível reverter</div>
                <div class="dlg-actions">
                    <button class="dlg-action cancel-action" tabindex="2" onClick={handleClose}>Cancel</button>
                    <button class="dlg-action ok-action" tabindex="1"
                        onClick={() =>
                            { callBack(); handleClose() }
                        }
                    >Proceed</button>
                </div>
            </div>
        </div>
        
    );
};

export default Modal;