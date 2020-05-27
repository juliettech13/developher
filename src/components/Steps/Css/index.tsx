import React from 'react';
import { GithubGist } from "react-gistlab"

export default function CSS() {
  return (
    <div className="css">
      <ol>
        <li>
          <p>
            First, link your <code>style.css</code> file inside the <code>head</code> tag of your <code>index.html</code>.
          </p>
        </li>
        <li>
          <p>
            Then, use the CSS code below to give you a head start on adding some color and fun to your page.
          </p>
        </li>
        <li>
          <p>
            Make it your own 🤪:
          </p>
          <ul>
            <li>
              <p>Get some cool <strong>fonts</strong> at <span className="linkUnderline">
              <a href="https://fonts.google.com/">Google Fonts</a>
            </span></p>
            </li>
            <li>
            <p>Need some inspo on <strong>font pairing</strong>? <span className="linkUnderline">
              <a href="https://fontpair.co/">Font Pair</a>
            </span>{" "} may help you on that department.</p>
            </li>
            <li>
              <p>In terms of <strong> colors and color palettes</strong>, you may find some nice coloring schemes here: <span className="linkUnderline">
              <a href="https://coolors.co/">Coolors</a>
            </span>{" "} or <span className="linkUnderline">
              <a href="https://colorhunt.co/">Color Hunt</a>
            </span>{" "}</p>
            </li>
            <li>
              <p>Also - here's a <span className="linkUnderline">
              <a href="http://overapi.com/css">cheatsheet</a>
            </span>{" "} in case you were wondering all you can do with CSS!</p>
            </li>
          </ul>
        </li>
      </ol>
      <GithubGist
        url="https://gist.github.com/juliettech13/387dc3a241d8624fac135e5d60a7f4ac.js"
        Loading={() => <p>Loading..</p>}
      />
      <p>PS - remember that in order for those fonts to work, you need to link them in your <code>index.html</code>'s head. To do this, you can just copy the embed link <span className="linkUnderline">
      <a href="https://fonts.google.com/">Google Fonts</a></span>{" "} gives you. </p>
      <GithubGist
        url="https://gist.github.com/juliettech13/e440c0084e39f4cd95869d88442e227b.js"
        Loading={() => <p>Loading..</p>}
      />
    </div>
  )
}