import { useIsMounted } from "hooks";
import { useEffect, useState } from "react";
import moment from "moment";
const useUsers = () => {
  const { isMounted } = useIsMounted();
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const BASE_URL = "https://randomuser.me/api/?results=10";
        const { results } = await (await fetch(BASE_URL)).json();
        if (isMounted.current)
          setUsers(
            results?.map((item, index) => ({
              ...item,
              index,
              created_at: moment(item?.registered?.date).format(
                "Do MMM YYYY hh:mm A"
              ),
              displayName: `${item?.name?.title} ${item?.name?.first} ${item?.name?.last}`,
              country: item?.location?.country,
            }))
          );
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [isMounted]);

  return { users };
};

export default useUsers;
