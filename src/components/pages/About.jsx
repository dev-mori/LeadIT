import React from "react";
const About = () => {
  const ABOUT_STYLE = {
    textAlign: "center",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(/static/media/light.52a440d7.jpg)`,
    backgroundSize: "cover",
    color: "white",
  };

  const ABOUT_INNER = {
    paddingTop: "10%",
  };

  return (
    <div style={ABOUT_STYLE}>
      <div style={ABOUT_INNER}>
        <h1>About Us</h1>
        <h2>成長を、カタチに。</h2>
        <p>
          「勉強がんばってるけど成長してるのかな」「周りはどんなことをしているんだろう」
          <br />
          LeadItはあなたの頑張りの支えになります。
          <br />
          学習を記録し行ったことを振り返る。以前と比べて変化を感じる。
          周囲の行っていることからヒントを得る。
          <br />
          ちょっとこれ以上思いつきません！！
        </p>
      </div>
    </div>
  );
};

export default About;
