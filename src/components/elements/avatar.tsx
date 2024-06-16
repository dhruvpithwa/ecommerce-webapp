
import { Avatar, styled } from "@mui/material";

const CustomAvatar = styled(Avatar)(() => ({
    background: "#ffffff",
    color: "#4536d1",
    fontWeight: "700",
    fontSize: "16px",
    width: "51px",
    height: "51px"
}));

export const CompanyLogo = ({ label }: { label: string }) => {
    return (
        <CustomAvatar>{label}</CustomAvatar>
    )
}



