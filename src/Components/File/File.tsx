import FileIcon from "../../assets/file.svg";

function File({ name }: { name: string }) {
  return (
    <li className="list-none flex items-center gap-3 rounded-xl shadow bg-mygray-200 p-3 cursor-pointer md:max-w-full hover:bg-mygray-100 transition-colors z-20">
      <img src={FileIcon} className="w-7 h-7" />
      <span className="text-mywhite-100 font-medium">{name}.md</span>
    </li>
  );
}

export default File;
