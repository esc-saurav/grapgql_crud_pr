import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Get_Books } from "../QueryActions/GetAllData";

const DELETE_BOOK = gql`
  mutation DeleteBook($id: Int!) {
    deleteBook(id: $id)
  }
`;

const DeleteData = () => {
  const [id, setId] = useState("");
  const [deleteBook, { data }] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: Get_Books }],
  });

  const handleDelete = (e: any) => {
    e.preventDefault();
    if (parseInt(id) < 0) return;
    deleteBook({ variables: { id: parseInt(id) } });
  };

  return (
    <div className="px-16 py-4">
      <p className="bg-red-500 text-white w-fit p-1 rounded-sm mb-1">
        Delete data
      </p>
      <form onSubmit={handleDelete} className="flex items-center gap-x-1">
        <input
          className="outline-none border-2 border-blue-600 py-1 px-2 rounded-sm"
          onChange={(e) => setId(e.target.value)}
          type="number"
          placeholder="Enter id to delete"
        />
        <button
          type="submit"
          className="w-fit bg-blue-600 text-white p-1.5 rounded-sm"
        >
          Submit
        </button>
      </form>
      {data && <p className="text-sm text-green-500">{data?.deleteBook}</p>}
    </div>
  );
};

export default DeleteData;
