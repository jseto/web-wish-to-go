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
	imageColumnWidth,
	contentColumnWidth
}) => {
	imageColumnWidth = imageColumnWidth || 4;

	if ( contentColumnWidth ) {
		var textColumnWith = contentColumnWidth;
		var offset = 'is-offset-' + ( 12 - contentColumnWidth ) / 2;
	}
	else {
		textColumnWith = 12
			- (leftImage? imageColumnWidth : 0)
			- (rightImage? imageColumnWidth : 0);
	}

	return (
		<div className={`${ className } columns${align === 'vertical' ? ' is-vcentered' : ''}`}>
			{
				leftImage &&
				<div className={`column is-${ imageColumnWidth }`}>
					<PreviewCompatibleImage imageInfo={ leftImage } />
				</div>
			}

			<div className={`column is-${textColumnWith} ${ offset }`}>
				<HTMLContent className="content" content={content} />
			</div>

			{rightImage && (
				<div className={`column is-${ imageColumnWidth}`}>
					<PreviewCompatibleImage imageInfo={rightImage} />
				</div>
			)}
		</div>
	);
};

export default MarkdownBlock;
