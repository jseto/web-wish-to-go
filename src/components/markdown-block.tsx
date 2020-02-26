import * as React from 'react';
import { HTMLContent } from './content';
import PreviewCompatibleImage from './preview-compatible-image';

export type Align = 'vertical' | 'top';

interface MarkdownBlockProps {
	className?: string;
	content: string;
	leftImage?: any;
	rightImage?: any;
	align?: Align;
	imageColumnWidth?: number;
	contentColumnWidth?: number;
}

const MarkdownBlock: React.FC<MarkdownBlockProps> = ({
	className,
	content,
	leftImage,
	rightImage,
	align,
	contentColumnWidth
}) => {
	contentColumnWidth = contentColumnWidth || 12;

	const imageColumnWidth = (12 - contentColumnWidth) / 2

	return (
		<div className={`markdown-block ${ className? className : '' } columns${align === 'vertical' ? ' is-vcentered' : ''}`}>
				
			<div className={imageColumnWidth? `column is-${ imageColumnWidth }` : '' }>
				{ leftImage && <PreviewCompatibleImage imageInfo={ leftImage } /> }
			</div>

			<div className={`column is-${ contentColumnWidth }`}>
				<HTMLContent className="content" content={content} />
			</div>

			<div className={ imageColumnWidth? `column is-${ imageColumnWidth}` : ''}>
				{ rightImage && <PreviewCompatibleImage imageInfo={rightImage} /> }
			</div>

		</div>
	);
};

export default MarkdownBlock;
