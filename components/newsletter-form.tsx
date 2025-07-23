'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { NewsletterFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

import { subscribe } from '@/lib/actions'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: { email: '' }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const result = await subscribe(data)

    if (result?.error) {
      toast.error('Something went wrong. Try again!')
      return
    }

    toast.success('You’re in! 🎉')
    reset()
  }

  return (
    <section>
      <Card className='rounded-lg border-0 dark:border'>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'>
          <div>
            <h2 className='text-2xl font-bold'>Subscribe to my newsletter</h2>
            <p className='text-muted-foreground'>
              Get updates on my work, tools, and tips straight to your inbox.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(processForm)}
            className='flex flex-col items-start gap-3 md:w-[350px]'
          >
            <Input
              type='email'
              id='email'
              autoComplete='email'
              placeholder='you@example.com'
              {...register('email')}
            />
            {errors.email?.message && (
              <p className='ml-1 text-sm text-rose-400'>
                {errors.email.message}
              </p>
            )}

            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full disabled:opacity-50'
            >
              {isSubmitting ? 'Submitting...' : 'Subscribe'}
            </Button>

            <p className='text-xs text-muted-foreground'>
              We respect your inbox. Read our{' '}
              <Link href='/privacy' className='font-bold underline underline-offset-2'>
                privacy&nbsp;policy
              </Link>
              .
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
