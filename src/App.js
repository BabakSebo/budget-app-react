import { Container, Stack, Button } from "react-bootstrap";
import BudgetCard from "../src/components/BudgetCard";

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-secondary">Add Expense</Button>
      </Stack>
      <BudgetCard name="Entertainment" amount={400} max={1000}></BudgetCard>
    </Container>
  );
}

export default App;
