import { gql, useQuery } from "@apollo/client";

export const Get_Books = gql`
  query GetBooks {
    books {
      id
      price
      title
    }
  }
`;

const GetAllData = () => {
  const { loading, data } = useQuery(Get_Books);
  return (
    <div className="px-16 py-4">
      <p className="bg-red-500 text-white w-fit p-1 rounded-sm mb-1">
        Get all data
      </p>
      {!loading ? (
        <div>
          {Array.isArray(data?.books) &&
            data?.books?.map((item: any) => {
              return (
                <div key={item.id} className="flex items-center gap-x-4">
                  <p>Id: {item.id}</p>
                  <p>{item.title}</p>
                  <p>Rs.{item.price}</p>
                </div>
              );
            })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default GetAllData;
