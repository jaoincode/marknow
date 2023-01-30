import { useState } from "react";

import Header from "../../Components/Header";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function View() {
  const [text, setText] = useState("");

  return (
    <section>
      <Header />
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
        <div className="flex flex-col md:w-1/2">
          <h3 className="bg-mygray-300 p-2 font-semibold text-mywhite-100 text-lg ">
            preview
          </h3>
          <ReactMarkdown
            children={text}
            className="resize-none h-96 md:h-full bg-myblack-100 p-2 text-mywhite-100 outline-none border-none"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
    </section>
  );
}

export default View;
