interface IInput {
  type?: "text" | "email" | "password";
  id: string;
  placeholder: string;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
  value: number | string;
  error?: string;
}

function Input({ type, id, placeholder, onChange, value, error }: IInput) {
  return (
    <div className="w-full rounded-lg">
      <input
        type={type ? type : "text"}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`w-full h-12 bg-mygray-200 text-mywhite-200 p-4 outline-none  font-semibold rounded-lg placeholder:text-gray-400 ${
          error && "border border-red-600"
        }`}
      />
      {error && (
        <span className="text-red-600 font-medium text-sm pl-1">{error}</span>
      )}
    </div>
  );
}

export default Input;
