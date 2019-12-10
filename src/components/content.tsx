import * as React from 'react'

interface HTMLContentProps {
	className?: string;
	content: string;
}

export const HTMLContent: React.FC<HTMLContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
