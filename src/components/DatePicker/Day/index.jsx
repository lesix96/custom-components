import React, { useContext, useRef, useMemo } from 'react';
import { useDay } from '@datepicker-react/hooks';
import { DatePickerContext } from "../../../context/DatePickerContext";
import { Button } from '../../common-components';
import styled, { css } from 'styled-components';

const CalendarDayButton = styled(Button)`
      font-size: 12px;
      padding: 8px;
      border: 0;
      color: #001217;
      background: #FFFFFF;

      ${props => props.currentDate && css`
        color: #001217;
        background: #FFFFFF;
        text-decoration: underline #29B6F6 2px;
      `}

      ${props => props.hovered && css`
        color: #000000;
        background: #F2F2F2;
      `}

      ${props => props.disabled && css`
        color: #D9D9D9;
        background: #FFFFFF;
      `}

      ${props => props.selected && css`
        color: #FFFFFF;
        background: #29B6F6;
        opacity: 0.7;
      `}

      ${props => props.lastOrFirstSelected && css`
        color: #FFFFFF;
        background: #29B6F6;
        opacity: 1;
      `}
    `

const DayComponent = ({ day, date }) => {
    const dayRef = useRef(null);

    const {
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
    } = useContext(DatePickerContext);

    const {
        isSelected,
        isSelectedStartOrEnd,
        isWithinHoverRange,
        disabledDate,
        onClick,
        onMouseEnter
    } = useDay({
        date,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        focusedDate,
        onDateFocus,
        onDateSelect,
        onDateHover,
        dayRef
    });

    const isDateCurrent = useMemo(() => new Date().toLocaleDateString() === new Date(date).toLocaleDateString(), [date])

    return (
            <CalendarDayButton
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                ref={dayRef}
                selected={isSelected}
                lastOrFirstSelected={isSelectedStartOrEnd}
                currentDate={isDateCurrent}
                hovered={isWithinHoverRange}
                disabled={disabledDate}
            >
                {day}
            </CalendarDayButton>
        );
    };

export const Day = React.memo(DayComponent);