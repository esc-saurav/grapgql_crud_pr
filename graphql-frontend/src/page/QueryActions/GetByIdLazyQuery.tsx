import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const GET_BOOK_BY_ID = gql`
  query Book($id: Int!) {
    book(id: $id) {
      id
      title
      price
    }
  }
`;
const GetByIdLazyQuery = () => {
  const buttons = [1, 2, 3];
  const [activeButton, setActiveButton] = useState(0);

  const [getBookById, { data }] = useLazyQuery(GET_BOOK_BY_ID);

  useEffect(() => {
    getBookById({ variables: { id: activeButton } });
  }, [activeButton]);

  return (
    <div className="px-16 py-4">
      <p className="bg-red-500 text-white w-fit p-1 rounded-sm mb-1">
        Get by Lazy Query
      </p>
      <div className="flex gap-x-3 mt-2">
        {Array.isArray(buttons) &&
          buttons?.map((item) => {
            return (
              <button
                key={item}
                onClick={() => setActiveButton(item)}
                className="bg-blue-500 rounded-sm text-white p-1.5"
              >
                fetch id {item} book
              </button>
            );
          })}
      </div>
      <p className="mt-2">{data?.book?.title}</p>
    </div>
  );
};

export default GetByIdLazyQuery;
