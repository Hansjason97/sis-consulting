import React, {useState, useEffect} from 'react'

function Carousel({ carousel }) {

    const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = ()=> {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carousel.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide =() => {
    const isLastSlide = currentIndex === carousel.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  useEffect(() => {
    const autoplay = () => {
        currentIndex === carousel.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
      }
    const intervalId = setInterval(autoplay, 5000);
    return () => {
        clearInterval(intervalId);
    };
  },[currentIndex]);

  return (
    <div className='relative w-[300px] h-[300px] group mx-auto'>
        <div style={{backgroundImage: `url(${carousel[currentIndex].url})`}} 
        className={`w-full h-full  bg-center bg-contain bg-no-repeat duration-500`}></div>
        {/**Navigation */}
        <div className='absolute opacity-0 group-hover:opacity-100 transition-all duration-150 ease-linear
        bottom-[2%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex justify-center py-2 px-[10px] rounded-full bg-secondaryBlack/[22%] w-fit gap-3'>
          { carousel.map((item,slideIndex)=>(
            <div key={slideIndex} className={ slideIndex === currentIndex ? 'cursor-pointer text-primary' : 'cursor-pointer' }
            onClick={()=> goToSlide(slideIndex)}>
              <svg height="12" width="12">
                <circle cx="6" cy="6" r="3" fill="currentColor" /> 
              </svg>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Carousel