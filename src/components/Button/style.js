import styled, {css} from 'styled-components'

export const ButtonContainer = styled.button `
    background: #E4105d;
    border-radius: 22px;
    position: relative;
    margin-left: 5px;
    color: #FFF;
    padding: 2px 12px;
    min-width: 167px;
    height: 33px;
    border: none;
    width: 100%;

    &:hover{
        opacity: .5;
        cursor: pointer;
    }
    
        &::after {
            content: '';
            position: absolute;
            border: 1px solid #e4105d;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        } 
`