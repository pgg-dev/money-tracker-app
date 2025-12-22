import { Outlet } from "react-router";
import { Header } from "@/shared/components/Header"; // Header 위치에 맞게 수정

export function Layout() {
  return (
    <>
      <Header />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </>
  );
}
