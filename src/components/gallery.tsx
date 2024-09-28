'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import imageGallery1 from '@/assets/image-gallery-1.png';
import imageGallery2 from '@/assets/image-gallery-2.png';
import Button from './button';
import assetsOverview from '@/assets/overview.png';

const images = [
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
    imageGallery1,
];

export default function EnhancedGallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [hoveredImage, setHoveredImage] = useState<number | null>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const handleCardClick = (index: number) => {
        if (selectedImage === index) {
            // setSelectedImage(null);
            setIsRevealed(!isRevealed);
            if (isRevealed) {
                setSelectedImage(null);
            }
        } else {
            setSelectedImage(index);
        }
    };

    const handleCardHover = (index: number) => {
        setHoveredImage(index);
    };

    const handleCardLeave = () => {
        setHoveredImage(null);
    };

    const getPosition = (index: number | null) => {
        if (index === null) {
            return { x: '0%', y: '0%' };
        }
        if (selectedImage === index) {
            return { x: '80%', y: '90vh', transition: { duration: 2, type: 'spring', stiffness: 300, damping: 30 } };
        }
        if (selectedImage !== null) {
            return { x: `${index * 60}%`, y: `${index * 7}%`, transition: { duration: 2, delay: 0, type: 'spring', stiffness: 300, damping: 30 } };
        }

        if (hoveredImage === null) {
            return { x: `${index * 30}%`, y: `${index * 7}%` };
        }
        const baseX = index * 30;
        if (index < hoveredImage) {
            return { x: `${baseX - 5}%`, y: `${index * 7}%` };
        }
        if (index > hoveredImage) {
            return { x: `${baseX + 5}%`, y: `${index * 7}%` };
        }
        return { x: `${baseX}%`, y: `${index * 7}%` };
    };

    return (
        <div className={`relative min-h-screen overflow-hidden transform transition-all duration-200 ${selectedImage !== null ? 'pb-60' : '-mb-96'}`}>
            <div className=" mx-auto mt-20 px-4 py-8">
                <h1 className="text-4xl w-[680px] float-right mr-28 text-black font-bold -mb-10  text-right">
                    Distribute and manage insurance business in{' '}
                    <span className="text-red-600">one platform</span>
                </h1>
                <div className="relative h-[150vh]  w-full">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            className="absolute cursor-pointer"
                            initial={{
                                x: `${index * 30}%`,
                                y: `${index * 4}%`,
                                rotateY: 20,
                                rotateZ: -2,
                                rotateX: -20,
                                scale: 0.9 - index * 0.02,
                            }}
                            animate={{
                                ...getPosition(index),
                                rotateY: selectedImage === index ? 0 : 20,
                                rotateZ: selectedImage === index ? 0 : -2,
                                rotateX: selectedImage === index ? 0 : -20,
                                scale: selectedImage === index ? 1.2 : 0.9 - index * 0.02,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={() => handleCardClick(index)}
                            onHoverStart={() => handleCardHover(index)}
                            onHoverEnd={handleCardLeave}
                        >
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 0.5 } }}
                                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                                >
                                    {(isRevealed && index === selectedImage) ? (
                                        <Image
                                            src={imageGallery2}
                                            alt={`Gallery image ${index + 1}`}
                                            width={300}
                                            height={400}
                                            className="rounded-3xl transition-all duration-200 w-full h-full aspect-[3/4] shadow-lg"
                                        />
                                    ) : (
                                        <Image
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            width={300}
                                            height={400}
                                            className="rounded-3xl transition-all duration-200 w-full h-full aspect-[3/4] shadow-lg"
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                            <AnimatePresence>
                                {selectedImage === index && (
                                    <>
                                        <motion.div

                                            initial={{ opacity: 0, x: 450, }}
                                            animate={{
                                                opacity: 1, x: 500, transition: {
                                                    delay: 0.45,
                                                    stiffness: 150, duration: 0.5
                                                }
                                            }}
                                            exit={{ opacity: 0, x: 450, transition: { duration: 0.1, delay: 0 } }}

                                            className=' absolute top-20   text-right items-end gap-4 flex flex-col w-[600px] text-black'>
                                            {isRevealed ?
                                                (<motion.h1
                                                    initial={{ opacity: 0, }}
                                                    animate={{
                                                        opacity: 1, transition: {
                                                            delay: 0.45,
                                                            stiffness: 150, duration: 0.5
                                                        }
                                                    }}
                                                    className="text-5xl transition-all transform duration-200 text-black font-bold">
                                                    {"Lorem ipsum dolor sit insurance business in "}

                                                    <span className="text-red-600">{"amet, consectetur"}
                                                    </span>
                                                </motion.h1>) :
                                                (<motion.h1
                                                    initial={{ opacity: 0, }}
                                                    animate={{
                                                        opacity: 1, transition: {
                                                            delay: 0.45,
                                                            stiffness: 150, duration: 0.5
                                                        }
                                                    }}
                                                    className="text-5xl transition-all transform duration-200 text-black font-bold">
                                                    Distribute and manage insurance business in {' '}
                                                    <span className="text-red-600">one platform
                                                    </span>
                                                </motion.h1>)
                                            }
                                            <p className='w-96 float-right'>Manage your insurance business seamlessly using Riskcovry&apos;s assurance platform. Increase revenue, expand product offerings.</p>
                                            <Button text='Schedule Demo' icon />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 200, }}
                                            animate={{
                                                opacity: 1, x: 250,
                                                y: isRevealed ? -500 : -100,
                                                transition: {
                                                    stiffness: 150, duration: 0.5
                                                }
                                            }}
                                            exit={{ opacity: 0, x: 450, transition: { duration: 0.1, delay: 0 } }}

                                            className={` absolute`}>
                                            <Image
                                                src={assetsOverview}
                                                alt={`Assets Overview`}
                                                width={800}
                                                height={800}
                                                className="w-full h-full "
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -100, y: -100 }}
                                            animate={{
                                                opacity: 1,
                                                x: -150,
                                                y: isRevealed ? -100 : -400,
                                                transition: {
                                                    stiffness: 150, duration: 0.5
                                                }
                                            }}
                                            exit={{ opacity: 0, x: 450, transition: { duration: 0.1, delay: 0 } }}

                                            className="absolute">
                                            <Image
                                                src={assetsOverview}
                                                alt={`Assets Overview`}
                                                width={250}
                                                height={250}
                                                className="w-full h-full "
                                            />
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div >
    );
}
