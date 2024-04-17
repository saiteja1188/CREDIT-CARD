// Write your code here
import {useState} from 'react'

import {
  CreditCardContainer,
  CardContainer,
  Heading,
  InputHolderContainer,
  Card,
  CardNumber,
  Input,
  InputHolder,
  CardName,
  CardHolderName,
  Horzental,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => setNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)

  const nameFiled = name.toUpperCase()

  return (
    <CreditCardContainer data-testid="creditCard">
      <CardContainer>
        <div>
          <Heading>CREDIT CARD</Heading>
          <Horzental />
        </div>
        <Card>
          <CardNumber>{number}</CardNumber>
          <CardHolderName>CARDHOLDER NAME</CardHolderName>
          <CardName>{nameFiled}</CardName>
        </Card>
      </CardContainer>
      <InputHolderContainer>
        <InputHolder>
          <Heading>Payment Method</Heading>
          <Input
            type="text"
            placeholder="Card Number"
            value={number}
            onChange={onChangeNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </InputHolder>
      </InputHolderContainer>
    </CreditCardContainer>
  )
}

export default CreditCard
