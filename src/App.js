import React from "react";
import "./App.css";
import { AlertTitle, LinkSection, TableSection } from "./OnePageProto";
import { DeleteModal, EditModal } from "./Modals";

function App() {
  const pageTitle = "Products Example";

  const linkRef = "https://github.com/pfuller/ReactOnePageProtoLibrary";
  const linkText = "React One Page Proto Library on Github";

  const tableDescription = {
    itemName: "Product",
    itemNamePlural: "Products",
    headings: ["Name", "Section", "Stock", "Price"],
    tableData: [
      ["Lettuce", "Fruit & Veg", "78", "0.56"],
      ["Wholemeal Loaf 800g", "Bakery", "23", "1.10"],
      ["Mince 10% Fat 500g", "Butchery", "13", "2.78"],
      ["Full Fat Milk 4pt", "Provisions", "123", "1.17"],
      ["Large Ham & Pineapple Pizza", "Provisions", "5", "2.79"],
      ["Lime Cordial", "Grocery", "32", "1.37"]
    ],
    trailer: ["Edit", "Delete"]
  };

  return (
    <div className="App">
      <AlertTitle title={pageTitle} />
      <TableSection tableDescription={tableDescription} />
      <div>&nbsp;</div>
      <LinkSection linkRef={linkRef} linkText={linkText} />
      <DeleteModal tableDescription={tableDescription} />
      <EditModal tableDescription={tableDescription} />
    </div>
  );
}

export default App;
