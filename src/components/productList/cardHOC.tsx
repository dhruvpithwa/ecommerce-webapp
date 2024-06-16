
import { MouseEventHandler } from 'react';
import { Product } from '@/types/product';
import { CustomCard } from './card';

const ProductCardHOC = (WrappedComponent: any) => {
    const HOC = (props: Product & { cartClickHandler: MouseEventHandler }) => {
      return (
        <>
            {
                props.rating.rate > 4 ? 
                    <div style={{border: '0.5px solid red' }}> 
                        <WrappedComponent {...props} />
                    </div>
                : <WrappedComponent {...props} />
            }
        </>
        );
    }
    HOC.displayName = 'higherOrderComponent';
    return HOC;
  }
  

export const ProductCard = ProductCardHOC(CustomCard);