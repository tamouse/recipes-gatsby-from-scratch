import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const Wrapper = styled.main`
  width: 80%;
  margin: auto auto 20px auto;
`

export default () => (
  <Layout>
    <Wrapper>
      <article>
        <h1>Style Guide</h1>
        <p>
          These are found in <code>src/components/layout.css</code> and imported
          in the <code>Layout</code> component.
        </p>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <p>
          Paragraph -- Nunc eleifend leo vitae magna. Nulla posuere. Vestibulum
          convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat
          urna tortor vitae lacus. Donec at pede. Donec hendrerit tempor tellus.
        </p>
        <blockquote>
          Blockquote -- Aliquam feugiat tellus ut neque. Praesent augue.
          Phasellus lacus. Proin quam nisl, tincidunt et, mattis eget, convallis
          nec, purus.{" "}
        </blockquote>
        <pre>{`Preformatted -- a poem

I never saw a purple cow,
I never hope to see one,
But I can tell you, anyhow,
I'd rather see than be one.


     - Gelett Burgess
`}</pre>
        <pre>
          <code>
            {`
Preformatted Code

line 1
line 2
`}
          </code>
        </pre>

        <h3>Lists</h3>
        <ul>
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
        </ul>

        <ol>
          <li>Ordered List Item 1</li>
          <li>Ordered List Item 2</li>
        </ol>

        <dl>
          <dt>Def 1</dt>
          <dd>Definition 1</dd>
          <dd>
            Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.
            Aliquam posuere. Aliquam feugiat tellus ut neque. Sed id ligula quis
            est convallis tempor. Nullam tempus. Pellentesque condimentum, magna
            ut suscipit hendrerit, ipsum augue ornare nulla, non luctus diam
            neque sit amet urna. Nullam eu ante vel est convallis dignissim.
            Phasellus lacus.{" "}
          </dd>
          <dt>Def 2</dt>
          <dd>Definition 2</dd>
        </dl>

        <h3>inline elements</h3>
        <ul>
          <li>
            a <em>empahasis</em> text element
          </li>
          <li>
            a <strong>strong</strong> text element
          </li>
          <li>
            a <sub>sub</sub> text element
          </li>
          <li>
            a <sup>sup</sup> text element
          </li>
          <li>
            a <tt>tt</tt> text element
          </li>
          <li>
            a <b>b (bold)</b> text element
          </li>
          <li>
            a <i>i (italic)</i> text element
          </li>
          <li>
            a <u>u</u> text element
          </li>
          <li>
            a <var>var</var> text element
          </li>
          <li>
            a <strike>strike</strike> blank text element
          </li>
          <li>
            a <small>small</small> text element
          </li>
          <li>
            a <samp>samp</samp> text element
          </li>
          <li>
            a <s>s (strike)</s> text element
          </li>
          <li>
            a <q>q (inline quote)</q> text element
          </li>
          <li>
            a <kbd>kbd</kbd> text element
          </li>
          <li>
            a <ins>ins</ins> text element
          </li>
          <li>
            a <dfn>dfn</dfn> text element
          </li>
          <li>
            a <del>del</del> text element
          </li>
          <li>
            a <code>code</code> text element
          </li>
          <li>
            a <cite>cite</cite> text element
          </li>
          <li>
            a <big>big</big> text element
          </li>
          <li>
            a <abbr>abbr</abbr> text element
          </li>
        </ul>

        <h3>Custom</h3>

        <verse>
          {`

Fleas -- by Ogden Nash

Adam
Had 'em.


`}
        </verse>

        <h3>more to come...</h3>
      </article>
    </Wrapper>
  </Layout>
)
