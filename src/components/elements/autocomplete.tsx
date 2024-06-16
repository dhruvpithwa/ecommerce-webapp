
import { ChangeEvent } from "react";
import { Autocomplete, TextField, styled } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        background: "#ffffff",
        border: "1px #B9B9B9",
        borderRadius: "100px",
        fontSize: "14px",
        textTransform: "none",
        fontWeight: "300",
        margin: "4px"
    }
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({

    '& .MuiAutocomplete-option': {
        color: "#000000",
        padding: "auto 12px",
        fontSize: "14px",
        textTransform: "none",
        fontWeight: "300"
    },
}));


type AutoCompleteType = {
    id: string;
    value: string;
    placeholder: string;
    options: { label: string }[];
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomAutocomplete = ({id, options, value, placeholder, onChangeHandler}: AutoCompleteType) => {

    return (
        <StyledAutocomplete
            freeSolo
            id={id}
            options={options}
            ListboxProps={{
                sx: {
                    background: "#ffffff",
                    fontSize: "14px",
                    textTransform: "none",
                    fontWeight: "300",
                    margin: "4px"
                }
            }}
            renderInput={(params) => (
                <StyledTextField
                    {...params}
                    size="small"
                    placeholder={placeholder}
                    variant="outlined"
                    value={value}
                    onChange={onChangeHandler}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {params.InputProps.endAdornment}
                                <SearchIcon />
                            </>
                        )
                    }}
                />
            )}
        />
    );
};






