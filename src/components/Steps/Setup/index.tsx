import React from 'react';

const folderGif= require("../../../images/add-folder.gif");

export default function Setup() {
  return (
    <div className="list">
      <ol>
        <li>
          <p>
            Create a folder in your Desktop screen called{" "}
            <code> Develop(her)</code> [or whetever else your heart desires].
          </p>
        </li>
        <li>
          <p>
            Open{" "}
            <span className="linkUnderline">
              <a href="https://www.sublimetext.com">Sublime Text Editor</a>
            </span>
            . Once you do, a black screen should show up
          </p>
        </li>
        <li>
          <p>
            Drag the folder you just created onto your{" "}
            <span className="linkUnderline">
              <a href="https://www.sublimetext.com">Sublime Text Editor</a>
            </span>
            . This should activate a new left panel with your folder inside.
          </p>
        </li>
        <li>
          <p>
            Give your folder a right click and create a new document. This
            should be called <code>index.html</code>. This is where a lot of the
            magic will happen. ✨
          </p>
          <p>
            Once a new page opens to the right, write <code>index.html</code>{" "}
            and hit  <code>cmd + s</code> or in the navbar on top you should see a tab called  <code>File > Save as...</code>
          </p>
        </li>
      </ol>
      <img src={folderGif} />
    </div>
  )
}