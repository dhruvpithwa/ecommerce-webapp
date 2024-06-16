import { Children, ReactNode } from 'react';
import { styled } from '@mui/system';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

const RoundSelect = styled(Select)(({ theme }) => ({
    color: "#000000",
    fontSize: "14px",
    textTransform: "none",
    fontWeight: "300",
    margin: "4px",
    borderRadius: '100px',
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: '100px',
        padding: "auto 16px"
    },
    '& .MuiSelect-select': {
        borderRadius: '100px',
        padding: `${theme.spacing(1)} ${theme.spacing(2)}`
    },
}));


type RoundDropdownType = {
    id: string;
    value: string;
    options: {key: string, component: ReactNode}[];
}

export const RoundDropdown = ({ id, value, options }: RoundDropdownType) => {
    return (
        <RoundSelect
            id={id}
            value={value}
            fullWidth
        >
            {Children.toArray(options.map( ({ key, component }) => 
                <MenuItem value={key}>
                    {component}
                </MenuItem>))
            }
        </RoundSelect>
    );
};
