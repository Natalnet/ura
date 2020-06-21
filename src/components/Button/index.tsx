import React from 'react'

import { ButtonHeader } from './styles'

interface Props {
  children: string
}

const Button = (props: Props) => {
  return <ButtonHeader>{props.children}</ButtonHeader>
}

export default Button
