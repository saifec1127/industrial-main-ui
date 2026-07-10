import { useEffect } from "react";
import { fetchUsers } from "../../../state/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";

export function UserTab() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <p data-testid="users-loading">Loading users...</p>;
  }

  if (error) {
    return <p data-testid="users-error">Error: {error}</p>;
  }

  return (
    <section className="user-tab">
      <h2>User Tab</h2>

      {users.length === 0 ? (
        <p data-testid="users-empty">No users found</p>
      ) : (
        <div data-testid="users-list" className="user-list">
          {users.map((user) => (
            <article key={user.id} className="user-card">
              <h3>{user.name}</h3>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
              <p>
                <strong>User ID:</strong> {user.id}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}