"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { defaultCategories } from "@/data/categories";
import { AddTransactionForm } from "../_components/transaction-form";
import { getUserAccounts } from "@/actions/dashboard";
import { getTransaction } from "@/actions/transaction";

export default function AddTransactionPage() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const [accounts, setAccounts] = useState([]);
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const accs = await getUserAccounts();
      setAccounts(accs);

      if (editId) {
        const transaction = await getTransaction(editId);
        setInitialData(transaction);
      }
    };

    fetchData();
  }, [editId]);

  return (
    <div className="max-w-3xl mt-32 mx-auto px-5">
      <div className="flex justify-center md:justify-normal mt-32 mb-8">
        <h1 className="text-5xl gradient-title">Add Transaction</h1>
      </div>
      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
}
