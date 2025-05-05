// components/create-salary-drawer.jsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";

const schema = z.object({
  amount: z.coerce.number().positive(),
  source: z.string().min(1),
  receivedDate: z.string(),
});

export function CreateSalaryDrawer({ children }) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      amount: "",
      source: "",
      receivedDate: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/salary", data);
      reset();
      setOpen(false);
      window.location.reload();
    } catch (error) {
      console.error("Error adding salary:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Salary</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Amount</Label>
            <Input type="number" {...register("amount")} />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Source</Label>
            <Input {...register("source")} />
            {errors.source && (
              <p className="text-red-500 text-sm">{errors.source.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label>Received Date</Label>
            <Input type="date" {...register("receivedDate")} />
            {errors.receivedDate && (
              <p className="text-red-500 text-sm">
                {errors.receivedDate.message}
              </p>
            )}
          </div>
          <Button type="submit">Add</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
