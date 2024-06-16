import { MouseEventHandler } from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

import { CenteredRating } from '../elements/centeredRating';
import { CenteredImage } from '../elements/centeredImage';
import { Product } from '@/types/product';
import { getTranslation } from '@/utils/translations';

export const CustomCard = ({ id, title, price, image, rating: { rate, count }, cartClickHandler }: Product & { cartClickHandler: MouseEventHandler }) => {

    return (
        <Card sx={{ p: 1, height: 570, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
                <Typography component="div" sx={{ height: 250 }}>
                    <CenteredImage src={image} alt={title} height={240} />
                </Typography>

                <Typography m={1} variant="body1" component="div" sx={{ textAlign: "center", fontSize: "14px", fontWeight: 300, letterSpacing: "0.2em" }}>
                    {title.toUpperCase()}
                </Typography>

                <CenteredRating rating={rate} count={count} />

                <Typography component="div" m={1} sx={{ textAlign: "center", fontSize: "14px", fontWeight: 300, letterSpacing: "0.2em" }}>
                    $ {price}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    variant="outlined"
                    color="inherit"
                    fullWidth
                    value={id}
                    onClick={cartClickHandler}
                    sx={{ p: 1, borderWidth: "1.5px", fontSize: "16px", fontWeight: 900, letterSpacing: "0.2em", borderRadius: 0 }}
                >
                    {getTranslation('addToCart')}
                </Button>
            </CardActions>
        </Card>
    );
}

