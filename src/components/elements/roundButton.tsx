
import { MouseEvent } from "react";
import { Button, styled } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
    color: "#000000",
    padding: "auto 12px",
    border: "1px solid #B9B9B9",
    borderRadius: "100px",
    fontSize: "14px",
    textTransform: "none",
    fontWeight: "300",
    margin: "4px" 
}));

type RoundButtonType = {
    id: string;
    label: string;
    value: string;
    isActive: boolean;
    onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const RoundButton = ({id, value, label, isActive, onClickHandler}: RoundButtonType) => {
    return (
        <CustomButton
            id={id}
            value={value} 
            variant="outlined"
            onClick={onClickHandler}
            sx={{...(isActive ? {border: `1px solid #334685`}: {})}}
        >
            {label}   
        </CustomButton>
    );
}