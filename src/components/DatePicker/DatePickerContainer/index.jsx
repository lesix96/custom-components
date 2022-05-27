import React, { useCallback, useEffect, useRef, useState } from 'react';
import { START_DATE, useDatepicker } from "@datepicker-react/hooks";
import { DatePickerContext } from "../../../context/DatePickerContext";
import { MonthContainer } from "../MonthsContainer";
import { DateRangeViewer } from "../DateRangeViewer";
import { useClickOutside } from "../../../hooks";

const DatePickerContainerComponent = () => {
    const [state, setState] = useState({
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
    });

    const [isReadyToClose, setIsReadyToClose] = useState(true);

    const node = useRef(null);

    const closeCalendar = () => setIsReadyToClose(true);
    const openCalendar = useCallback(() => setIsReadyToClose(false), []);

    useClickOutside(node, closeCalendar);

    useEffect(() => {
        if (state.endDate && state.startDate && state.focusedInput) {
            closeCalendar();
        }
    }, [state]);

    const handleDateChange = (data) => {
        if (data.focusedInput) {
            setState(data);
        } else {
            setState({ ...data, focusedInput: START_DATE });
        }
    }

    const {
        firstDayOfWeek,
        activeMonths,
        isDateSelected,
        isDateHovered,
        isFirstOrLastSelectedDate,
        isDateBlocked,
        isDateFocused,
        focusedDate,
        onDateHover,
        onDateSelect,
        onDateFocus,
        onResetDates,
        goToPreviousMonths,
        goToNextMonths,
        goToNextYear,
        goToPreviousYear,
        goToDate,
    } = useDatepicker({
        startDate: state.startDate,
        endDate: state.endDate,
        focusedInput: state.focusedInput,
        onDatesChange: handleDateChange,
        numberOfMonths: 2,
        firstDayOfWeek: 0,
        minBookingDate: new Date(),
    });

    return (
        <DatePickerContext.Provider
            value={{
                focusedDate,
                isDateFocused,
                isDateSelected,
                isDateHovered,
                isDateBlocked,
                isFirstOrLastSelectedDate,
                onDateSelect,
                onDateFocus,
                onDateHover,
                startDate: state.startDate,
                endDate: state.endDate,
                onResetDates,
                goToPreviousMonths,
                goToNextMonths,
                goToNextYear,
                goToPreviousYear,
                goToDate,
            }}
        >
            <DateRangeViewer
                endDate={state.endDate}
                startDate={state.startDate}
                onResetDates={onResetDates}
                onClick={openCalendar}
            />

            {!isReadyToClose && (
                <MonthContainer
                    ref={node}
                    firstDayOfWeek={firstDayOfWeek}
                    activeMonths={activeMonths}
                />
            )}
        </DatePickerContext.Provider>
    );
}

export const DatePickerContainer = React.memo(DatePickerContainerComponent);