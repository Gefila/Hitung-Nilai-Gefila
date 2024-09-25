import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ children, id, type = "number", placeholder, value, onChangeInput }, ref) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={id} className="text-white text-lg">
				{children}
			</label>
			<input
				type={type}
				id={id}
				className="bg-zinc-300 p-1.5 rounded-md"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChangeInput(e.target.value)}
				ref={ref}
			/>
		</div>
	);
});

export default Input;
