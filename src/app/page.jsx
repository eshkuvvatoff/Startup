import Matchs from "@/components/Matchs";
import PersonalityTest from "@/components/quiz";
import Link from "next/link";

export default function Home() {
    return (
        <div className="pt-32">
            <h1>MAIN PAGE CODE + </h1>
            <Matchs />
            <PersonalityTest />


            <Link href={"/auth/SignUp"}>
                <button>
                    SignUp test
                </button>
            </Link>
            <Link href={"/auth/SignIn"}>
                <button>
                    SignIn test
                </button>
            </Link>
        </div>
    )
}