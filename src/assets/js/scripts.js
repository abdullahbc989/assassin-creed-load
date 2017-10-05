// https://github.com/VincentGarreau/particles.js/
particlesJS("particles-js", {
	particles: {
		number: {
			value: 300
		},
		color: {
			value: "#001010"
		},
		shape: {
			type: "circle",
			stroke: {
				width: 1,
				color: "#001010"
			},
			image: {
				src: "http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
			}
		},
		opacity: {
			value: 0.5,
			random: true,
			anim: {
				enable: true,
				speed: 3
			}
		},
		size: {
			value: 0.5,
			random: false,
			anim: {
				enable: false,
				speed: 30
			}
		},
		line_linked: {
			enable: true,
			distance: 120,
			color: "#001010",
			width: 1,
			opacity: {
				value: 1,
				random: true,
			}
		},
		move: {
			enable: true,
			speed: 2,
			direction: "bottom-left",
			straight: false
		}
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: "grab"
			},
			onclick: {
				enable: true,
				mode: "repulse"
			}
		},
		modes: {
			repulse: {
				distance: 100,
				duration: 0.4
			}
		}
	}
});
