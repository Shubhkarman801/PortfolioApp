import { Typewriter } from 'react-simple-typewriter'

const Perloader = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white text-5xl font-poppins flex flex-col items-center justify-center'>
      <span className='text-purple-400'>
        <Typewriter
          words={['Hello', 'नमस्ते', 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ','']}
          loop={false}
          typeSpeed={134}
          deleteSpeed={75}
          delaySpeed={500}
          cursor
          cursorStyle='|'
        />
      </span>
    </div>
  )
}

export default Perloader