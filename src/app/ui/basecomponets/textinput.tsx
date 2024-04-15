import { ChangeEventHandler, FunctionComponent } from 'react';
import { IconType } from 'react-icons'; // assuming icon usage from react-icons

interface TextInputProps {
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
  Icon?: IconType;
  iconPosition?: 'left' | 'right';
}

export const TextInput: FunctionComponent<TextInputProps> = ({
  placeholder,
  onChange,
  defaultValue,
  Icon,
  iconPosition = 'left'
}) => {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="input" className="sr-only">
        {placeholder}
      </label>
      <input
        id="input"
        className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
      />
      {Icon && (
        <Icon className={`absolute ${iconPosition === 'left' ? 'left-3' : 'right-3'} top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900`} />
      )}
    </div>
  );
};