module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0F46D7",
        secondary: "#f5f5ff",
        dark: "#252830",
        online: "#00CD3C",
      },
      zIndex: {
        46: "46",
        47: "47",
        48: "48",
        49: "49",
        60: "60",
      },
      spacing: {
        "1/2px": "0.5px",
        "1px": "1px",
        "10px": "10px",
        "100px": "100px",
        "500px": "500px",
        "45%": "45%",
      },
      backgroundImage: {
        wave: "url('../images/animation/wave.png')",
        header: "linear-gradient(0deg, rgba(15, 70, 215, 0.5) 0%, rgba(15, 70, 215, 0.25) 100%), url('../images/core/BgComputer.jpg')",
      },
      backgroundSize: {
        waveSize: "1000px 100px",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        wave1: "animate 20s linear infinite",
        wave2: "animate2 15s linear infinite",
        wave3: "animate 10s linear infinite",
        wave4: "animate2 5s linear infinite",
        soar: "soar 0.5s ease",
      },
      keyframes: {
        animate: {
          "0%": { "background-position-x": "0" },
          "100%": { "background-position-x": "1000px" },
        },
        animate2: {
          "0%": { "background-position-x": "0" },
          "100%": { "background-position-x": "-1000px" },
        },
        soar: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.75)" },
        },
      },
      transitionDelay: {
        "0s": "0s",
        "-5s": "-5s",
        "-2s": "-2s",
      },
    },
  },
  plugins: [],
};
