
import { ChangeEvent } from "react";
import { OutlinedInput, InputAdornment, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    background: "#ffffff",
    border: "1px #B9B9B9",
    borderRadius: "100px",
    fontSize: "14px",
    textTransform: "none",
    fontWeight: "300",
    margin: "4px"
}));

type RoundSearchType = {
    id: string;
    value: string;
    placeHolder: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RoundSearch = ({id, value, placeHolder, onChangeHandler }: RoundSearchType ) => {
    return (
        <CustomOutlinedInput
            fullWidth
            size="small"
            id={id}    
            value={value}
            onChange={onChangeHandler}
            placeholder={placeHolder}
            endAdornment={
                <InputAdornment position="end">
                    <SearchIcon />
                </InputAdornment>
            }
        />
    )
}