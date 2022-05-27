import React from "react";

const datePickerContextDefaultValues = {
    focusedDate: null,
    isDateFocused: () => {},
    isDateSelected: () => {},
    isDateHovered: () => {},
    isDateBlocked: () => {},
    isFirstOrLastSelectedDate: () => {},
    onDateSelect: () => {},
    onDateFocus: () => {},
    onDateHover: () => {},
    startDate: null,
    endDate: null,
    onResetDates: () => {},
    goToPreviousMonths: () => {},
    goToNextMonths: () => {},
    goToNextYear: () => {},
    goToPreviousYear: () => {},
    goToDate: () => {},
};

export const DatePickerContext = React.createContext(datePickerContextDefaultValues);
