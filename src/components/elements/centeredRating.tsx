
import { Rating, Typography } from "@mui/material";

export const CenteredRating = ({ rating, count }: { rating: number, count: number }) => {
    return (
        <Typography 
            component="div"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Rating 
                name="centered-rating" 
                size="small"
                value={rating} 
                sx={{
                    '& .MuiRating-iconFilled': {
                      color: '#000000'
                    }
                }}
                readOnly
            />
            <Typography variant="body1" style={{ marginLeft: 8, fontWeight: 300, letterSpacing: "0.2em" }}>
                ({count})
            </Typography>
        </Typography>
    );
};
