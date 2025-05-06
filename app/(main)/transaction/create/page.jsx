"use client";

import React, { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { AddTransactionForm } from "../_components/transaction-form";
import { getUserAccounts } from "@/actions/dashboard";
import { getTransaction } from "@/actions/transaction";
import { defaultCategories } from "@/data/categories";

export const dynamic = "force-dynamic"; // Mark the route as dynamic

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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="max-w-3xl mt-32 mx-auto px-5">
        <div className="flex justify-center md:justify-normal mt-32 mb-8">
          <h1 className="text-5xl gradient-title">Add Transaction</h1>
        </div>
        <AddTransactionForm
          accounts={accounts}
          categories={defaultCategories} // Pass categories here
          editMode={!!editId}
          initialData={initialData}
        />
      </div>
    </Suspense>
  );
}