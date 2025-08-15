import Image from 'next/image'
import authorImage from '@/public/images/authors/named.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <div className="mb-4">
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300">
            • Available for freelance
          </span>
        </div>
        <h1 className='text-4xl font-bold mb-2'>
          Hey, I'm <span className="text-blue-600">Vinter.</span>
        </h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-6">UI/UX Designer & Full-Stack Developer</h2>
        <p className='mb-4 text-gray-600 dark:text-gray-300'>
          I'm a passionate designer and developer based in <strong>Nairobi, Kenya</strong>, turning bold ideas into beautiful, functional digital products.
        </p>
        <p className='mb-4 text-gray-600 dark:text-gray-300'>
          I craft intuitive user interfaces and write clean, scalable code. Whether it's building mobile apps with <strong>Flutter and React Native</strong>, creating web applications with <strong>React and Next.js</strong>, or developing backend services with <strong>Node.js</strong>, I bring energy, clarity, and creativity to every project.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
            View My Work →
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 transition-colors">
            📋 Download CV
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 transition-colors">
            💬 Get In Touch
          </button>
        </div>
      </div>
      <div className='relative'>
        <div className="relative">
          <Image
            className='rounded-2xl shadow-lg'
            src={authorImage}
            alt='Vinter Achieno'
            width={320}
            height={380}
            priority
          />
          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white rounded-lg px-3 py-2 text-sm font-bold shadow-lg">
            <div className="text-2xl">2+</div>
            <div className="text-xs">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}