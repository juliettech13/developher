import React from 'react';

export default function JavaScript(): JSX.Element {
  return (
    <>
      <p><strong>The best way to grasp programming concepts is by practicing and studying the default behavior of the language.</strong></p>
      <p>For this section, rather than building upon our own site, I will share some outside resources where you can practice what we learned today.</p>
      <ul>
        <li>
          <span className="linkUnderline">
            <a href="https://learnjavascript.online/">
              Learn JavaScript:
            </a>
          </span>{" "}
          This is one of my personal favorite resources to learn. It's well-structured, clearly explained, and with lots of practical examples and challenges. Highly recommended.
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/">
              FreeCodeCamp game building:
            </a>
          </span>{" "}
          Free CodeCamp is a nice resource of articles and recollection of challenges for people learning to code. Specifically this resource is a cool tutorial where you learn JavaScript by building 7 games.
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://www.freecodecamp.org/news/learn-javascript-by-building-7-games-video-course/">
              CodeCademy - Learn JS:
            </a>
          </span>{" "}
          Learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. The concepts covered in these lessons lay the foundation for using JavaScript in any environment.
        </li>
      </ul>
    </>
  )
}