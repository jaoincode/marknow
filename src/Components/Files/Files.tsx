import { files } from "../../mocks/files.json";

import File from "../File";

function Files() {
  return (
    <div className="pt-20 px-3 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 z-20">
      {files.map((file) => (
        <File name={file.name} />
      ))}
    </div>
  );
}

export default Files;
