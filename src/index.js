/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

import HierarchicalTermSelector from './components/post-taxonomies/hierarchical-term-selector';
const replaceHierarchicalTermSelector = ( OriginalComponent ) => {
	return ( props ) => {
		const { slug } = props;
		const taxonomy = useSelect( ( select ) => {
			const { getTaxonomy } = select( coreStore );
			return getTaxonomy( slug );
		} );
		if ( taxonomy.hierarchical ) {
			return <HierarchicalTermSelector slug={ slug } />;
		}
		return <OriginalComponent { ...props } />;
	};
};

addFilter(
	'editor.PostTaxonomyType',
	'editor-post-taxonomies-patch/replace-hierarchical-term-selector',
	replaceHierarchicalTermSelector
);
