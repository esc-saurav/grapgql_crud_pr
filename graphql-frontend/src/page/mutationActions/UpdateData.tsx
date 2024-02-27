import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { Get_Books } from "../QueryActions/GetAllData";

const GET_BOOK_BY_ID = gql`
  query Book($id: Int!) {
    book(id: $id) {
      id
      title
      price
    }
  }
`;

const UPDATE_BOOK = gql`
  mutation UpdateBook($id: Int!, $updateBookArgs: AddBookArgs!) {
    updateBook(id: $id, updateBookArgs: $updateBookArgs)
  }
`;

const UpdateData = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState<any>({
    id: "",
    title: "",
    price: "",
  });

  const [getBookById, { data: resData }] = useLazyQuery(GET_BOOK_BY_ID);
  const [updateBook, { data: updateResData }] = useMutation(UPDATE_BOOK, {
    refetchQueries: [{ query: Get_Books }],
  });

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (parseInt(id) < 0) return;
    getBookById({ variables: { id: parseInt(id) } }).then((res) => {
      if (res?.data) {
        setId("");
      }
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (data.id < 0) return;
    if (data.title.length === 0) return;
    if (data.price < 0) return;
    let dataTosend = {
      title: data?.title,
      price: parseInt(data?.price),
    };
    updateBook({
      variables: { id: parseInt(data?.id), updateBookArgs: dataTosend },
    }).then((res) => {
      if (res?.data) {
        setData({
          id: "",
          title: "",
          price: "",
        });
      }
    });
  };

  useEffect(() => {
    if (resData && resData?.book?.id) {
      setData({
        id: String(resData?.book?.id),
        title: resData?.book?.title,
        price: resData?.book?.price,
      });
    } else {
      setData({
        id: "",
        title: "",
        price: "",
      });
    }
  }, [data?.id, resData?.book?.id]);

  return (
    <div className="px-16 py-4">
      <p className="bg-red-500 text-white w-fit p-1 rounded-sm mb-1">
        Update data
      </p>
      <form onSubmit={handleSearch} className="flex items-center gap-x-1">
        <input
          className="outline-none border-2 border-blue-600 py-1 px-2 rounded-sm"
          onChange={(e) => setId(e.target.value)}
          type="number"
          placeholder="Enter id to Search"
        />
        <button
          type="submit"
          className="w-fit bg-blue-600 text-white p-1.5 rounded-sm"
        >
          Search
        </button>
      </form>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-4 max-w-[300px] gap-y-2"
      >
        <input
          value={data?.title}
          className="outline-none border-2 border-blue-600 py-1 px-2 rounded-sm"
          onChange={(e) =>
            setData((prev: any) => ({ ...prev, title: e.target.value }))
          }
          placeholder="update title"
        />
        <input
          value={data?.price}
          type="number"
          className="outline-none border-2 border-blue-600 py-1 px-2 rounded-sm"
          onChange={(e) =>
            setData((prev: any) => ({
              ...prev,
              price: e.target.value,
            }))
          }
          placeholder="update price"
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-fit bg-blue-600 text-white p-1.5 rounded-sm"
          >
            Update
          </button>
          {updateResData && (
            <p className="text-sm text-green-500">
              {updateResData?.updateBook}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdateData;
