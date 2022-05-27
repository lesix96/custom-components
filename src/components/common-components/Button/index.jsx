import styled from 'styled-components';

export const Button = styled('button')`
    font-size: ${p => p.fontSize || '20px'};
    width: ${p => p.width || 'auto'};
    height: ${p => p.height || 'auto'};
    padding: ${p => p.padding || '5px'};
    border: ${p => p.border || '1px solid #000000'};
    background: ${p => p.background || '#FFFFFF'};
    color: ${p => p.color || '#000000'};
`;
