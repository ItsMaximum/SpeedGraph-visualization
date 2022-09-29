var state = {
	height_mode: "fill_space",
	margin_top: 0,
	margin_right: 5,
	margin_right_mobile: 5,
	margin_bottom: 0,
	margin_left: 20,

	zoom_enabled: true,
	zoom_steps_to_show: 10,
	zoom_y_axis: true,
	zoom_y_padding: 20,

	color: {
		custom_palette: "Doppletronica: #FFFFFF\nSamwise415: #FFFFFF\nNpPro93: #FFFFFF\nRicky: #99AFE8\nIWannaBeThePie: #FFFFFF\nJumpyluff: #8D8D8D\nEyeOf_Newt: #918ACD\ndha: #EF823D\ndtm: #980898\nBurnsy: #34ABDE\nPeterAfro: #EE3333\nfritzakids: #B269D5\nLukePlays: #845FD9\nMokasa: #04A866\nSJFzone: #CC6EA3\nVibronik: #04A866\nLieutenant_Boo: #5656DE\nWishengrad: #82C149\nLuciousness: #4580DE\nghostd_then_a_period: #D069C9\nkrakow: #9C9C9C\nOhCarter: #04A866\n"
	},
	start_circle_r: 5,
	end_circle_r: 20,
	end_circle_stroke: 4,
	end_circle_stroke_bg: true,
	circle_space_between: 30,
	horse_images: true,
	hide_labels: false,
	label_font_size: 20,
	label_color_mode: "auto",
	label_color: "#808080",
	rank_font_size: 0,
	rank_outside_picture: false,
	text_legend_bold: true,


	line_opacity: 1,
	line_width: 4,
	curve: "curveMonotoneX",

	shade: true,
	shade_opacity: 0.3,
	shade_width: 10,

	missing: false,
	missing_opacity: 1,
	missing_dash_width: 0.2,
	missing_dash_space: 4,
	missing_width: 1.5,

	stage_duration: 1400,
	update_duration: 1400,

	label_ranks: "Ranks",
	label_scores: "Scores",
	label_replay: "Replay",

	value_type: "scores",
	higher_scores_win: false,
	ties_mode: "competition",
	show_buttons: false,
	show_replay: false,

	target_position: null,

	selected_horse: null,
	mouseover_horse: null,

	// y axis
	y_axis_min: null,
	y_axis_max: null,
	y_axis_min_rank: null,
	y_axis_max_rank: null,
	y_axis_label_colors: "#808080",
	y_axis_label_size: 18,
	y_axis_stroke_color: "#323434",

	y_axis_format: {
		suffix: " Minutes"
	},

	header_title: "",
	header_subtitle: "",
	header_color: "#333333",
	header_margin: "10",
	header_align: "left",

	filter_control_type: "auto-buttons",
	filter_width: 300,
	filter_include_all: true,
	filter_all_label: "All",
	filter: null,

	localization: {},
	label_format: {},

	layout: {
		background_color_enabled: true,
		background_color: "#000000"
	},

	// x axis
	x_axis_label_color: "#808080",
	x_axis_label_size: 18,
	x_axis_rotate: "45",
	x_axis_show_hidden: false,
};

export default state;
