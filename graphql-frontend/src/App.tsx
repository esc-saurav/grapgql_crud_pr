import GetAllData from "./page/QueryActions/GetAllData";
import GetById from "./page/QueryActions/GetById";
import GetByIdLazyQuery from "./page/QueryActions/GetByIdLazyQuery";
import AddData from "./page/mutationActions/AddData";
import DeleteData from "./page/mutationActions/DeleteData";
import UpdateData from "./page/mutationActions/UpdateData";

function App() {
  return (
    <div className="grid grid-cols-2">
      <div>
        <GetAllData />
        <GetById />
        <GetByIdLazyQuery />
        <AddData />
        <DeleteData />
      </div>
      <div>
        <UpdateData />
      </div>
    </div>
  );
}

export default App;
