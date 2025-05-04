import React, {useState} from 'react'
import Globe from 'react-globe.gl'
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    
    const handleCopy = () => {
        navigator.clipboard.writeText('bogdan38@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false)
        }, 1000);
    }

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>
                                Hi, I'm Bogdan
                            </p>
                            <p className='grid-subtext'>
                                With 3 years of experience, I have honed my skills in frontend and backend development.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container flex items-center justify-center flex-col h-full'>
                    <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain'/>
                        <div>
                            <p className='grid-headtext'>
                                Tech Stack
                            </p>
                            <p className='grid-subtext'>
                                I spacialize in JavaScript/TypeScript with a focus on React and Next.js ecosystems.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326] h-fit flex justify-center items-center'>
                            <Globe
                                height={356}
                                width={356}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[
                                    {
                                        lat: 44.4268,
                                        lng: 26.1063,
                                        text: "I'm here!",
                                        altitude: 0.1,
                                    },
                                ]}
                                labelAltitude={(d) => d.altitude}
                                labelDotRadius={2}
                                labelColor={() => "red"}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>
                                I work remotely across most timezones.
                            </p>
                            <p className='grid-subtext'>
                                I'm based in Romania, with remote work available.
                            </p>
                            <a href='#contact' className='w-full'>
                                <Button name='Contact Me' isBeam containerClass='w-full !mt-10'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>
                            My passions for coding
                        </p>
                        <p className='grid-subtext'>
                            I love solving problems and building things through code. Coding isn't just my profession - it is my passion.
                        </p>
                    </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>
                                Contact Me
                            </p>
                            <div className='copy-container flex justify-center space-x-2' onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt='copy'/>
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                                    oldbogdan38@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default About
