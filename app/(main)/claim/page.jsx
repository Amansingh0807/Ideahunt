"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer"; // Assuming you have a Drawer component in ShadCN
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReceiptScanner } from "./_components/recipt-scanner"; // Adjust the import path as necessary
import { defaultCategories } from "@/data/categories"; // Import your categories

export default function ClaimPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editMode, setEditMode] = useState(false); // Added editMode state
  const [scannedData, setScannedData] = useState(null); 
  const [selectedCategory, setSelectedCategory] = useState(""); 

  const handlePayNow = () => {
    // Redirect to the same route
    window.location.href = "https://www.phonepe.com/";
  };

  const handleClaimNow = () => {
    // Open the drawer for the claim form
    setIsDrawerOpen(true);
  };

  const handleScanComplete = (data) => {
    // Process the scanned data
    console.log("Scanned Data:", data);
    setScannedData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const claimData = {
      title: e.target.claimTitle.value,
      amount: e.target.claimAmount.value,
      description: e.target.description.value,
      category: selectedCategory,
    };

    console.log("Claim Data:", claimData);

   
    alert("Claim submitted successfully!");
    setIsDrawerOpen(false); // Close the drawer
  };

  return (
    <div className="flex flex-col mt-15 items-center justify-center min-h-screen space-y-4">
        <div className="text-bold text-5xl mt-10 gradient-title mb-4">
            <h1>
               Pay Your Expense and Claim Your Money
            </h1>
        </div>
      <Button onClick={handlePayNow} className="w-40">
        Pay Now
      </Button>
      {/* <Button onClick={handleClaimNow} variant="outline" className="w-40">
        Claim Now
      </Button> */}

      {/* Drawer for Claim Form */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Create Claim</h2>
          {!editMode && (
            <ReceiptScanner onScanComplete={handleScanComplete} />
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-4">
              <Label htmlFor="claimTitle">Claim Title</Label>
              <Input
                id="claimTitle"
                placeholder="Enter claim title"
                defaultValue={scannedData?.title || ""}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="claimAmount">Claim Amount</Label>
              <Input
                id="claimAmount"
                type="number"
                placeholder="Enter amount"
                defaultValue={scannedData?.amount || ""}
              />
            </div>
            <div className="mb-4">
  <Label htmlFor="description">Description</Label>
  <textarea
    id="description"
    placeholder="Enter claim description"
    className="w-full border border-gray-300 rounded-md p-2"
    rows="1"
    defaultValue={scannedData?.description || ""}
  ></textarea>
</div>
            <div className="mb-4">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                className="w-full border border-gray-300 rounded-md p-2"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="" disabled>
                  Select a category
                </option>
                {defaultCategories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <Button type="submit" className="w-full">
              Submit Claim
            </Button>
          </form>
        </div>
      </Drawer>
    </div>
  );
}