import icon_mapping from './icon-mapping.json'
import icons from './icons';

export function getIconFromLayout(layout = 'c'){
	const iconname = icon_mapping[layout] || 'c'
	return icons[iconname]
}

export function getSmallIconFromLayout(layout = 'c'){
	const iconname = (icon_mapping[layout] || 'beans') + '_small'
	return icons[iconname]
}
