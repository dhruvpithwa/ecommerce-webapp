
import { Avatar, styled } from "@mui/material";

const CustomAvatar = styled(Avatar)(({ theme }) => ({
    background: "#ffffff", 
    color: "#4536d1", 
    fontWeight: "700", 
    fontSize: "16px", 
    width: "51px", 
    height: "51px" 
}));

export const CompanyLogo: React.FC = () => {    
    return (
        <CustomAvatar>SS</CustomAvatar>
    )
}



