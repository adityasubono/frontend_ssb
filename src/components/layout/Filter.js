import React from 'react';
import {Box, Button, Input, TextField, Typography} from "@material-ui/core";

const Filter =  () => {

        return (
            <div>
                <form>
                    <Typography variant='h6'>
                        Filter
                    </Typography>
                    <Box p='2'>
                        <Box>
                            <TextField id="standard-basic" label="Name" />
                        </Box>
                        <Box>
                            <TextField id="standard-basic" label="Company" />
                        </Box>
                        <Box p='2'>
                            <Button variant="contained" color="primary">
                                Search
                            </Button>
                        </Box>
                    </Box>
                </form>
            </div>
        );

}

export default Filter;
