import Image from 'next/image';

export default function Hero() {
    return (
        <hero className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <div
                    className="relative container mx-auto flex flex-row text-center dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
                    <div className="container mx-auto flex flex-col items-start justify-around text-left">
                        <h1 className="text-4xl font-bold">Prarup Gurung</h1>
                        <h2 className="text-2xl mt-2">Full Stack Developer</h2>
                        <p className="mt-4 max-w-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan dui, duis ornare repudiare
                            persius.
                        </p>
                        <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded">
                            Download CV
                        </button>
                    </div>
                    <div className="container mx-auto flex flex-col items-center justify-center text-center">
                        <Image
                            src="/profile.jpeg" // replace with your image path
                            alt="Profile Picture"
                            width={150}
                            height={150}
                            className="rounded-full mb-4"
                        />
                    </div>
                </div>
        </hero>
    );
}
