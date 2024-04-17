// Style your elements here
import styled from 'styled-components/macro'

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3b4b69;
  height: 120vh;
  width: 100vw;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    height: 80%;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
`
export const Horzental = styled.hr`
  border: 1px solid #ffd773;
`
export const InputHolderContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`
export const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 4px 4px #d3d9e0;
  width: 80%;
  height: 80%;
  @media screen and (min-width: 768px) {
    height: 50%;
  }
`
export const Card = styled.div`
  color: #0f0f0f;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 80%;
  height: 100%;
  background-size: cover;
  border-radius: 10px;
  padding-left: 50px;
  padding-top: 50px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    height: 60%;
  }
`
export const CardNumber = styled.p`
  font-family: Roboto;
  font-size: 36px;
  color: #ffffff;
`
export const Input = styled.input`
  width: 80%;
  margin-top: 40px;
  border: 1px solid #c3cad9;
  outline: none;
  padding: 8px 12px;
`
export const CardHolderName = styled.h1`
  margin-top: 40px;
  margin-bottom: 20px;
  font-family: Roboto;
  font-size: 16px;
  color: #d3d9e0;
`
export const CardName = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  color: #ffffff;
`
