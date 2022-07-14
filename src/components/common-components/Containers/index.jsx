import styled from 'styled-components';

const Container = styled('div')`
    width: ${p => p.width || 'auto'};
    max-width: ${p => p.maxWidth || 'none'};
    height: ${p => p.height || 'auto'};
    padding: ${p => p.padding || '0px'};
    margin: ${p => p.margin || '0px'};
    border: ${p => p.border || 'none'};
`

export const Box = styled(Container)`
    display: block;
    text-align: center;
`;

export const FlexBox = styled(Container)`
    display: flex;
    justify-content: ${p => p.justifyContent || 'space-between'};
`;

export const GridBox = styled(Container)`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: ${p => p.justifyContent || 'center'};
`