import React from "react";
import logo from "../../img/logo.jpg"
import {Button} from "../Button/index"
import {Row, Wrapper} from './style'

const Header = () => {

    const handleClickSignIn = () =>{
        console.log('Entrar')
    }

    return (
        <Wrapper>
                <Row>
                    <img src={logo} alt="Logo da DIO"/>
                    <span><Button title="Entrar" onClick={handleClickSignIn} className="botao"/></span>
                </Row>
            
                <Row>
                    <p>Cadastrar</p>
                </Row>
        </Wrapper>
    )
}

export {Header}