export const ROUTES = {
	HOME: '/',
}

export const MAP_API_KEY = "AIzaSyA8La3HotdJflBjZ3gbF89lfqFGzAOybZo"

export const SAMPLE_DATA_URL = "https://dev.takeonestep.com/api/v3/mockup_calibration_summary"
export const IOS_APP_LINK = 'https://apps.apple.com/il/app/onestep-recovery/id1491372188'
export const ANDROID_APP_LINK = 'https://play.google.com/store/apps/details?id=com.takeonestep.android'
export const API_BASE_URL='https://dev.takeonestep.com/api/v3/share_walk'
export const CARD_TYPES = {
	SIMPLE_CARD: 'simple_card',
	INSIGHT_CARD: 'insight_card',
	MAP_CARD: 'map_card',
}

export const IMAGES_MAP={
	rainbow_balance:require('./../Images/gradient/rainbow_balance.png'),
	rainbow_hip_range:require('./../Images/gradient/rainbow_hip_range.png'),
	rainbow_step_rate:require('./../Images/gradient/rainbow_step_rate.png'),
	rainbow_stride_length:require('./../Images/gradient/rainbow_stride_length.png'),
}

export const DATA_2 = {
	"summary": {
		"cards": [
			{
				"description": "102 steps/minute",
				"gait_parameter": "STEP_RATE",
				"rainbow": {
					"asset_id": "rainbow_step_rate",
					"bubble_color": "orange",
					"bubble_percent": 0.6,
					"end": 130,
					"start": 60,
					"template": "rainbow_widget",
					"units": null,
					"value": 102,
					"version": 1
				},
				"template": "simple_card",
				"title": "Step Rate",
				"version": 1
			},
			{
				"description": "3% toward left leg",
				"gait_parameter": "SYMMETRY_DIF",
				"rainbow": {
					"asset_id": "rainbow_balance",
					"bubble_color": "green",
					"bubble_percent": 0.85,
					"end": 0,
					"start": -20,
					"template": "rainbow_widget",
					"units": "%",
					"value": -3,
					"version": 1
				},
				"template": "simple_card",
				"title": "Balance",
				"version": 1
			},
			{
				"description": "145cm",
				"gait_parameter": "STRIDE_LENGTH",
				"rainbow": {
					"asset_id": "rainbow_stride_length",
					"bubble_color": "green",
					"bubble_percent": 0.9666666666666667,
					"end": 150,
					"start": 0,
					"template": "rainbow_widget",
					"units": "cm",
					"value": 145,
					"version": 1
				},
				"template": "simple_card",
				"title": "Stride Length",
				"version": 1
			},
			{
				"description": "42° Right hip",
				"gait_parameter": "STRIDE_LENGTH",
				"rainbow": {
					"asset_id": "rainbow_hip_range",
					"bubble_color": "green",
					"bubble_percent": 0.84,
					"end": 50,
					"start": 0,
					"template": "rainbow_widget",
					"units": "°",
					"value": 42,
					"version": 1
				},
				"template": "simple_card",
				"title": "Hip Range",
				"version": 1
			},
			{
				"content": "Record a walk with the phone on your left side to get a more complete picture of your walk!",
				"template": "insight_card",
				"title": "Get a complete analysis!",
				"version": 1
			},
			{
				"events": [],
				"latitude": 32.0646091,
				"longitude": 34.7717146,
				"template": "map_card",
				"version": 1
			}
		],
		"metadata": {
			"extraction_level": 8,
			"seconds": 25,
			"steps": 26,
			"timestamp": "2020-08-30T10:19:12",
			"title": "Walk summary",
			"uuid": "d42aa697-4ded-492b-b2c0-786295dd78ea"
		},
		"template": "web_summary",
		"version": 1
	}
}
