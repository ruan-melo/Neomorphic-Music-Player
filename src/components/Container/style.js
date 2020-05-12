import styled from 'styled-components';

const StyledContainer = styled.div`
    transition: ${props => props.transition || ''};
    display: ${props => props.display || 'block'};
    border-radius: ${props => props.borderRadius || '0'};
    padding: ${props => props.padding || '0'};
    box-sizing: ${props => props.boxSizing || 'border-box'};
    align-items: ${props => props.alignItems || 'flex-start'};
    justify-content: ${props => props.justifyContent || 'flex-start'};
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || 'auto'};
    position: ${props => props.position || 'static'};
    top: ${props => props.top || '0'};
    left: ${props => props.left || '0'};
    transform: ${props => props.transform || 'none'};
    margin: ${props => props.margin || 'auto'};
    background: ${({ background, theme }) => theme.primary ? theme.primary.main : (background ? background : 'none')};
    border: ${props => props.border || 'none'};
`

export default StyledContainer;