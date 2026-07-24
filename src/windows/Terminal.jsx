import { WindowControls } from "#components";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { Check, Flag } from "lucide-react";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2 className="window-drag-handle">Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@pavan % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="category-label">Category</p>
          <p>Technologies</p>
        </div>

        <div className="content">
          {techStack.map(({ category, items }) => {
            return (
              <div key={category} className="row">
                <div className="row-title">
                  <Check className="check" size={20} />
                  <h3>{category}</h3>
                </div>

                <ul className="tech-items">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="footnote">
          <p>
            <Check size={20} /> {techStack.length} of {techStack.length} stacks
            loaded successfully (100%)
          </p>
          <p className="text-black">
            <Flag size={15} fill="black" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;
