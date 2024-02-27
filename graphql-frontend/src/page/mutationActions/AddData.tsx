import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Get_Books } from "../QueryActions/GetAllData";

const ADD_BOOK = gql`
  mutation AddBook($booksArgs: AddBookArgs!) {
    addBook(addBookArgs: $booksArgs)
  }
`;

const AddData = () => {
  const [data, setData] = useState<any>({
    id: "",
    title: "",
    price: "",
  });

  const [addBook, { data: resdata }] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: Get_Books }],
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (data.id < 0) return;
    if (data.title.length === 0) return;
    if (data.price < 0) return;
    let dataTosend = {
      id: parseInt(data?.id),
      title: data?.title,
      price: parseInt(data?.price),
    };
    addBook({ variables: { booksArgs: dataTosend } }).then((res) => {
      if (res?.data) {
        setData({
          id: "",
          title: "",
          price: "",
        });
      }
    });
  };

  return (
    <div className="px-16 py-4">
      <p className="bg-red-500 text-white w-fit p-1 rounded-sm mb-1">
        Add data
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[300px] gap-y-2"
      >
        <input
          autoFocus
          value={data.id}
          type="number"
          className="outline-none border-2 border-blue-600 py-1 px-2 rounded-sm"
          onChange={(e) =>
            setData((prev: any) => ({ ...prev, id: e.target.value }))
          }
          placeholder="add id"
        />
        <input
          value={data.title}
          className="outline-none border-2 border-blue-600 py-1 px-2 rounded-sm"
          onChange={(e) =>
            setData((prev: any) => ({ ...prev, title: e.target.value }))
          }
          placeholder="add title"
        />
        <input
          value={data.price}
          type="number"
          className="outline-none border-2 border-blue-600 py-1 px-2 rounded-sm"
          onChange={(e) =>
            setData((prev: any) => ({
              ...prev,
              price: e.target.value,
            }))
          }
          placeholder="add price"
        />
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-fit bg-blue-600 text-white p-1.5 rounded-sm"
          >
            Submit
          </button>
          {resdata && (
            <p className="text-sm text-green-500">{resdata?.addBook}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddData;
