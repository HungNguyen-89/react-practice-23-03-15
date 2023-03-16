import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalAddNew = (props) => {
  const { handleClose, show } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleSaveUser = () => {
    console.log(">>> check state: ", name, job);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <div>
              <form>
                <div className="mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label>Job</label>
                  <input
                    type="text"
                    className="form-control"
                    value={job}
                    onChange={(e) => {
                      setJob(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSaveUser();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNew;
