import { addFilter } from '@wordpress/hooks';

const replaceHierarchicalTermSelector = ( OriginalComponent ) => ( props ) => (
	<OriginalComponent { ...props } />
);

addFilter(
	'editor.PostTaxonomyType',
	'editor-post-taxonomies-patch/replace-hierarchical-term-selector',
	replaceHierarchicalTermSelector
);
