import React from 'react';

const folderGif= require("../../../images/add-folder.gif");

export default function Setup() {
  return (
    <div className="list">
      <p>
        <strong>
          One of the most important things for every developer is their setup.
          How you have your computer environment set up will determine how fast
          and efficiently you can code. Spend some time here to make sure
          everything works well. If it doesn't, don't hesitate to{" "}
          <span className="linkUnderline">
            <a href="mailto:juliette.chevalier@admios-sa.com">reach out</a>
          </span>
          .
        </strong>
      </p>
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
            and hit <code>cmd + s</code> or in the navbar on top you should see
            a tab called <code>File > Save as...</code>
          </p>
        </li>
      </ol>
      <img src={folderGif} />
    </div>
  )
}