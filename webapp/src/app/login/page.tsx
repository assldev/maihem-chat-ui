import { LoginForm } from "@/components/LoginForm";
import Image from "next/image";

export default function LoginPage() {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <Image src="/maihem-logo-transparent.png" alt="Maihem Logo" width={150} height={75} />
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    );
  }
  