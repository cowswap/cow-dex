import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 100%;
  padding: 32px 16px;
  background-repeat: no-repeat;
  background-position: bottom 24px center;
  background-size: 20%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/arch-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.svg'),
      url('/images/left-gouda.svg'), url('/images/right-gouda.svg');
    background-repeat: no-repeat;
    background-position: bottom, top 10em left 10em, top 10em right 10em;
    background-size: contain, 266px, 266px;
    min-height: 95vh;
  }
`

export default Container
