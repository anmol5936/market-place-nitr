
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Hero() {
    const [text] = useTypewriter({
        words: ['Everything you need,', 'All in one place'],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <section className="h-screen grid place-items-center">
            <div className="flex items-center flex-col ">
                <p className="text-center font-dmSans md:text-5xl text-4xl flex flex-col gap-5 w-auto">
                    <span className="text-pri-100">
                        {text}
                        <Cursor />
                    </span>
                </p>
                <p className="text-blk-10 mt-14 md:w-96 w-auto md:text-lg text-base text-center">
                    A collection of used goods from your fellow NIT members is
                    available, offering a variety of pre-owned items.
                </p>
                <div className="flex md:flex-row justify-between items-center mt-10 gap-5 flex-col px-10 w-full md:px-0">
                    <button className="btn-secondary w-full">
                        Browse Products
                    </button>
                    <button className="btn-outline w-full">Know More</button>
                </div>
            </div>
        </section>
    );
}
