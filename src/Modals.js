import React from "react";

//#region Exportable Components

export const EditModal = props => {
  return (
    <div id="edit-modal">
      <div
        className="modal fade bd-example-modal-xl"
        id="EditModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="EditModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="EditModalLabel">
                Administer {props.tableDescription.itemNamePlural}
              </h5>
            </div>
            <div className="modal-body">
              <EditModalRows tableDescription={props.tableDescription} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Save &amp; Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeleteModal = props => {
  return (
    <div id="delete-modal">
      <div
        className="modal fade"
        id="DeleteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="DeleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="DeleteModalLabel">
                Delete {props.tableDescription.itemNamePlural}
              </h5>
            </div>
            <div className="modal-body">
              <p>
                Are you sure you want to delete this{" "}
                {props.tableDescription.itemName}?
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Delete {props.tableDescription.itemName}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//#endregion Components

const EditModalRows = props => {
  const firstRowData = props.tableDescription.tableData[0];
  let headingIndex = -1;

  return (
    <div className="container-fluid">
      <form>
        <div className="form-row">
          {props.tableDescription.headings.map(headingText => {
            const inputName = props.tableDescription.itemName + headingText;
            const InputHelp =
              props.tableDescription.itemName + headingText + "Help";

            // Increment the index
            headingIndex = headingIndex + 1;

            return (
              <div className="form-group col-md-12">
                <label htmlFor={inputName}>{headingText}</label>
                <input
                  type="text"
                  className="form-control"
                  id={inputName}
                  placeholder=""
                  aria-describedby={InputHelp}
                  defaultValue={firstRowData[headingIndex]}
                />
                <small id={InputHelp} className="form-text text-muted">
                  Enter {headingText}
                </small>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
