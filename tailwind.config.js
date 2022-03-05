
module.exports = {
    mode: "jit",

    purge: {

      content: ['./build/**/*.html'],
      // content: ['./src/pug/**/*.pug'],
      preserveHtmlElements: false,

      safelist: [],

      extract: {
        // pug: content => content.match(/[^<>"'`\s]*/gm),
      },


    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {

        fontSize: {
          md: ".9rem",
        },

        screens: {
          bet: "975px",
        },

        colors: {
        }

      },
    },

    variants: {
      extend: {},
    },

    corePlugins: {
    //   preflight: false,
    },

  }
