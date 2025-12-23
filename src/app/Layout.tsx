import { Outlet, useLocation } from "react-router";
import { Header } from "@/shared/components/Header"; // Header 위치에 맞게 수정
import { useAuthStore } from "@/store/authStore";

export function Layout() {
  const { isLoggedIn } = useAuthStore();
  const location = useLocation();

  const hideHeader = !isLoggedIn && location.pathname === "/";

  return (
    <>
      {!hideHeader && <Header />}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}
