import { select } from "d3-selection";
import { scaleLinear } from "d3-scale";
import { min, max } from "d3-array";
import { parser } from "./process_data";

import state from "./state";
import data from "./data";

import { is_mobile } from "./update_graphic";
import { svg, plot, header, footer } from "./create_dom";

var w, h, x, y, y_max_score, y_min_score, viz_ui;
var label_size = {};

function updateSizesAndScales(current_position, max_rank) {
	getLabelSizes();
	var window_height = window.innerHeight;
	viz_ui = viz_ui || document.getElementById("viz-ui");
	var svg_height = window_height - header.getHeight() - footer.getHeight() - viz_ui.getBoundingClientRect().height;
	var plot_margin_top = Math.max(state.end_circle_r + state.end_circle_stroke, state.start_circle_r, state.line_width/2, state.shade_width/2);

	svg.attr("width", window.innerWidth).attr("height", svg_height);
	var end_circle_size = state.end_circle_r + state.end_circle_stroke;
	var margin_right = !is_mobile ? state.margin_right : end_circle_size + state.margin_right_mobile;
	var margin_bottom = plot_margin_top + state.margin_bottom;
	var margin_top = plot_margin_top + label_size.longest.height + state.margin_top;
	var margin_left = plot_margin_top + state.margin_left;

	plot.attr("transform", "translate(" + margin_left + "," + margin_top + ")");

	w = Math.max(0, window.innerWidth - margin_left - margin_right);
	h = Math.max(0, svg_height - margin_top - margin_bottom);
	x = scaleLinear().range([0, w]).domain([0, data.horserace.column_names.stages.length - 1]);

	var y_domain;
	if (state.value_type == "ranks") y_domain = [state.y_axis_max_rank || max_rank, state.y_axis_min_rank || 1];
	else {
		y_max_score = max(data.horserace, function(d) { return max(d.stages, function(v) { return parser(v); }); }),
		y_min_score = min(data.horserace, function(d) { return min(d.stages, function(v) { return parser(v); }); });

		if (state.y_axis_min !== "" && state.y_axis_min !== null) y_min_score = state.y_axis_min;
		if (state.y_axis_max !== "" && state.y_axis_max !== null) y_max_score = state.y_axis_max;
		if (state.higher_scores_win) y_domain = [y_min_score, y_max_score];
		else y_domain = [y_max_score, y_min_score];
	}
	y = scaleLinear().range([h, 0]).domain(y_domain);

	var x_offset = Math.max(state.start_circle_r, state.line_width/2, state.shade_width/2) + state.margin_left;
	select("#clip rect")
		.attr("transform", "translate(0,-" + margin_top + ")")
		.attr("height", h + margin_top + margin_bottom)
		.attr("width", x(current_position) + x_offset)
		.attr("x", -x_offset);
}

function getLabelSizes() {
	var longest_label, longest_label_size = 0;
	data.horserace.column_names.stages.forEach(function(name) {
		if (name.length > longest_label_size) {
			longest_label = name;
			longest_label_size = name.length;
		}
	});
	var longest_el = svg.append("text");
	longest_el.html(longest_label).style("font-size", state.x_axis_label_size + "px");
	longest_el.attr("transform", function() {
		if (state.x_axis_rotate == "tilted") return "rotate(-45)";
		else if (state.x_axis_rotate == "vertical") return "rotate(-90)";
		else return "rotate(0)";
	});
	label_size.longest = longest_el.node().getBoundingClientRect();
	longest_el.remove();
}

export { updateSizesAndScales, w, h, x, y, y_max_score, y_min_score };
