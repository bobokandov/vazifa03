import logo from "./logo.svg";
import bg from "./photo/bg2.webp";
import autor from "./photo/autor.webp";
import kitob from "./photo/kitob.webp";
import fa from "./photo/fa.webp";
import tw from "./photo/tw.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="section01">
        <div className="black">
          <header>
            <h1 className="logo">K. Griffith</h1>
            <ul>
              <ol>APPEARANCES</ol>
              <ol>BOOKS</ol>
              <ol>NEWS</ol>
              <ol>ABOUT</ol>
              <ol>CONTACT</ol>
            </ul>
          </header>

          <div className="pra">
            <div className="rasm_ism">
              <div>
                <img src={autor} alt="" />
              </div>
              <div>
                <p className="name">Kayla Griffith</p>
                <p className="name2">Award Winning Author</p>
              </div>
            </div>

            <div className="Kitobl">
              <p className="release">New Release</p>
              <div className="kitob1">
                <span className="namm">
                  <h1>The Swan Isle</h1>
                  <h1>(2035)</h1>
                </span>
                <p className="orta">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It’s easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. I’m a great
                  place for you to tell a story and let your users know a little
                  more about you.
                </p>
                <h2>Order now</h2>
                <span>
                  <button>Amazon</button>
                  <button>Google</button>
                  <button>ibooks</button>
                </span>
              </div>
              <div className="kitob2">
                <img src={kitob} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="middle"></div>
      </div>

      <div className="section02">
        <h1>Praise & Reviews</h1>
        <div className="quate">
          <div>
            <h1 className="qoshtrnoq">"</h1>
            <p className="quate1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="qoshim">
              ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
            </p>
          </div>
          <div>
            <h1 className="qoshtrnoq">"</h1>
            <p className="quate1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="qoshim">
              ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
            </p>
          </div>
          <div>
            <h1 className="qoshtrnoq">"</h1>
            <p className="quate1">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="qoshim">
              ‘Swan Isle’ is Griffith's best writing yet” The Times Book Review
            </p>
          </div>
        </div>
      </div>

      <div className="section03">
        <h1>See Upcoming Appearances</h1>
        <h1 className="h1ni">See Upcoming Appearances</h1>
        <p className="manp">
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy.
        </p>
        <div className="birinchi">
          <h3>
            January 18th 2035, The Breakfast Club, Virtual Book Reading of Swan
            Isle, 7PM - 8PM EST
          </h3>
          <button>Join</button>
        </div>

        <div className="birinchi">
          <h3>
            January 31st 2035, The Good Read Club, Online Conversation with
            Kayla Griffith, 8PM - 9PM EST
          </h3>
          <button>Join</button>
        </div>

        <div className="birinchi">
          <h3>
            March 2nd 2035, Otto Cafe, Online Book Reading With Kayla Griffith,
            3PM - 4PM EST
          </h3>
          <button>Join</button>
        </div>

        <div className="byautor">
          <div className="belgi"></div>
          <img src={autor} alt="" />
          <h1>About Kayla Griffith</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button>Read More</button>
        </div>
      </div>

      <div className="tarmoq">
        <img src={tw} alt="" />
        <img src={fa} alt="" />
      </div>

      <div className="footerr">
        <p>© 2035 by K.Griffith. Powered and secured by Wix</p>
      </div>
    </div>
  );
}

export default App;
