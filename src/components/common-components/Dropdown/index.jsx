import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useClickOutside } from "../../../hooks";

const DropDownContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 10px;
  margin: 0;
`;

const DropDownHeader = styled('div')`
  color: #29B6F6;
  background: #ffffff;
  padding-left: 4px;
  padding-right: 4px;

  ${props => props.isOpen && css`
    color: #ffffff;
    background: #29B6F6;
  `}
`;

const DropDownListContainer = styled('div')``;

const DropDownList = styled('ul')`
  position: absolute;
  z-index: 2;
  padding-left: 4px;
  padding-right: 4px;
  margin: 0;
`;

const ListItem = styled('li')`
  list-style: none;
  color: #29B6F6;
  background: #ffffff;
`;

const DropdownComponent = ({ defaultValue, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    useEffect(() => {
        setSelectedOption(defaultValue);
    }, [defaultValue]);

    const node = useRef(null);

    const onDropdownClose = () => setIsOpen(false);

    useClickOutside(node, onDropdownClose);

    const onOptionSelect = useCallback((item) => () => {
        const { label, value } = item;
        setSelectedOption(label);
        onDropdownClose();
        onChange(value);
    }, [onChange]);

    return (
        <DropDownContainer>
            <DropDownHeader onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>{selectedOption}</DropDownHeader>
            <DropDownListContainer ref={node}>
                {isOpen && (
                    <DropDownList>
                        {options.map((item) => {
                            const { value, label } = item;

                            return (
                                <ListItem key={value} onClick={onOptionSelect(item)}>{label}</ListItem>
                            );
                        })}
                    </DropDownList>
                )}
            </DropDownListContainer>
        </DropDownContainer>
    );
};

export const Dropdown = React.memo(DropdownComponent);