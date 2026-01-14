import { Task } from "@/types";

export function calculateROI(revenue: number, time: number) {
  if (time <= 0) return 0;
  return Number((revenue / time).toFixed(1));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function sortTasksByROI(tasks: Task[]) {
  return [...tasks].sort(
    (a, b) =>
      calculateROI(b.revenue, b.timeTaken) -
      calculateROI(a.revenue, a.timeTaken)
  );
}
