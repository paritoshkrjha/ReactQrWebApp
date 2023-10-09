module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0f2138",         
          "secondary": "#d926a9",                  
          "accent": "#1fb2a6",                   
          "neutral": "#2a323c",                   
          "base-100": "#0f2138",                   
          "info": "#3abff8",                 
          "success": "#36d399",        
          "warning": "#fbbd23",        
          "error": "#f87272"
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      Manrope: ["Manrope"],
      Montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        accent: "#0f2138",
        dark: "#09091a",
      },
    },
  },
  plugins: [require("daisyui")],
};
