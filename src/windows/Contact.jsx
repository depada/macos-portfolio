import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/Kolipaka_Pavan_30Sep_Hyderabad.jpg"
          alt="Contact"
          className="w-14 h-14 rounded-full object-cover object-[50%_35%] border border-gray-300"
        />
        <h3>Let's connect</h3>
        <p>
          Pavan Kolipaka • Hyderabad, Telangana • +91 9154163010 •
          Kolipaka.pavan.kp@gmail.com
        </p>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
