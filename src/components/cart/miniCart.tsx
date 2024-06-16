
import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"

import { useAppSelector } from "@/store/hooks";

export const MiniCart = () => {

    const { cart } = useAppSelector(state => state.cartState);

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Badge color="success" badgeContent={cart.length} showZero>
                <ShoppingCart sx={{fontSize: "30px"}} />
            </Badge>
        </div>
    )
}