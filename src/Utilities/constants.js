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

export const DATA_2 = {
	"summary": {
		"cards": [ {
			"description": "101 steps/minute",
			"gait_parameter": "STEP_RATE",
			"rainbow": {
				"asset_id": "rainbow_step_rate",
				"bubble_color": "orange",
				"bubble_percent": 0.5857142857142857,
				"end": 130,
				"start": 60,
				"template": "rainbow_widget",
				"units": null,
				"value": 101,
				"version": 1
			},
			"template": "simple_card",
			"title": "Step Rate",
			"version": 1
		}, {
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
		}, {
			"description": "143cm",
			"gait_parameter": "STRIDE_LENGTH",
			"rainbow": {
				"asset_id": "rainbow_stride_length",
				"bubble_color": "green",
				"bubble_percent": 0.9533333333333334,
				"end": 150,
				"start": 0,
				"template": "rainbow_widget",
				"units": "cm",
				"value": 143,
				"version": 1
			},
			"template": "simple_card",
			"title": "Stride Length",
			"version": 1
		}, {
			"description": "41\u00b0 Right hip",
			"gait_parameter": "STRIDE_LENGTH",
			"rainbow": {
				"asset_id": "rainbow_hip_range",
				"bubble_color": "green",
				"bubble_percent": 0.82,
				"end": 50,
				"start": 0,
				"template": "rainbow_widget",
				"units": "\u00b0",
				"value": 41,
				"version": 1
			},
			"template": "simple_card",
			"title": "Hip Range",
			"version": 1
		}, {
			"events": [ {"latitude": 32.0647512, "longitude": 34.7716747, "t": 91548920}, {
				"latitude": 32.0647527,
				"longitude": 34.771672,
				"t": 91554394
			}, {"latitude": 32.0647227, "longitude": 34.7716827, "t": 91559401}, {
				"latitude": 32.0646495,
				"longitude": 34.7717255,
				"t": 91564550
			}, {"latitude": 32.0646638, "longitude": 34.7717268, "t": 91571671}, {
				"latitude": 32.0646319,
				"longitude": 34.7717156,
				"t": 91577191
			}, {"latitude": 32.064592, "longitude": 34.7716957, "t": 91582574}, {
				"latitude": 32.0645272,
				"longitude": 34.771724,
				"t": 91587928
			}, {"latitude": 32.0644939, "longitude": 34.7717283, "t": 91593052}, {
				"latitude": 32.064436,
				"longitude": 34.7717317,
				"t": 91598490
			}, {"latitude": 32.0643763, "longitude": 34.7717729, "t": 91604529}, {
				"latitude": 32.0643293,
				"longitude": 34.7718156,
				"t": 91610566
			}, {"latitude": 32.0643003, "longitude": 34.7718427, "t": 91615589}, {
				"latitude": 32.0642762,
				"longitude": 34.7718609,
				"t": 91621584
			}, {"latitude": 32.0642844, "longitude": 34.7719049, "t": 91626984}, {
				"latitude": 32.0642444,
				"longitude": 34.7719018,
				"t": 91632291
			}, {"latitude": 32.064177, "longitude": 34.7719443, "t": 91637324}, {
				"latitude": 32.0641182,
				"longitude": 34.7720101,
				"t": 91642589
			}, {"latitude": 32.064087, "longitude": 34.7720752, "t": 91648286}, {
				"latitude": 32.0640574,
				"longitude": 34.7720998,
				"t": 91653589
			}, {"latitude": 32.0640428, "longitude": 34.7721176, "t": 91659584}, {
				"latitude": 32.0640426,
				"longitude": 34.7721132,
				"t": 91664588
			}, {"latitude": 32.0640387, "longitude": 34.7721234, "t": 91669632}, {
				"latitude": 32.0640262,
				"longitude": 34.772145,
				"t": 91675587
			}, {"latitude": 32.0640631, "longitude": 34.7721396, "t": 91681593}, {
				"latitude": 32.0640143,
				"longitude": 34.7721035,
				"t": 91687292
			}, {"latitude": 32.0640055, "longitude": 34.7721397, "t": 91692589}, {
				"latitude": 32.0640215,
				"longitude": 34.7721851,
				"t": 91698168
			}, {"latitude": 32.0640357, "longitude": 34.772246, "t": 91703587}, {
				"latitude": 32.0640511,
				"longitude": 34.7723267,
				"t": 91708588
			}, {"latitude": 32.064078, "longitude": 34.7724279, "t": 91713786}, {
				"latitude": 32.0641178,
				"longitude": 34.7725071,
				"t": 91719468
			}, {"latitude": 32.0641322, "longitude": 34.772548, "t": 91724588}, {
				"latitude": 32.0641255,
				"longitude": 34.7725436,
				"t": 91729589
			}, {"latitude": 32.0641244, "longitude": 34.7725331, "t": 91735590}, {
				"latitude": 32.0641217,
				"longitude": 34.7725173,
				"t": 91741590
			}, {"latitude": 32.0641301, "longitude": 34.7725047, "t": 91747588}, {
				"latitude": 32.0641284,
				"longitude": 34.7724975,
				"t": 91753586
			}, {"latitude": 32.0641559, "longitude": 34.7724907, "t": 91758590}, {
				"latitude": 32.0641297,
				"longitude": 34.7724842,
				"t": 91764585
			}, {"latitude": 32.0641278, "longitude": 34.7724998, "t": 91769588}, {
				"latitude": 32.0641308,
				"longitude": 34.7724989,
				"t": 91774588
			}, {"latitude": 32.0641266, "longitude": 34.77249, "t": 91780586}, {
				"latitude": 32.0641264,
				"longitude": 34.7724846,
				"t": 91786581
			}, {"latitude": 32.0641294, "longitude": 34.7724815, "t": 91787585} ],
			"latitude": 32.0647512,
			"longitude": 34.7716747,
			"template": "map_card",
			"version": 1
		} ],
		"metadata": {
			"extraction_level": 8,
			"seconds": 240,
			"steps": 188,
			"timestamp": "2020-08-30T10:23:03",
			"title": "Walk summary",
			"uuid": "b005c0bf-0cdc-49a1-b1da-5c7b5f12cdf7"
		},
		"template": "web_summary",
		"version": 1
	}
}
