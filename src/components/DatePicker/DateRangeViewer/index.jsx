import React from 'react';
import { Box, Button } from "../../common-components";
import { DATE_MASK } from "../../../utils/constants/masks";

const DateRangeViewerComponent = ({ startDate, endDate, onResetDates, onClick }) => {
    return (
        <Box width="fit-content" margin="0 auto" onClick={onClick}>
            {startDate
                ? startDate.toLocaleDateString('en-US')
                : DATE_MASK}
            {" "} - {" "}
            {endDate ? endDate.toLocaleDateString('en-US') : DATE_MASK}
            <Button onClick={onResetDates} border='none'>
                &#8855;
            </Button>
        </Box>
    )
}

export const DateRangeViewer = React.memo(DateRangeViewerComponent);