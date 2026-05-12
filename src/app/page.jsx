import LightPillar from "@/components/lightpillar";
import Matchs from "@/components/Matchs";
import PersonalityTest from "@/components/quiz";
import Link from "next/link";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            {/* <div style={{ 
                width: '100%', 
                height: '100vh', 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                zIndex: -1, 
                pointerEvents: 'none'
            }}>
                <LightPillar
                    topColor="#5227FF"
                    bottomColor="#FF9FFC"
                    intensity={1}
                    rotationSpeed={0.3}
                    glowAmount={0.002}
                    pillarWidth={3}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={25}
                    interactive={false}
                    mixBlendMode="screen"
                    quality="low"
                />
            </div>

            <div className="relative z-10 pt-32 flex flex-col gap-20">
                <section className="container mx-auto">
                    <PersonalityTest />
                </section>
                
                <section className="container mx-auto">
                    <Matchs />
                </section>
            </div> */}
            <div>
                <Link href={"/auth/SignIn"}><h1 className="absolute top-[50%] left-[50%]">Sign in</h1></Link>
            </div>
        </main>
    )
}
