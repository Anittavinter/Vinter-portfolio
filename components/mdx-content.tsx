'use client'

import { ReactNode, HTMLAttributes } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

import Counter from '@/components/counter'

interface CodeProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(String(children ?? ''))
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter
}

interface MDXContentProps {
  source: string
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
    />
  )
}
