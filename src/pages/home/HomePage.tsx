import { DashboardSection, IntroSection } from "@/features/home/components";
import { useAuthStore } from "@/store/authStore";

export default function HomePage() {
  const { isLoggedIn } = useAuthStore();

  return (
    <div className="home-container">
      {isLoggedIn ? <DashboardSection /> : <IntroSection />}
    </div>
  );
}
