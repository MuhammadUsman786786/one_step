// const API_RESPONSE = {
// 	"summary": {
// 		"cards": [{
// 			"description": "steps/minute",
// 			"rainbow": {
// 				"asset_id": "rainbow_step_rate",
// 				"bubble_color": "red",
// 				"end": 130,
// 				"percent": 0.2857142857142857,
// 				"start": 60,
// 				"type": "simple",
// 				"units": null,
// 				"value": 80
// 			},
// 			"stat_id": "STEP_RATE",
// 			"title": "Step rate",
// 			"type": "simple",
// 			"units": null,
// 			"value": 80
// 		}, {
// 			"description": "left foot incline",
// 			"rainbow": {
// 				"asset_id": "rainbow_balance",
// 				"bubble_color": "orange",
// 				"end": 0,
// 				"percent": 0.65,
// 				"start": -20,
// 				"type": "simple",
// 				"units": "%",
// 				"value": -7
// 			},
// 			"stat_id": "SYMMETRY_DIF",
// 			"title": "Balance",
// 			"type": "simple",
// 			"units": "%",
// 			"value": 7
// 		}, {
// 			"description": null,
// 			"rainbow": {
// 				"asset_id": "rainbow_stride_length",
// 				"bubble_color": "orange",
// 				"end": 150,
// 				"percent": 0.4666666666666667,
// 				"start": 0,
// 				"type": "simple",
// 				"units": "cm",
// 				"value": 70
// 			},
// 			"stat_id": "STRIDE_LENGTH",
// 			"title": "Stride length",
// 			"type": "simple",
// 			"units": "cm",
// 			"value": 70
// 		}],
// 		"extraction_level": 8,
// 		"seconds": 30,
// 		"steps": 10,
// 		"template": "calibration",
// 		"version": 1
// 	},
// 	"summary_template": "calibration"
// }


export const ROUTES = {
	HOME: '/',
}

export const MAP_API_KEY = "AIzaSyA8La3HotdJflBjZ3gbF89lfqFGzAOybZo"

export const SAMPLE_DATA_URL = "https://dev.takeonestep.com/api/v3/mockup_calibration_summary"

export const INSIGHT = {
	title: 'Insight',
	description: `Once you finish the "Get to Know Your Walk" course, we will create your personal recovery plan. You will also gain access to digital.`
}

export const EXTERNAL_LINKS = {
	GOOGLE: 'https://play.google.com/store/apps/details?id=com.takeonestep.android',
	APPLE: 'https://apps.apple.com/il/app/onestep-recovery/id1491372188'
}

export const CARD_TYPES = {
	SIMPLE_CARD: 'simple_card',
	INSIGHT_CARD: 'insight_card',
	MAP_CARD: 'map_card',
}

export const DATA_1 = {
	"cards": [
		{
			"description": "105 steps/minute",
			"gait_parameter": "STEP_RATE",
			"rainbow": {
				"asset_id": "rainbow_step_rate",
				"bubble_color": "orange",
				"bubble_percent": 0.6428571428571429,
				"end": 130,
				"start": 60,
				"template": "rainbow_widget",
				"units": null,
				"value": 105,
				"version": 1
			},
			"template": "simple_card",
			"title": "Step Rate",
			"version": 1
		},
		{
			"description": "2% toward left leg",
			"gait_parameter": "SYMMETRY_DIF",
			"rainbow": {
				"asset_id": "rainbow_balance",
				"bubble_color": "green",
				"bubble_percent": 0.9,
				"end": 0,
				"start": -20,
				"template": "rainbow_widget",
				"units": "%",
				"value": -2,
				"version": 1
			},
			"template": "simple_card",
			"title": "Balance",
			"version": 1
		},
		{
			"description": "94cm",
			"gait_parameter": "STRIDE_LENGTH",
			"rainbow": {
				"asset_id": "rainbow_stride_length",
				"bubble_color": "orange",
				"bubble_percent": 0.6266666666666667,
				"end": 150,
				"start": 0,
				"template": "rainbow_widget",
				"units": "cm",
				"value": 94,
				"version": 1
			},
			"template": "simple_card",
			"title": "Stride Length",
			"version": 1
		},
		{
			"description": "36° Right hip",
			"gait_parameter": "STRIDE_LENGTH",
			"rainbow": {
				"asset_id": "rainbow_hip_range",
				"bubble_color": "green",
				"bubble_percent": 0.72,
				"end": 50,
				"start": 0,
				"template": "rainbow_widget",
				"units": "°",
				"value": 36,
				"version": 1
			},
			"template": "simple_card",
			"title": "Hip Range",
			"version": 1
		}
	],
	"metadata": {
		"extraction_level": 8,
		"seconds": 21,
		"steps": 16,
		"timestamp": "2020-09-14T15:15:03",
		"title": "Walk summary",
		"uuid": "9af3adeb-d503-47f6-8ec1-bdd60f9138da"
	},
	"template": "web_summary",
	"version": 1
}

export const DATA_2 = {
	"summary": {
		"cards": [
			{
				"description": "146 steps/minute",
				"gait_parameter": "STEP_RATE",
				"rainbow": {
					"asset_id": "rainbow_step_rate",
					"bubble_color": "green",
					"bubble_percent": 1,
					"end": 130,
					"start": 60,
					"template": "rainbow_widget",
					"units": null,
					"value": 146,
					"version": 1
				},
				"template": "simple_card",
				"title": "Step Rate",
				"version": 1
			},
			{
				"description": "135 steps/minute",
				"gait_parameter": "STEP_RATE",
				"rainbow": {
					"asset_id": "rainbow_step_rate",
					"bubble_color": "green",
					"bubble_percent": 1,
					"end": 130,
					"start": 60,
					"template": "rainbow_widget",
					"units": null,
					"value": 135,
					"version": 1
				},
				"template": "simple_card",
				"title": "Step Rate",
				"version": 1
			},
			{
				"content": "The notorious T-Rex is thought to have had a step rate of 84 steps per minute!",
				"template": "insight_card",
				"title": "Step rate fact!",
				"version": 1
			},
			{
				"description": "135 steps/minute",
				"gait_parameter": "STEP_RATE",
				"rainbow": {
					"asset_id": "rainbow_step_rate",
					"bubble_color": "green",
					"bubble_percent": 1,
					"end": 130,
					"start": 60,
					"template": "rainbow_widget",
					"units": null,
					"value": 135,
					"version": 1
				},
				"template": "simple_card",
				"title": "Step Rate",
				"version": 1
			},
			{
				"events": [],
				"latitude": 32.0646091,
				"longitude": 34.7717146,
				"template": "map_card",
				"version": 1
			},
			{
				"events": [],
				"latitude": 32.0646091,
				"longitude": 34.7717146,
				"template": "map_card",
				title:'12',
				"version": 1
			}
		],
		"metadata": {
			"extraction_level": 4,
			"seconds": 7,
			"steps": 12,
			"timestamp": "2020-10-12T10:23:34",
			"title": "Walk summary",
			"uuid": "1435cbd5-73bb-4007-93f7-cf85d0f6cfcc"
		},
		"template": "web_summary",
		"version": 1
	}
}
