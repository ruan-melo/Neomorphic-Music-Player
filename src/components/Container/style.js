import styled from 'styled-components';

const StyledContainer = styled.div`
    background: ${({ background, theme }) => background ? background : theme.primary.main};
`

export const StyledPageContainer = styled.div`
    height: 100%;
`
export default StyledContainer;