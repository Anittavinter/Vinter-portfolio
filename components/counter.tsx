'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { motion, AnimatePresence } from 'framer-motion'

export default function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    if (count < 10) setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) setCount(count - 1)
  }

  return (
    <div className='flex items-center gap-5'>
      <Button size='icon' onClick={decrement} disabled={count <= 0}>
        <MinusIcon />
      </Button>

      <AnimatePresence mode='wait'>
        <motion.p
          key={count}
          className='text-lg font-semibold'
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          Current vote: {count}
        </motion.p>
      </AnimatePresence>

      <Button size='icon' onClick={increment} disabled={count >= 10}>
        <PlusIcon />
      </Button>
    </div>
  )
}
