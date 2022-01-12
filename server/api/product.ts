import { useQuery } from "h3";
import { apolloClient } from "../apolloClient";
import { productByHandle } from "~/apollo/queries/productByHandle";

export default async (req) => {
  const { handle } = useQuery(req);
  try {
    const { data } = await apolloClient.query({
      query: productByHandle,
      variables: {
        handle,
      },
    });
    if (!data.productByHandle) {
      console.log("error");
      throw new Error("getProductByHandle: product not found");
    }
    return data.productByHandle;
  } catch (e) {
    return e;
  } finally {
  }
};