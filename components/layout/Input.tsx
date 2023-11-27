interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled ?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onChange
}) => {
  return (
    <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
            w-full
            p-4
            text-lg
            bg-darkblue
            border-2
            border-slate
            border-opacity-60
            rounded-md
            outline-none
            text-white
            focus:border-blue
            focus:border-2
            transition
            disabled:bg-slate
            disabled:opacity-70
            disabled:cursor-not-allowed">
    </input>
  )
}

export default Input;