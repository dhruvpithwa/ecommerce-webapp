
import { useCallback } from "react";
import { ChangeEvent, MouseEvent, Children, useEffect } from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";

import useDebounce from "@/utils/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchProducts } from "@/store/product/actions";

import { CustomLink } from "../elements/link";

import { RoundButton } from "@/components/elements/roundButton";
import { RoundSearch } from "@/components/elements/roundSearch";
import { RoundDropdown } from "@/components/elements/roundSelect";
import { productSortByAttributes } from "../../utils/constants/constants";
import { getTranslation } from "@/utils/translations";

type ProductFiltersType = {
    filters: { [key: string]: any},
    filterChangeHandler: (key: string, value: unknown) => void;
}

export const ProductFilters = ({ filters, filterChangeHandler }: ProductFiltersType) => {

    const dispatch = useAppDispatch();
    const { productCategories } = useAppSelector(state => state.productState);

    const debouncedValue = useDebounce(filters, 300);

    const filterProducts = useCallback(async () => {
        dispatch(fetchProducts(filters));
    }, [debouncedValue]);

    useEffect(() => {
        filterProducts();
    }, [debouncedValue, filterProducts]);

    return (
        <Box>
            <AppBar position="relative" sx={{ bgcolor: "#FFFFFF" }}>
                <Toolbar>
                    <Grid container pt={4} pb={3}>

                        <Grid item xs={12} md={2}>
                            <Typography sx={{ color: "#000000", fontSize: 14, fontWeight: "bold", marginLeft: "4px" }}>
                                {getTranslation('filter')}
                            </Typography>
                            <RoundDropdown
                                id={"product-select"}
                                value={filters.category}
                                options={productCategories.map((category: string) => {
                                    
                                    return {
                                        key: category,
                                        component: <CustomLink path={`/product-list/${category}`} label={category}/>
                                    }
                                })}
                            />
                        </Grid>

                        <Grid item xs={12} md={1}>
                            &nbsp;
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Typography sx={{ color: "#000000", fontSize: 14, fontWeight: "bold", marginLeft: "4px" }}>
                                {getTranslation('sortBy')}
                            </Typography>
                            {
                                Children.toArray(productSortByAttributes.map(({ label, value }: { label: string, value: string }) =>
                                    <RoundButton
                                        id={`product-sort-${value.toLowerCase()}`}
                                        value={value}
                                        label={label}
                                        isActive={value === filters.order}
                                        onClickHandler={(e: MouseEvent<HTMLButtonElement>) => { filterChangeHandler("order", e.currentTarget.value) }}
                                    />))
                            }
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <Typography sx={{ color: "#000000", fontSize: 14, fontWeight: "bold", marginLeft: "4px" }}>
                                &nbsp;
                            </Typography>
                            <RoundSearch
                                id={"product-search"}
                                placeHolder={getTranslation('productSearchByCategory')}
                                value={filters.q}
                                onChangeHandler={(e: ChangeEvent<HTMLInputElement>) => { filterChangeHandler("q", e.target.value) }}
                            />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}