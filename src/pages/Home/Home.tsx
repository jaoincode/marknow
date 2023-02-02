import { useEffect, useState } from "react";

import SaveIcon from "../../assets/save.svg";
import TrashIcon from "../../assets/trash.svg";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function Home() {
  const [text, setText] = useState("");

  useEffect(() => {
    const savedText = localStorage.getItem("text");
    if (savedText) setText(savedText);
  }, []);

  const handleSaveText = () => {
    if (text) localStorage.setItem("text", text);
  };

  const handleClearText = () => {
    if (text) setText("");

    const savedText = localStorage.getItem("text");
    if (savedText) localStorage.removeItem("text");
  };

  return (
    <section>
      <header className="w-full flex p-2 md:p-4 items-center h-14 bg-mygray-100 fixed  justify-between z-50">
        <h1 className="font-bold text-mywhite-200 mx-2 md:text-lg">marknow</h1>
        <div className="flex items-center gap-2">
          <button
            aria-label="Delete file"
            className="w-7 md:w-9 bg-red-600 p-1 md:p-2 rounded-full hover:bg-red-800 transition-colors"
            onClick={handleClearText}
          >
            <img src={TrashIcon} />
          </button>
          <button
            aria-label="Save file"
            className="w-7 bg-myblue-100 p-1 rounded-full md:flex md:w-36 md:h-9 items-center hover:bg-blue-600 transition-colors"
            onClick={handleSaveText}
          >
            <img src={SaveIcon} className="md:w-8 md:h-8" />
            <p className="hidden md:inline-block font-medium text-mywhite-100">
              Save Changes
            </p>
          </button>
        </div>
      </header>
      <div className="w-screen pt-14 flex flex-col md:flex-row md:gap-1 md:h-screen">
        <div className="flex flex-col md:w-1/2">
          <h3 className="bg-mygray-300 p-2 font-semibold text-mywhite-100 text-lg ">
            markdown
          </h3>
          <textarea
            className="resize-none h-96 md:h-full bg-myblack-100 p-2 text-mywhite-100 outline-none border-none"
            value={text}
            onChange={({ target }) => setText(target.value)}
          ></textarea>
        </div>
        <div className="flex flex-col md:w-1/2 preview">
          <h3 className="bg-mygray-300 p-2 font-semibold text-mywhite-100 text-lg ">
            preview
          </h3>
          <ReactMarkdown
            children={text}
            className="h-96 md:h-full bg-myblack-100 p-2 text-mywhite-100 break-words overflow-auto"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
