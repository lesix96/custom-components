import React, { useContext } from 'react';
import { DatePickerContext } from '../../../context/DatePickerContext';
import { Button, FlexBox } from '../../common-components';

export const MonthNavigationComponent = ({ children }) => {
    const {
        goToPreviousMonths,
        goToNextMonths,
    } = useContext(DatePickerContext);

    return (
        <FlexBox>
            <Button onClick={goToPreviousMonths} border='none'>
                &#8592;
            </Button>
            {children}
            <Button onClick={goToNextMonths} border='none' padding="5px 0 5px 10px">
                &#8594;
            </Button>
        </FlexBox>
    )
}

export const MonthNavigation = React.memo(MonthNavigationComponent);