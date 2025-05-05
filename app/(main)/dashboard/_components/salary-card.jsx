// app/dashboard/_components/salary-card.jsx
import { Card, CardContent } from "@/components/ui/card";

export function SalaryCard({ salary }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <div className="text-lg font-semibold">{salary.source}</div>
        <div className="text-muted-foreground text-sm">
          Received on: {new Date(salary.receivedDate).toLocaleDateString()}
        </div>
        <div className="text-emerald-600 font-bold text-xl">
          ₹ {salary.amount.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );
}
