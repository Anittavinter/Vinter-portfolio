'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder logic for form submission
    console.log('Submitted:', formData)
    alert('Thanks for reaching out! I’ll get back to you shortly.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='py-24'
    >
      <div className='container max-w-xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-6 text-center'>Get in Touch</h2>

        <form
          onSubmit={handleSubmit}
          className='bg-white dark:bg-muted p-6 rounded-2xl shadow-xl space-y-6'
        >
          <div>
            <label className='block text-sm font-medium mb-1'>Your Name</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border rounded-xl bg-background/90'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Email Address</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border rounded-xl bg-background/90'
            />
          </div>

          <div>
            <label className='block text-sm font-medium mb-1'>Your Message</label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className='w-full px-4 py-2 border rounded-xl bg-background/90'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-black text-white py-2 px-4 rounded-xl hover:bg-opacity-80 transition-all'
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  )
}
