'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <motion.div
        className='container max-w-3xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className='title mb-8 text-center'
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Let&apos;s talk about your project
        </motion.h2>

        <ContactForm />
      </motion.div>
    </section>
  )
}
