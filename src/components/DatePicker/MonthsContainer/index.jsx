import React, { useCallback, useContext, useMemo } from 'react';
import { MonthNavigation } from '../MonthNavigation';
import { Month } from '../Month';
import { DatePickerContext } from '../../../context/DatePickerContext';
import { month } from '../../../utils/constants/month';
import { Box, Dropdown, FlexBox } from '../../common-components';
import { selectRange } from '../../../utils/utils/date-utils';

const MonthContainerComponent = ({ activeMonths, firstDayOfWeek }) => {
    const {
        goToPreviousYear,
        goToNextYear,
        goToDate,
    } = useContext(DatePickerContext);

    const mainCalendarMonth = useMemo(() => {
        const [mainCalendar] = activeMonths;
        const { month } = mainCalendar;
        return month;
    }, [activeMonths]);

    const mainCalendarYear = useMemo(() => {
        const [mainCalendar] = activeMonths;
        const { year } = mainCalendar;
        return year;
    }, [activeMonths]);

    const years = useMemo(() => selectRange(new Date().getFullYear() - 3, new Date().getFullYear() + 3), []);
    const months = useMemo(() => month.map((item, index) => ({ value: index, label: item })), []);

    const onYearChange = useCallback((targetYear) => {
        if (targetYear > mainCalendarYear) {
            goToNextYear(targetYear - mainCalendarYear);
        } else {
            goToPreviousYear(mainCalendarYear - targetYear)
        }
    }, [goToPreviousYear, goToNextYear, mainCalendarYear]);

    const onMonthChange = useCallback((targetMonth) => {
        goToDate(new Date(mainCalendarYear, targetMonth));
    }, [goToDate, mainCalendarYear]);

    return (
        <Box>
            <MonthNavigation>
                <FlexBox>
                    <Dropdown onChange={onYearChange} options={years} defaultValue={mainCalendarYear} />
                    <Dropdown onChange={onMonthChange} options={months} defaultValue={month?.[mainCalendarMonth]} />
                </FlexBox>
            </MonthNavigation>

            <FlexBox justifyContent='space-around'>
                {activeMonths.map((activeMonth) => {
                    const { year, month } = activeMonth;

                    return (
                        <Month
                            key={`${year}-${month}`}
                            year={year}
                            month={month}
                            firstDayOfWeek={firstDayOfWeek}
                        />
                    )
                })}
            </FlexBox>
        </Box>
    );
}

export const MonthContainer = React.memo(MonthContainerComponent);
