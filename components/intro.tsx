import Image from 'next/image'
import authorImage from '@/public/images/authors/named.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Vinter.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I’m a passionate <span className="font-semibold text-black dark:text-white">UI/UX Designer</span> and <span className="font-semibold text-black dark:text-white">Full-Stack Developer</span> based in Nairobi, Kenya  turning bold ideas into beautiful, functional digital products.
        </p>
        <p className='mt-2 font-light text-muted-foreground'>
          I craft intuitive user interfaces and write clean, scalable code. Whether it’s building mobile apps, designing thoughtful user experiences, or collaborating with teams I bring energy, clarity, and creativity to every project.
        </p>
        <p className='mt-2 font-light text-muted-foreground'>
          Currently open to freelance projects, remote roles, and tech-for-impact collaborations.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Vinter Achieno'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
