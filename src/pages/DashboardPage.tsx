import { UserTab } from "../features/user/UserTab";

export function DashboardPage() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-card">
        <h1>Dashboard Page</h1>
        <p>This is your industrial React dashboard.</p>

        <UserTab />
      </section>
    </main>
  );
}