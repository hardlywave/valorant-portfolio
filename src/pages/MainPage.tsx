interface IVideo {
  [key: string]: string | number;
}

const MainPage = () => {
  const styleDivVideo: IVideo = {
    bottom: 0,
    height: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    width: "100%",
    left: 0,
    right: 0,
    boxSizing: "border-box",
  };

  const styleVideo: IVideo = {
    height: "100%",
    objectFit: "cover",
    objectPosition: "46% center",
    width: "100%",
  };

  return (
    <div style={styleDivVideo}>
      <video
        muted={true}
        loop={true}
        playsInline={true}
        autoPlay={true}
        poster="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9695da32975f3e85/62cc8547719eb73892495716/VALORANT_ANNO22_SHATTERED_16x9_27s0.jpg"
        data-testid="hero:video"
        style={styleVideo}
      >
        <source
          src={`https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4`}
          type="video/mp4"
        />
      </video>
      <div
        className="poster Video-module--poster--X-9oV"
        style={{
          pointerEvents: "none",
          backgroundPosition: "46%",
          backgroundImage:
            "url(&quot;https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9695da32975f3e85/62cc8547719eb73892495716/VALORANT_ANNO22_SHATTERED_16x9_27s0.jpg&quot)",
        }}
      />
    </div>
  );
};

export default MainPage;
