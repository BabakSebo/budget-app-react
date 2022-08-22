import { useState } from "react";
import { Container, Stack, Button } from "react-bootstrap";
import BudgetCard from "../src/components/BudgetCard";
import AddBudgetModal from "./components/addBudgetModal";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);

  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button variant="outline-secondary">Add Expense</Button>
        </Stack>
        <BudgetCard name="Entertainment" amount={400} max={1000}></BudgetCard>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => {
          setShowAddBudgetModal(false);
        }}
      />
    </>
  );
}

export default App;
