
import { MouseEvent, Children, useState, useEffect, useRef } from "react";

import { Alert, Box, Grid, Snackbar, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ProductCard } from "./cardHOC";
import { Product } from "@/types/product";
import { addItemsToCart } from "@/store/cart/actions";
import { getTranslation } from "@/utils/translations";
import { useIntersectionObserver } from "@/utils/hooks/useIntersectionObserver";

type ProductListType = {
    filters: { [key: string]: any }
}

export const ProductList = ({ filters }: ProductListType) => {

    const dispatch = useAppDispatch();
    const { products } = useAppSelector(state => state.productState);

    const { observe, unobserve } = useIntersectionObserver({
        callback: (id: string) => {
            console.log(`Prodct ${id} is in viewport and focussed by customer`);
        },
        options: {
            threshold: 0.8
        },
        delay: 3000
    });

    const componentRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        componentRefs.current.forEach((ref) => {
            if (ref) observe(ref);
        });

        return () => {
            componentRefs.current.forEach((ref) => {
                if (ref) unobserve(ref);
            });
        };
    }, [observe, unobserve]);

    const [open, handleClose] = useState(false);

    const cartClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        dispatch(addItemsToCart(e.currentTarget.value));
        handleClose(true);
    }

    return (
        <Box p={2} sx={{ bgcolor: "#F8F7FC" }} >
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                autoHideDuration={1000}
                open={open}
                onClose={() => handleClose(false)}>
                <Alert
                    onClose={() => handleClose(false)}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%', fontWeight: "bold", letterSpacing: '0.1em' }}
                >
                    {getTranslation('cartSuccess')}
                </Alert>
            </Snackbar>

            <Typography pl={1} sx={{ fontSize: "24px", fontWeight: 700, lineHeight: "29.23px" }}>
                {getTranslation("products")}
            </Typography>

            <Typography pl={1} sx={{ mt: 1, mb: 1, fontSize: "14px", fontWeight: 400, lineHeight: "16.78px" }}>
                {filters.category.toUpperCase()}
            </Typography>

            <Grid container mt={2}>
                {
                    products.length > 0 ? Children.toArray(products.map((productObj: Product, index: number) =>
                        <Grid item xs={12} md={2.75} p={1}>
                            <div
                                key={productObj.title}
                                id={productObj.title}
                                ref={(el: any) => (componentRefs.current[index] = el)}
                            >
                                <ProductCard {...productObj} cartClickHandler={cartClickHandler} />
                            </div>
                           
                        </Grid>
                    )) :

                        <Grid item xs={12} p={1}>
                            <Typography component={"div"} sx={{ height: '100vh', textAlign: "center" }}>
                                {getTranslation('ZeroProducts')}
                            </Typography>
                        </Grid>
                }
            </Grid>
        </Box>
    )
}