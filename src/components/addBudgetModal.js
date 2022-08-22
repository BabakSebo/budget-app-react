import { Modal, Form, Button } from "react-bootstrap";
import { useBudgets } from "./BudgetsContext";
import { useRef, useEffect } from "react";

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();

  useEffect(() => {
    const value = nameRef.current;
    console.log(value, "value");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current,
      max: parseFloat(maxRef.current),
    });
    console.log(nameRef.current, " manmee");
    console.log(maxRef, "max");
    console.log({ nameRef }, "namereff");
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>Maximum Spend</Form.Label>
            <Form.Control type="number" required min={0} step={0.01} />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
