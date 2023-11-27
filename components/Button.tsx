interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline
}) => {
  return (
    <div>
        <button 
        disabled={disabled}
        onClick={onClick}
            className={`
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-full
                font-semibold
                hover:opacity-80
                transition
                
                ${fullWidth ? 'w-full' : 'w-fit'}
                ${secondary ? 'bg-gradient-to-r from-blue to-green' : 'bg-gradient-to-r from-dblue to-green'}
                ${secondary ? 'text-whitee' : 'text-whitee'}
                ${secondary ? '' : ''}
                ${large ? 'text-xl' : 'text-md'}
                ${large ? 'px-5' : 'px-4'}
                ${large ? 'py-3' : 'py-2'}
                ${outline ? 'bg-transparent': ''}
                ${outline ? 'border-white' : ''}
                ${outline ? 'text-white' : ''}
            `}>
            {label}
        </button>
    </div>
  )
}

export default Button