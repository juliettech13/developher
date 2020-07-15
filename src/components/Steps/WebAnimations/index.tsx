import React from 'react';
import { GithubGist } from "react-gistlab"

const folderGif= require("../../../images/prototypal-inheritance.gif");


export default function WebAnimations(): JSX.Element {
  return (
    <>
      <p><strong>Creating events in the DOM (Document Object Model) is how we animate our sites so that they feel interactive for our users.</strong></p>
      <p>Before we get to the animation section though, lets create another file in our folder called <code>index.js</code>. This is where we will write our JavaScript. We can do this by following the same steps we used to create our <code>index.html</code> file in the first section of the course.</p>
      <p>Once we have the file, this is still not enough. We need to make sure our HTML file can read the JavaScript file. In order to do this, we will add the file to our <code>index.html</code> file, somewhat similar to what we did with our <code>style.css</code>.The difference is that rather than placing it at the <code>head</code> of our file, we will place it as the last element before closing the <code>body</code>. This guarantees that the whole HTML document is loaded before the JavaScript is set up on the screen, which enhances the site's user experience.</p>
      <GithubGist
        url="https://gist.github.com/juliettech13/722b50b20398232c003ee739ead88fb4.js"
        Loading={() => <p>Loading..</p>}
      />
      <p>In order to do that, we will follow <strong>4 steps</strong> to make our animations. There are other ways to do this -- and this is usually where the JavaScript frameworks become really powerful -- but this is a nice way to get you into thinking of what you can do when animating your site.</p>
      <ol>
        <li>
          <p><strong>Select the element 🔤:</strong> This is the part where we select the specific element we want to animate.</p>
          <p>This can be done by using the same CSS selectors we use for adding the style to our elements.</p>
          <GithubGist
            url="https://gist.github.com/juliettech13/d590690771ea31a0860121cac80ce3e5.js"
            Loading={() => <p>Loading..</p>}
          />
        </li>
        <li>
          <p><strong>Hire the Event Listener 👂🏽:</strong> the Event Listener is the watchman we hire to look over our app. Its job is merely to be on the lookout in case the event it's looking out for actually gets triggered.</p>
          <GithubGist
            url="https://gist.github.com/juliettech13/2e835f8ad9f038ee66bb7fb59496a51a.js"
            Loading={() => <p>Loading..</p>}
          />
          <p>Now, be advised. At this point, your Event Listener still won't work. We just hired her, but we haven't given her a mission yet.</p>
        </li>
        <li>
          <p><strong>Define the mission 🧐:</strong> This is the section where we tell the Event Listener which event it should be looking out for.</p>
          <p>Whenever we're defining the mission, we're always going to give it two parameters:</p>
          <ol>
            <li>
              <p>
                The{" "}
                <span className="linkUnderline">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/Events">
                    DOM Events
                  </a>
                </span>,
                which can be a mouse event, a key event, a touch event, etc..
              </p>
            </li>
            <li>
              <p>The <strong>animation</strong> or change that shall occur when the event happens.</p>
            </li>
          </ol>
          <GithubGist
            url="https://gist.github.com/juliettech13/92a53adf8a05a4901891d207d1b58a39.js"
            Loading={() => <p>Loading..</p>}
          />
          <p>This should still fail because we haven't defined what <code>animation</code> is, so let's define it and actually create the animation!</p>
        </li>
        <li>
          <p><strong>Create the animation 💥:</strong> This is where we give life to element we have selected. When we're building our animations, this will always be in at least 2 steps:</p>
          <ol>
            <li>
              <p><strong>Select the element</strong> we want to animate.</p>
              <p><strong>Now this is important:</strong> Be careful not to confuse the element for the event and the element for the animation.</p>
              <ul>
                <li>
                  <p>The element for the event is the element the event will be happening on, aka the element (<code>paragraph</code> in this case) the Event Listening is looking out for when the user clicks.</p>
                </li>
                <li>
                  <p>We also have the element the animation is happening to. Now, usuuuuually these two elements will be the same. "When the user clicks on paragraph, the paragraph should be the one to change its color, size, etc. BUT this is not always the case.</p>
                  <p>Sometimes, I want to make sure that when the paragraph is clicked, the image underneath changes height, or the background color of the document is changed.</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Once you have the element selected, now we want to <strong>perform the animation</strong> on it.</p>
              <p>The best way to understand this is by checking out the Inspector console on the browser and play with all the properties we can apply to an HTML object.</p>
              <img src={folderGif} />
              <p>As you can see from the video, all the properties in blue are all the things we are able to do with our elements.</p>
              <p>Of course, this might feel overwhelming at first with so many options. This is normal. My best recommendation is to just play with it and see what you can do.</p>
              <p>Here are some examples:</p>
              <GithubGist
                url="https://gist.github.com/juliettech13/35de7030e48b8767fa84bd8c874b7452.js"
                Loading={() => <p>Loading..</p>}
              />
            </li>
          </ol>
        </li>
      </ol>
    </>
  )
}