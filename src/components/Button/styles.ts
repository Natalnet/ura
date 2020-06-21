import styled from 'styled-components'

import { darken } from 'polished'

export const ButtonHeader = styled.button`
  position: relative;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  margin: 0 14px;
  width: 140px;
  height: 60px;
  & {
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    padding: 1.25em 2em;
    background: #3474eb;
    border: 2px solid #b18597;
    border-radius: 0.75em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #f9c4d2;
      border-radius: inherit;
      box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
      transform: translate3d(0, 0.75em, -1em);
      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
    }
    &:hover {
      background: ${darken(0.07, '#3474eb')};
      transform: translate(0, 0.25em);
      &::before {
        box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
        transform: translate3d(0, 0.5em, -1em);
      }
    }
    &:active {
      background: ${darken(0.1, '#3474eb')};
      transform: translate(0em, 0.75em);
      &::before {
        box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
        transform: translate3d(0, 0, -1em);
      }
    }
  }
`
