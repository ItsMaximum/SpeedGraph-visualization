var state = {
	margin_top: 100,
	margin_right: 120,
	margin_bottom: 50,
	margin_left: 50,

	bg_color: "#FFFFFF",
	palette: "schemeCategory20",
	custom_colors: "",

	start_circle_r: 6,
	end_circle_r: 20,
	horse_images: true,
	label_decimals: 1,
	label_font_size: 12,
	rank_font_size: 14,
	rank_outside_picture: true,
	rank_label_suffix: "",

	line_opacity: 1,
	line_width: 4,
	curve: "curveLinear",

	shade: true,
	shade_opacity: 0.1,
	shade_width: 20,

	stage_duration: 200,
	update_duration: 1000,

	label_ranks: "Ranks",
	label_scores: "Scores",

	value_type: "scores",
	higher_scores_win: true,
	show_buttons: true,

	target_position: null,

	selected_horse: null,
	mouseover_horse: null,

	y_axis_min: 0,
	y_axis_max: "",
	y_axis_min_rank: 1,
	y_axis_max_rank: "",

	y_axis_tick_prefix: "",
	y_axis_tick_suffix: "%"
};

export default state;
