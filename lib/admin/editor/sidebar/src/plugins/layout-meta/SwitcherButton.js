const {Icon} = wp.components;
import  {getIconFromLayout} from '../../lib/layout'

let SwitcherButton = ({
						  label,
						  value,
						  isSelected,
						  updateFunction
					  }) => {

	const className = (isSelected) ? 'selected' : ''
	return (

		<button className={className}
				onClick={() => {
					updateFunction(value)
				}}
		>
			<Icon
				icon={getIconFromLayout(value)}
			/>
			<span>{label}</span>
		</button>
	);
};


export default SwitcherButton;


