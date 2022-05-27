import React, { useCallback, useContext, useMemo } from 'react';
import { MonthNavigation } from '../MonthNavigation';
import { Month } from '../Month';
import { DatePickerContext } from '../../../context/DatePickerContext';
import { month } from '../../../utils/constants/month';
import { Box, Dropdown, FlexBox } from '../../common-components';
import { selectRange } from "../../../utils/utils/date-utils";

const MonthContainerComponent = ({ activeMonths, firstDayOfWeek }, ref) => {
    const {
        goToPreviousYear,
        goToNextYear,
        goToDate,
    } = useContext(DatePickerContext);

    const mainCalendar = useMemo(() => {
        const [main] = activeMonths;
        return main;
    }, [activeMonths]);

    const years = useMemo(() => selectRange(new Date().getFullYear() - 3, new Date().getFullYear() + 3), []);
    const months = useMemo(() => month.map((item, index) => ({ value: index, label: item })), []);

    const onYearChange = useCallback((targetYear) => {
        const { year } = mainCalendar;
        if (targetYear > year) {
            goToNextYear(targetYear - year);
        } else {
            goToPreviousYear(year - targetYear)
        }
    }, [goToPreviousYear, goToNextYear, mainCalendar]);

    const onMonthChange = useCallback((targetMonth) => {
        const { year } = mainCalendar;
        goToDate(new Date(year, targetMonth));
    }, [goToDate, mainCalendar]);

    return (
        <Box ref={ref}>
            <MonthNavigation>
                <FlexBox>
                    <Dropdown onChange={onYearChange} options={years} defaultValue={mainCalendar.year} />
                    <Dropdown onChange={onMonthChange} options={months} defaultValue={month[mainCalendar.month]} />
                </FlexBox>
            </MonthNavigation>

            <FlexBox justifyContent='space-around'>
                {activeMonths.map((month) => (
                    <Month
                        key={`${month.year}-${month.month}`}
                        year={month.year}
                        month={month.month}
                        firstDayOfWeek={firstDayOfWeek}
                    />
                ))}
            </FlexBox>
        </Box>
    );
}

export const MonthContainer = React.memo(React.forwardRef(MonthContainerComponent));
