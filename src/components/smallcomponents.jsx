import { User } from "lucide-react";

export const InputFields = ({
  label,
  placeholder = "Enter value",
  type = "text",
  required = false,
  Icon = User,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      {/* Label for the input */}
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && "*"}
      </label>

      {/* Input with icon */}
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};



export const OptionInput = ({
  options,
  Icon,
  def,
  required,
  label,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && "*"}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="pl-10 w-full rounded-md border border-gray-300 py-2"
        >
          <option value="">{def}</option>
          {options.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
