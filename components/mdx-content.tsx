'use client'

import { JSX, ReactNode, HTMLAttributes } from 'react'
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

export default function MDXContent(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
