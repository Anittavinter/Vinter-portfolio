import { ReactNode, HTMLAttributes } from 'react'
import { highlight } from 'sugar-high'

interface CodeProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(String(children ?? ''))
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

interface MDXContentProps {
  source: string
}

export default function MDXContent({ source }: MDXContentProps) {
  // Simple markdown-to-HTML conversion for static generation compatibility
  const processedContent = source
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/```(\w*)\n([\s\S]*?)```/g, (match, lang, code) => {
      const highlighted = highlight(code.trim())
      return `<pre><code>${highlighted}</code></pre>`
    })
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><h/g, '<h')
    .replace(/<\/h(\d)><\/p>/g, '</h$1>')
    .replace(/<p><pre>/g, '<pre>')
    .replace(/<\/pre><\/p>/g, '</pre>')

  return (
    <div 
      className="prose-content"
      dangerouslySetInnerHTML={{ __html: processedContent }} 
    />
  )
}
