import CharLength from "@/components/CharLength";
import IncludeChecks from "@/components/IncludeChecks";
import PasswordBox from "@/components/PasswordBox";
import GenerateButton from "@/components/GenerateButton";
import PasswordStrength from "@/components/PasswordStrength";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        <div className="max-w-96 flex flex-col justify-center items-center">
          <div className="mb-2">
            <PasswordBox />
          </div>
          <div className="bg-box w-80 h-30">
            <CharLength />
            <IncludeChecks />
            <PasswordStrength />
            <GenerateButton />
          </div>
        </div>
      </div>
    </>
  );
}
