// Generated by https://pagedraw.io/pages/10133
import React from 'react';
import Menu from './menu';
import Grupo from './grupo';
import './tela_principal.css';

function render() {
    return <div className="tela_principal-tela_principal-3">
        <div className="tela_principal-0">
            <div className="tela_principal-menu_instance-5">
                <Menu /> 
            </div>
        </div>
        <div className="tela_principal-1">
            <div className="tela_principal-text_2">
                { this.props.text }
            </div>
        </div>
        <div className="tela_principal-2">
            <div className="tela_principal-grupo_instance-1">
                <Grupo numero_grupo={""} /> 
            </div>
        </div>
        <div className="tela_principal-3" /> 
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}