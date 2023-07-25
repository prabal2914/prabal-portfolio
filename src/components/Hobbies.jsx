import React , {useState} from 'react'
import {motion} from 'framer-motion'
import guitar from '../assets/hobbies/guitar.png'
import art from '../assets/hobbies/art.png'
import football from '../assets/hobbies/football.png'

const Hobbies = () => {
    const [expandedIndex, setexpandedIndex] = useState(null)
    const handlecardClick = (index) =>{
        setexpandedIndex(index === expandedIndex ? -1 : index)
    }
    const cardVariants = {
        expanded: {
            width: "400px"
        },
        collapsed: {
            width: "200px"
        }
    }

    const cardImages = [football,guitar,art]
    const cardNames = ['Football', 'Guitar', 'Art']
    const cardDescriptions =[
        "I like to play football in my free time and workout for fitness.",
        "I like to play the guitar and listen to music.",
        "I love to draw in my free time , it keeps me focussed and creative.",
    ]
  return (
    <section className='py-16 pb-[300px] bg-gradient-to-b from-gray-800 to-black '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-3xl ml-25 font-extrabold inline border-b-4 border-gray-500 text-white'>Hobbies</h1>
        </div>
        <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
        {[0,1,2].map((index)=>(
            <motion.div 
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index=== expandedIndex ? 'expanded' : ''}`}
            variants={cardVariants}
            animate={index=== expandedIndex ? 'expanded' : 'collapsed'}
            transition ={{duration: 0.5}}
            onClick={()=> handlecardClick(index)}
            style={{
                backgroundImage: `url(${cardImages[index]})`,
            }}
            >
                <div className='card-content h-full  flex flex-col justify-end'>
                    <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-white text-center'>
                        {cardNames[index]}
                    </h2>
                  {index=== expandedIndex &&(
                        <p className=' mt-2 font-semibold text-white text-center' >{cardDescriptions[index]}</p>

                  )}

</div>
                </div>
            </motion.div>




        ))}




        </div>


    </section>
  )
}

export default Hobbies
