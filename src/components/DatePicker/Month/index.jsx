import React from 'react';
import { useMonth } from '@datepicker-react/hooks';
import { Day } from '../Day';
import { Box, P, GridBox } from '../../common-components';
import uuid from 'react-uuid'

const MonthComponent = ({ year, month, firstDayOfWeek }) => {
    const { days, weekdayLabels, monthLabel } = useMonth({
        year,
        month,
        firstDayOfWeek
    });

    return (
        <Box>
            <Box margin='0 0 16px'>
                <P fontWeigth="bold">{monthLabel}</P>
            </Box>
            <GridBox>
                {weekdayLabels.map((dayLabel) => (
                    <Box key={dayLabel}>
                        {dayLabel}
                    </Box>
                ))}
            </GridBox>
            <GridBox>
                {days.map((day) => (
                    <Day date={day.date} key={uuid()} day={day.dayLabel} />
                ))}
            </GridBox>
        </Box>
    )
}

export const Month = React.memo(MonthComponent);