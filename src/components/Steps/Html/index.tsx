import React, { useEffect } from 'react';
import { GithubGist } from "react-gistlab"
import './index.scss';

const travel = require("../../../images/travel.gif");
const writer = require("../../../images/writer.gif");
const code = require("../../../images/code.gif");
const imagesFolder = require('../../../images/add-images.gif')

export default function Html() {

  return (
    <div className="html">
      <p>
        <strong>
          Now we will build the <strong>structure</strong> of our site; the
          skeleton. You can see each <code> &lt;tag></code> as the building
          block of your site, the layout of your house. Based on how you
          structure these, the rest of the design will follow. This means, be
          careful. Draw it first on a paper page with each tag so you know where
          everything goes.
        </strong>
      </p>
      <ol>
        <li>
          <p>
            We will start by writing{" "}
            <span className="linkUnderline">
              <a href="https://htmlcheatsheet.com/">HTML</a>
            </span>{" "}
            in your <code>index.html</code> file.
          </p>
          <p>This should look something like this:</p>
          <GithubGist
            url="https://gist.github.com/juliettech13/50e5041d7ac8b7466622b264843a16e2.js"
            Loading={() => <p>Loading..</p>}
          />
        </li>
        <li>
          <p>
            Once you finish coding your main structure, then you can start
            adding values to your tags.
          </p>
          <ul>
            <li>
              <p>
                Add in some funky <strong>emojis</strong> by tapping{" "}
                <code>cmd + ctrl + space</code> in your Mac or{" "}
                <code>Win + ;</code> on Windows. 🤪🥑🧠
              </p>
            </li>
            <li>
              <p>
                Add in some cute <strong>icons</strong> to your webpage to make
                it more lively. You can search for nice free{" "}
                <span className="linkUnderline">
                  <a href="https://iconstore.co">here</a>
                </span>{" "}
                or{" "}
                <span className="linkUnderline">
                  <a href="https://thenounproject.com/">here</a>
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                Add <strong>images</strong> to some more images about your
                hobbies to your page. In order to do that:
                <ul>
                  <li>
                    <p>
                      Create a new <code>images</code> folder, the same way we
                      created a file, except now we will select the{" "}
                      <strong>Create a New folder</strong> button on our left
                      hand navigator.
                    </p>
                    <img src={imagesFolder} alt="Adding the new images folder"/>
                  </li>
                  <li>
                    <p>
                      Then, store the images you want to use in your page in
                      this <code>images</code> folder.
                    </p>
                  </li>
                  <li>
                    <p>
                      Once you have them, call them throughout the your page by
                      using your <code>image</code> tag like we did in the code
                      below.
                    </p>
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p>
                Add <strong>gifs</strong> to brighten someone's day. Everyone
                loves a moving image.
              </p>
              <ul>
                <li>
                  <p>
                    If you want to save some time, you could just grab some of
                    mine.{" "}
                  </p>
                  <ul className="noBullets">
                    <li>
                      <img src={travel} alt="Traveling" className="gif" />
                    </li>
                    <li>
                      <img src={writer} alt="Writing" className="gif" />
                    </li>
                    <li>
                      <img src={code} alt="Coding" className="gif" />
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Otherwise, head over to{" "}
                    <span className="linkUnderline">
                      <a href="https://giphy.com/">Giphy</a>
                    </span>{" "}
                    and get some.
                  </p>
                </li>
                <li>
                  <p>
                    Once you find the one you want, save it in your{" "}
                    <code>images</code> folder so you can use it throughout your
                    page.
                  </p>
                  <p>
                    You can repeat the steps provided to add an image.
                    Surprisingly, a gif is added the same way we add an image,
                    through the{" "}
                    <code>
                      <img />
                    </code>{" "}
                    tag.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  )
}