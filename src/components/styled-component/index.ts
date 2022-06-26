import styled, { keyframes } from 'styled-components';


export const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`

export const Container = styled.div`
    width: 100%;
    text-align: center;
    transition: opacity 500ms ease-out;   
`
export const List = styled.div`
    margin-left: 38%;
    margin-right: 42%;
`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
    margin-right: 10px;
`

const moveItem = (from: number, to: number) => keyframes`
    from {top: ${from}px;}
    to {top: ${to}px;}
`

export const ListItem = styled.div<{currentPos: number, newPos: number}>`
    height: 60px;
    width: 300px;
    display: flex;
    top: ${({newPos}) => newPos}px;
    position: absolute;
    align-items: center;
    animation: ${({currentPos, newPos}) => moveItem(currentPos, newPos)} 0.3s ease;
`

