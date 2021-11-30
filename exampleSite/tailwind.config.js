const theme = require('tailwindcss/defaultTheme');
const typography = require('@tailwindcss/typography');

// Utils
const round = (num) => num.toFixed(7).replace(/(\.[0-9]+?)0+$/, '$1').replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
  // See https://tailwindcss.com/docs/configuration#important
	important: true,
	purge: {
		enabled: true,
    content: [
			'./hugo_stats.json',
			'./layouts/**/*.html',
		],
	  theme: {
	    container: {
	      center: true,
	      screens: {
	        sm: "100%",
	        md: "100%",
	        lg: "992px",
	        xl: "1240px"
	      },
	      padding: {
	        DEFAULT: "16px",
	        sm: "16px",
	        md: "16px",
	        lg: "0",
	        xl: "0"
	      }
	    },
	    extend: {
	      colors: {
	        'aa-gray-50': '#FAFAFA',
	        'aa-gray-100': '#F5F5F5',
	        'aa-gray-200': '#E5E5E5',
	        'aa-gray-300': '#D4D4D4',
	        'aa-gray-400': '#A3A3A3',
	        'aa-gray-500': '#737373',
	        'aa-gray-600': '#525252',
	        'aa-gray-700': '#404040',
	        'aa-gray-800': '#262626',
	        'aa-gray-900': '#171717',
	        'aa-purple-50': '#E7D8FF',
	        'aa-purple-500': '#8A64EA',
	        'aa-purple-600': '#7045DE',
	        'aa-green-500': '#10B981',
	        'aa-red-500': '#EF4444',
	        'aa-yellow-400': '#FBBF24',
	      },
	      spacing: {
	        'aa-1/4': '23.79%',
	        'aa-1/4-gap': '1.6129%',
	      },
	      fontFamily: {
	        sans: ["Spoqa Han Sans Neo", "sans-serif"],
	        serif: ["Noto Serif KR", "serif"],
	      }
	    },
	  },		
    // https://tailwindcss.com/docs/optimizing-for-production#safelisting-specific-classes
    safelist: ['show', 'hide'],
		extractors: [{
			extractor: (content) => {
				let els = JSON.parse(content).htmlElements;
				return els.tags.concat(els.classes, els.ids);
			},
      extensions: ['json']
    }],
		mode: 'all'
	},
	plugins: [ 
		typography,
		require('@tailwindcss/line-clamp'),
	 ]
};
