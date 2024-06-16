
import { ChangeEvent, useEffect, useState, useCallback } from "react";

import useDebounce from "@/utils/hooks/useDebounce";
import { searchProducts } from "@/store/product/actions";
import { useAppDispatch } from "@/store/hooks";
import { CustomAutocomplete } from "@/components/elements/autocomplete";
import { getTranslation } from "@/utils/translations";

export const ProductSearch = () => {

    const dispatch = useAppDispatch();

    const initOptions: {label: string}[] = [];
    const [value, setSearchValue] = useState("");
    const [options, setOptions] = useState(initOptions);

    const debouncedValue = useDebounce(value, 300);

    const search = useCallback(async () => {
        const products = await dispatch(searchProducts(value));
        setOptions(products ?? []);
    }, [debouncedValue]);

    useEffect(() => {
        search();
    }, [debouncedValue, search]);

    return (
        <CustomAutocomplete
            id={"product-search-global"}
            value={value}
            placeholder={getTranslation("productSearch")}
            options={options}
            onChangeHandler={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
        />
    )
}






