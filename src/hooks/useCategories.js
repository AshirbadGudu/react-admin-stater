import { useIsMounted } from "hooks";
import moment from "moment";
import { useEffect, useState } from "react";
const useCategories = () => {
  const { isMounted } = useIsMounted();
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const BASE_URL = "https://fakestoreapi.com/products/categories";
        const results = await (await fetch(BASE_URL)).json();
        if (isMounted.current)
          setCategories(
            results?.map((name, index) => ({
              name,
              id: `${index}`,
              index,
              created_at: moment().format("Do MMM YYYY hh:mm A"),
            }))
          );
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, [isMounted]);

  return { categories };
};

export default useCategories;
