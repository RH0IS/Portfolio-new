import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Coder',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Digital Makerter',
                1000,
                'Content Creator',
                1000
            ]}

            speed={50}
            className="text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase"
            repeat={Infinity}
        />
    );
};

export default TextEffect