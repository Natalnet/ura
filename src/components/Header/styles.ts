import styled from 'styled-components'

interface Props {
  background?: string;
  scrool: number
}

export const Container = styled.div`
  width: 100%;
  position: fixed;
`

export const Content = styled.div<Props>`
  background: ${(p) => p.scrool === 0 ? 'red' : 'blue'};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    margin: 0 auto;
    img {
      height: 105px;
    }
  }

  aside {
    display: flex;
    flex-direction: row;
    margin: 0 auto

  }
`
