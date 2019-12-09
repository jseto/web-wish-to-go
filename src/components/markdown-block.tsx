import * as React from 'react';
import { HTMLContent } from './content';
import PreviewCompatibleImage from './preview-compatible-image';

export type Aling = 'vertical' | 'top';

interface MarkdownBlockProps {
	content: string;
	leftImage?: any;
	rightImage?: any;
	align?: Aling;
	imageColumnWidth?: number;
	contentColumnWidht?: number;
}

const MarkdownBlock: React.FC<MarkdownBlockProps> = ({
	content,
	leftImage,
	rightImage,
	align,
	imageColumnWidth,
	contentColumnWidht
}) => {
	imageColumnWidth = imageColumnWidth || 4;

	if ( contentColumnWidht ) {
		var textColumnWith = contentColumnWidht;
		var offset = 'is-offset-' + ( 12 - contentColumnWidht ) / 2;
	}
	else {
		textColumnWith = 12
			- (leftImage? imageColumnWidth : 0)
			- (rightImage? imageColumnWidth : 0);
	}

	return (
		<div className={`columns${align === 'vertical' ? ' is-vcentered' : ''}`}>
			{leftImage && (
				<div className={`column is-${ imageColumnWidth }`}>
					<PreviewCompatibleImage imageInfo={ leftImage } />
				</div>
			)}

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
