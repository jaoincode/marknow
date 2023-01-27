interface IInput {
  type?: "text" | "email" | "password";
  id: string;
  placeholder: string;
  onChange: ({ target }: { target: HTMLInputElement }) => void;
  value: number | string;
}

function Input({ type, id, placeholder, onChange, value }: IInput) {
  return (
    <div className="w-full rounded-lg">
      <input
        type={type ? type : "text"}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-full h-12 bg-mygray-200 text-mywhite-200 p-4 outline-none  font-semibold rounded-lg placeholder:text-gray-400"
      />
    </div>
  );
}

export default Input;
