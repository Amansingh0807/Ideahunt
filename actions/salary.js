// actions/salary.js
import { db } from "@/lib/prisma"; // Assuming Prisma is set up
import { currentUser } from "@clerk/nextjs/server";

export async function getUserSalaries() {
  const user = await currentUser();

  if (!user) return [];

  const salaries = await db.salary.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return salaries;
}
