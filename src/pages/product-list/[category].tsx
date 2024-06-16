
import { wrapper } from "@/store";
import { fetchProducts, fetchProductCategories } from "@/store/product/actions";
import { Products } from "@/components/productList";

const ProductList = () => {
  return (
    <>
      <Products />
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async (context) => {

      const { category }: any = context.query;

      await Promise.all([
        store.dispatch(fetchProductCategories()),
        store.dispatch(fetchProducts({ category: category }))
      ])
      return { props: {} };

    }
);

export default ProductList;