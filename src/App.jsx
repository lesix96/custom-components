import React from 'react';
import { DatePicker } from "./components";
import { Box, H1 } from './components/common-components';

const App = () => {
    return (
        <Box margin="0 auto" maxWidth="60%">
            <H1>Date Picker</H1>
            <DatePicker />
        </Box>
    )
}

export default App;
