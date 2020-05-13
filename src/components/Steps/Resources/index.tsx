import React from 'react';

export default function Resources(): JSX.Element {
  return (
    <div>
      <p>
        <strong>
          We will be using several resources throughout the workshops. Here you
          shall find an updated list with the cool tools we used that day + some
          extra fun challenges for you to checkout at home.
        </strong>
      </p>
      <ul>
        <li>
          <span className="linkUnderline">
            <a href="https://docs.google.com/presentation/d/1TH3Rsi6g9uQX7qLbOmB1Xae7a3caNLaDvNQO3BUWzhc/edit?usp=sharing">
              Workshop Presentation Slides:
            </a>
          </span>{" "}
          In case there's something you want to look over again.
        </li>
        {/* <li>
          <a href="https://github.com/juliet-tech/perfil">
            Código del Workshop
          </a>
          : Para referencia en el futuro
        </li> */}
        <li>
          <span className="linkUnderline">
            <a href="https://html-css-js.com/html/tags/">HTML Cheat Sheet</a>
          </span>
          : Nice resources to check out all the possible HTML tags you have at
          your disposal and have a read through their default behavior.
        </li>
        <li>
          <span className="linkUnderline">
            <a href="http://overapi.com/css">CSS Cheat Sheet</a>
          </span>
          : CSS resource to check out the properties you can use to design your
          web page with CSS and their explanations by{" "}
          <span className="linkUnderline">
            <a href="https://developer.mozilla.org/en-US/">MDN - Mozilla</a>
          </span>
          , creators of{" "}
          <span className="linkUnderline">
            <a href="https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com">
              Firefox
            </a>
          </span>
          . (they have some of my favorite front-end web documentation out
          there)
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://htmlcheatsheet.com/css/">CSS Interactive</a>
          </span>
          : Website that allows you to see live the reactions to your CSS code.
          Believe me, this can come in handy as your start elaborating in more
          complex features.
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://hackerthemes.com/bootstrap-cheatsheet/">
              Bootstrap Cheat Sheet
            </a>
          </span>
          : Resource to see all Bootstrap classes on a single screen and spot
          their behaviour. Becomes really helpful when you know what effect you
          want, but are not sure whether this can be done with Bootstrap in an
          easier way.
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://fontpair.co/">FontPair</a>
          </span>
          : Helps a lot when finding matching typographies. Font Pair basically
          gets major fonts found in{" "}
          <span className="linkUnderline">
            <a href="https://fonts.google.com">Google Fonts</a>
          </span>{" "}
          and pairs them up with a nice seconday font, making it easier for you
          to select your site's typography.
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://cssgradient.io/?ref=designcodenews">
              CSS Gradients
            </a>
          </span>
          : Gradient generator for CSS. Surprisingly these are not as easy to do
          as one might think. That's the cool thing about learning to code: you
          start appreciating the websites when they're cool.
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://coolbackgrounds.io/">Cool Backgrounds</a>
          </span>
          : Website that allows you to create CSS gradients, but with texture.
          Yeah 🤘🏼
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://www.cssmatic.com/box-shadow">
              Box Shadow Generator
            </a>
          </span>
          : Box-shadow generator to give your components some perspective and
          angle.
        </li>
        <li>
          <span className="linkUnderline">
            <a href="https://uxplanet.org/best-design-practices-for-single-page-websites-f93cef95d1e1">
              Best Practices for Single Page Websites
            </a>
          </span>
          : Article about the best practices to make a single page website.
        </li>
      </ul>
    </div>
  )
}