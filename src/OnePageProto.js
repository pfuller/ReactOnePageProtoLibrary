import React from 'react';

//#region Components

/*
* Component to display a banner across the page and update the full page title
*/
export const AlertTitle = props => {
  document.title = props.title;

  return (
    <div className="container-fluid">
      <div>&nbsp;</div>
      <div className="alert alert-primary" role="alert">
        {props.title}
      </div>
    </div>
  );
};

/*
* Component to display a Link
*/
export const LinkSection = props => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm">
        <a
          href={props.linkRef}
          className="btn btn-outline-primary"
          role="button"
        >
          {props.linkText}
        </a>
      </div>
    </div>
  </div>
);

/*
* Customisable Table Component Container
*/
// TODO: Make Add Buttons Configurable
export const TableSection = props => (
  <div className="card">
    <div className="container-fluid">
      <div className="col-sm" style={{ fontSize: 4 }}>
        &nbsp;
      </div>
      <div className="row">
        <div className="col-sm">
          <button
            className="btn btn-info"
            type="button"
            data-toggle="modal"
            data-target="#AddEntryModal"
          >
            Add Entry
          </button>
        </div>
      </div>
      <div className="col-sm" style={{ fontSize: 4 }}>
        &nbsp;
      </div>
      <div className="row">
        <CustomTable tableDescription={props.tableDescription} />
      </div>
    </div>
  </div>
);

/*
* Button Component that Shows a Modal and is displayed as a link
*/
export const ShowModalLinkButton = props => {
  const modalTarget = "#" + props.Name + "Modal";

  return (
    <td>
      <button
      type="button"
      className="btn btn-link"
      data-toggle="modal"
      data-target={modalTarget}
      >
      {props.Name}
      </button>
    </td>
  )
}

//#endregion

//#region sub components

/*
* Main Table Container
*/
const CustomTable = props => (
  <div className="col-sm">
    <table className="table table-bordered table-sm table-hover"></table>
    <div className="col-sm">
      <table className="table table-bordered table-sm table-hover">
        <CustomTableHeader tableDescription={props.tableDescription} />
        <CustomTableRows tableDescription={props.tableDescription} />
      </table>
    </div>
  </div>
);

/*
* Table Header Section
*/
const CustomTableHeader = props => {
  const trailerSpan = props.tableDescription.trailer.length;

  return (
    <thead>
      <tr>
        {props.tableDescription.headings.map(headingText => (
          <CustomTableHeaderColumn
            key={headingText}
            headingText={headingText}
          />
        ))}
        <th scope="col" colSpan={trailerSpan}></th>
      </tr>
    </thead>
  )
};

/*
* Table Header Cell Entry
*/
const CustomTableHeaderColumn = props => {
  return <th scope="col">{props.headingText}</th>;
};

/*
* Container for Table Rows
*/
const CustomTableRows = props => (
  <tbody>
    {props.tableDescription.tableData.map(tableRow => (
      <CustomTableRow key={getHashCode(tableRow)} rowData={tableRow} trailer={props.tableDescription.trailer}/>
    ))}
  </tbody>
);

/*
* Container for individual Table row
*/
const CustomTableRow = props => (
  <tr>
    {props.rowData.map(entry => (
      <CustomTableRowCell key={getHashCode(entry)} value={entry} />
    ))}
    {props.trailer.map(entry => (
      <ShowModalLinkButton key={getHashCode(entry)} Name={entry} />
    ))}
  </tr>
);

/*
* Individual Table Data Cell
*/
const CustomTableRowCell = props => {
  return <td>{props.value}</td>;
};

//#endregion

//#region sub Functions

/*
* Calculates a hash value from the input object, used to generate id's
*/
function getHashCode(obj) {
  var hash = 0;

  Object.keys(obj).forEach(fld => {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    const myField = obj[fld];

    for (var i = 0; i < myField.length; i++) {
      hash = (hash << 5) - hash + myField.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
  });

  return hash;
}

//#endregion
