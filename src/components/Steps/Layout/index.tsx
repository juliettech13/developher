import React from 'react';
import { GithubGist } from "react-gistlab"

export default function Layout(): JSX.Element {
  return (
    <div className="layout">
      <h3>Flexbox</h3>
      <div className="flexbox">
      <ol>
        <li>
          <p>The first thing we need to do is <strong>activate Flexbox</strong> on the <code>div</code> where you want to use it. Remember the one receiving this are its flex items.</p>
          <p>This is done by adding <code>display: flex</code> to the element whrapping all items you want to be affected.</p>
          <p>For example, in our website we'll add <strong>Flexbox</strong> to our hobbies so that they're right next to the other. In this case, we'll add <code>display: flex</code> to the <code>ul</code> since we want each <code>li</code> to act as the flex items.</p>
          <GithubGist
            url="https://gist.github.com/juliettech13/188a7996bb15c36bbcf2e063e429b1a4.js"
            Loading={() => <p>Loading..</p>}
          />
        </li>
        <li>
          <p>Once you have the container set and activated, the default behavior of <strong>Flexbox</strong> is to make your flex-items inlined, so you should already have them displayed horizontally. Nice work! 👏🏼</p>
          <p>Next step now is to make sure this is not only inline, but also displayed with some nice space in between each image.</p>
          <p>In order to do this, we're going to add <code>justify-content: space-between</code> to our <code>.flex</code> class. This will make sure that all flex-items are displayed with space between them based on the size of the element where it lives.</p>
          <p>This is really nice because the space between them is calculated automatically, without us having to worry about the specifics.</p>
          <GithubGist
            url="https://gist.github.com/juliettech13/775aa5759ccad831629aa6907327ce38.js"
            Loading={() => <p>Loading..</p>}
          />
        </li>
        <li>
          <p>Now, let's say we add in 3 more cards to our hobbies list.</p>
          <GithubGist
            url="https://gist.github.com/juliettech13/6fca5daf5e64d7f9f621e29a0ef568ca.js"
            Loading={() => <p>Loading..</p>}
          />
          <p>What we shall see is that the cards are now falling outside of the <code>div</code> which is of course not the behavior that we want.</p>
          <p>We can solve this with <code>flex-wrap: wrap</code>.</p>
          <p><strong>Flex-wrap</strong> will make sure your flex-items are wrapped inside the container <code>div</code> so that they can't fall outside of the box.</p>
          <GithubGist
            url="https://gist.github.com/juliettech13/f0fdd25de5e6443fbb8f366fea134a17.js"
            Loading={() => <p>Loading..</p>}
          />
        </li>
        <li>
          <p>The rest is up to you ✨. Have fun exploring different types of layouts to your page. Maybe a square? Maybe have them be different sizes with the flex-grow property? Find all the flexbox hacks here and even a few fun games to get started if all of this is too confusing still 😛🐸.</p>
          <ul>
            <li>
              <span className="linkUnderline">
                <a href="http://www.flexboxdefense.com/">
                  <p>Flexbox Defense</p>
                </a>
              </span>
              <p>Fun game where your job is to stop the incoming enemies from getting past your defenses using Flexbox to stop them.</p>
            </li>
            <li>
              <span className="linkUnderline">
                <a href="https://flexboxfroggy.com/">
                  <p>Flexbox Froggy</p>
                </a>
              </span>
              <p>Game to get better using Flexbox by repositioning a frog within its pond.</p>
            </li>
          </ul>
        </li>
      </ol>
      </div>
      <div className="media-queries">
        <h3>Media Queries</h3>
        <ol>
          <li>
            <p>Often times, you will sadly find out that the mobile behavior is not exactly what you want. Sadly this happens more often than we want to. 😔</p>
            <p>However, there are some good <strong>tips</strong> to help improve this behavior:</p>
            <ul>
              <li>
                <p>Write your widths, heights, margins and paddings with percentages rather than fixed pixels when possible. This makes sure things are proportional depending on the device.</p>
              </li>
              <li>
                <p>Use tools like Flexbox, CSS Grid or Bootstrap grid whenever possible to make sure this responsive behavior is handled for you.</p>
              </li>
              <li>
                <p>Use <strong>media queries</strong> to make sure you're getting the behavior you want when your screen is a certain size.</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Media queries make sure that whenever the screen of the user is 640px, for example, the design is displayed in a certain style, different than when it is displayed in a computer screen or a tablet.</p>
            <p>In order to use them, the first thing you should do is google the screen size of the device you want to adapt your page for. The search can be something like <strong>media queries for (device you want)</strong></p>
            <p><span className="linkUnderline">
            <a href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp">
              Here
            </a>
          </span>'s an easy resource to checkout if you don't know where to start.</p>
          </li>
          <li>
            <p>Now that you know what the screen size, we can start adding the breakpoints and adapting your design as you wish.</p>
            <p>Here's an example to get some ideas flowing, you know that you can change everything about your design and it will get added when the screen crosses that given breakpoint. Go wild 🤪</p>
            <GithubGist
            url="https://gist.github.com/juliettech13/5cae16af545de583f54341a678f14aba.js"
            Loading={() => <p>Loading..</p>}
          />
          </li>
        </ol>
      </div>

    </div>
  )
}