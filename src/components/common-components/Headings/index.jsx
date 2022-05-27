import styled from 'styled-components';

export const H1 = styled('h1')`
    font-size: 20px;
    color: ${p => p.color || 'black'};
    font-weight: ${p => p.fontWeigth || 'bold'};
    text-align: center;
`;

export const P = styled('p')`
    font-size: 16px;
    color: ${p => p.color || 'black'};
    font-weight: ${p => p.fontWeigth || 'normal'};
    text-align: center;
`;