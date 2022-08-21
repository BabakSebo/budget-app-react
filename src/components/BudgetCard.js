import { Card, ProgressBar, Stack, Button } from "react-bootstrap";
import { currencyFormatter } from "../utils";

export default function BudgetCard({ name, amount, max }) {
  const classNames = [];
  if (amount > max) classNames.push("bg-danger", "bg-opacity-10");
  if (amount === 0) classNames.push("bg-light");
  return (
    <Card>
      <Card.Body className={classNames}>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)} /
            <span className="text-muted fs-6 ms-1">
              {currencyFormatter.format(max)}
            </span>
          </div>
        </Card.Title>
        <ProgressBar
          className="rounded-pill"
          striped
          variant={getProgressBarVariant(amount, max)}
          min={0}
          max={max}
          now={amount}
        />
        <Stack direction="horizontal" className="mt-4" gap={2}>
          <Button variant="outline-primary" className="ms-auto">
            Add Expense
          </Button>
          <Button variant="outline-secondary">View Expenses</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

function getProgressBarVariant(amount, max) {
  const ratio = amount / max;
  if (ratio >= 0.5 && ratio < 0.8) return "warning";
  if (ratio >= 0.8) return "danger";
}
