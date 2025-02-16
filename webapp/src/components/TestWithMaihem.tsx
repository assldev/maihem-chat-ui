import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function TestWithMaihemWidget() {
  return (
      <Link href="/login">
        <Button variant="default">
          <Image src="/maihem-logo.png" alt="Maihem Logo" width={20} height={20} />
          Test with Maihem
        </Button>
      </Link>
  );
}