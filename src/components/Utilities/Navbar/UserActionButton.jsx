import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex items-center justify-between gap-4">
      {user ? (
        <Link
          href="/users/dashboard"
          className="rounded-md bg-color-light px-12 py-3 text-color-secondary transition ease-in-out hover:bg-color-secondary hover:text-color-light"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="rounded-md bg-color-secondary px-12 py-3 text-color-light transition ease-in-out hover:bg-color-light hover:text-color-secondary"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
