import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: fixed;
  box-shadow: 4px red;
`

export const Content = styled.div`
  background: rgba(255, 255, 255);
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
      height: 80px;
    }
  }

  aside {
    display: flex;
    flex-direction: row;
    margin: 0 auto

  }
`
