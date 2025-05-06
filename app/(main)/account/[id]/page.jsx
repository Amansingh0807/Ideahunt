import { notFound } from "next/navigation"; // Import notFound for handling missing IDs

// Ensure this is an async server component
export default async function AccountPage({ params }) {
  const accountId = params?.id; // Safely access params.id

  if (!accountId) {
    notFound(); // Handle missing ID gracefully
  }

  // Fetch account data using the accountId
  const accountData = await fetchAccountData(accountId);

  if (!accountData) {
    notFound(); // Handle case where account data is not found
  }

  return (
    <div>
      <h1>Account Details</h1>
      <p>Account ID: {accountId}</p>
      <p>Account Name: {accountData.name}</p>
      <p>Account Balance: {accountData.balance}</p>
    </div>
  );
}

// Example function to fetch account data
async function fetchAccountData(accountId) {
  // Replace this with your actual API call or database query
  const response = await fetch(`/api/accounts/${accountId}`);
  if (!response.ok) {
    return null;
  }
  return response.json();
}