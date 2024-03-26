import Condition from "./components/Condition";

import FormHandling from "./components/FormHandling";
import TableData from "./components/tableData";
import Counter from "./counter/page";

export default function Home() {
  return (
    <>
      <Condition />

      <TableData />

      <Counter />
      <FormHandling />
    </>
  );
}
