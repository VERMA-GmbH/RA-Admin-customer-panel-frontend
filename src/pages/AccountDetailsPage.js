import React from "react";
import adminLayout from "../hoc/adminLayout";
import ModalComponent from "../components/ModalComponent";
class TypographyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  modalFooterContent() {
    return (
      <>
        <div style={{ width: "100%" }}>
          <button className="btn btn-default">Save</button>
        </div>
      </>
    );
  }

  modalContent() {
    return (
      <>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </>
    );
  }

  render() {
    return (
      <>
        <div className="table-container">
          <div className="row">
            <div className="col">
              <h5 className="pb-2 mb-0">Table</h5>
            </div>
            <div className="col text-right">
              <button className="btn btn-default low-height-btn">
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="d-flex text-muted">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Source</th>
                  <th>Created On</th>
                  <th>Updated On</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Peter</td>
                  <td>peter.h@msn.com</td>
                  <td>Website</td>
                  <td>23-aug-2019</td>
                  <td>26-aug-2019</td>
                  <td>
                    <div className="dropdown table-action-dropdown">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonSM"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonSM"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            &nbsp;Edit
                          </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            &nbsp;Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Ashwani Dhiman</td>
                  <td>ashwani.dhiman@abc.com</td>
                  <td>IPO</td>
                  <td>23-aug-2019</td>
                  <td>26-aug-2019</td>
                  <td>
                    <div className="dropdown table-action-dropdown">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonSM"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonSM"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            &nbsp;Edit
                          </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            &nbsp;Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Ashwani Dhiman</td>
                  <td>ashwani.dhiman@abc.com</td>
                  <td>IPO</td>
                  <td>23-aug-2019</td>
                  <td>26-aug-2019</td>
                  <td>
                    <div className="dropdown table-action-dropdown">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonSM"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonSM"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            &nbsp;Edit
                          </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            &nbsp;Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>Gagan Chhabra</td>
                  <td>gagan@abc.com</td>
                  <td>IPO</td>
                  <td>23-aug-2019</td>
                  <td>26-aug-2019</td>
                  <td>
                    <div className="dropdown table-action-dropdown">
                      <button
                        className="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButtonSM"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonSM"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            &nbsp;Edit
                          </a>
                        </li>
                        <div className="dropdown-divider"></div>
                        <li>
                          <a className="dropdown-item text-danger" href="#">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            &nbsp;Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="table-bottom-center-pagination"
            aria-label="Page navigation example "
          >
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h6 className="border-bottom pb-2 mb-0">Modals</h6>
          <div>
            <div className="bd-example">
              <div className="d-flex justify-content-between flex-wrap">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalDefault"
                >
                  Launch demo modal
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#fullScreenModalDefault"
                >
                  Launch Full Screen modal
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#leftModalDefault"
                >
                  Left sidebar modal
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#rightModalDefault"
                >
                  Right sidebar modal
                </button>
              </div>
            </div>
          </div>
          {/* modals */}
          <ModalComponent
            title="Default Modal"
            footerContent={this.modalFooterContent()}
            content={this.modalContent()}
            dataBsBackdrop="static"
            id="exampleModalDefault"
          />
          {/* full screen */}
          <ModalComponent
            title="Full Screen Modal"
            footerContent={this.modalFooterContent()}
            content={this.modalContent()}
            fullScreen="true"
            dataBsBackdrop="static"
            id="fullScreenModalDefault"
          />
          {/* right modal */}
          <ModalComponent
            title="Right Sidebar Modal"
            footerContent={this.modalFooterContent()}
            content={this.modalContent()}
            className="right"
            dataBsBackdrop="static"
            id="rightModalDefault"
          />
          {/* left modal */}
          <ModalComponent
            title="Left Sidebar Modal"
            footerContent={this.modalFooterContent()}
            content={this.modalContent()}
            className="left"
            dataBsBackdrop="static"
            id="leftModalDefault"
          />
        </div>

        <div className="my-3 p-3 bg-body rounded shadow-sm">
          <h6 className="border-bottom pb-2 mb-0">Accordins</h6>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h4>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h4>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h4 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h4>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default adminLayout(TypographyPage);
