import { Suspense } from "react";
import { getUserAccounts, getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { getUserSalaries } from "@/actions/salary"; // <-- new
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { CreateSalaryDrawer } from "@/components/create-salary-drawer"; // <-- new
import { SalaryCard } from "./_components/salary-card"; // <-- new

import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";

export default async function DashboardPage() {
  const [accounts, transactions, salaries] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
    getUserSalaries(), // <-- fetch salaries
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="space-y-8">
      {/* Dashboard Overview */}
      <DashboardOverview
        accounts={accounts}
        transactions={transactions || []}
      />

      {/* Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 mb-16 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>

        {accounts.length > 0 &&
          accounts.map((account) => (
            <AccountCard key={account.id} account={account} />
          ))}
      </div>

      {/* Salary Insights */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Salary Insights</h2>

        <div className="grid gap-4 md:grid-cols-2 mb-16 lg:grid-cols-3">
          <CreateSalaryDrawer>
            <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
              <CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
                <Plus className="h-10 w-10 mb-2" />
                <p className="text-sm font-medium">Add New Salary</p>
              </CardContent>
            </Card>
          </CreateSalaryDrawer>

          {salaries?.map((salary) => (
            <SalaryCard key={salary.id} salary={salary} />
          ))}
        </div>
      </div>
    </div>
  );
}
