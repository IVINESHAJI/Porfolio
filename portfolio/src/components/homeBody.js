import React from 'react';
import '../styles/homeBody.css';
import personalImg from '../images/IVINE.jpg';
import { motion } from 'framer-motion';

const HomeBody = () => {

    const text1 = "Hi, I am".split(" ");
    const text2 = "Ivine Shaji Kakkanat".split(" ");

    return(
        <main>
            <div className="homeCar">
                <div className='homeCarSlide'>
                    <div className='name1'>
                        {text1.map((el, i) => (
                            <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 5,
                                delay: i / 20,
                            }}
                            key={i}
                            >
                            {el}{" "}
                            </motion.span>
                            ))
                        }
                    </div>
                    <div className='name2'>
                            {text2.map((el, i) => (
                                    <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 7,
                                        delay: i / 40,
                                    }}
                                    key={i}
                                    >
                                    {el}{" "}
                                    </motion.span>
                                ))
                            }
                    </div>
                </div>
                <div className="homeCarSmall">
                    <img src={ personalImg } alt="PersonalImg"/>
                </div>
            </div>
        </main>
    );
}

export default HomeBody;