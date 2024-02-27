import { gql, useQuery } from "@apollo/client";

const GET_BOOK_BY_ID = gql`
  query Book($id: Int!) {
    book(id: $id) {
      id
      title
      price
    }
  }
`;

const GetById = () => {
  const { data } = useQuery(GET_BOOK_BY_ID, {
    variables: { id: 1 },
  });

  console.log(data);

  return (
    <div className="px-16 py-4">
      <p className="bg-red-500 text-white w-fit p-1 rounded-sm mb-1">
        Get by id
      </p>
      <div className="flex gap-x-3">
        <p>
          Data for id: 1 is {data?.book?.title} Rs.{data?.book?.price}
        </p>
      </div>
    </div>
  );
};

export default GetById;
