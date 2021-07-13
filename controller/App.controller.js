sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	'sap/m/library',
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, library, Fragment) {
	"use strict";

	return Controller.extend("my.Test.controller.App", {

		onChange: function (oEvent) {

			// 	this._Dialog = sap.ui.xmlfragment("my.Test.view.HelloDialog", this);
			// 	this._Dialog.open();

			var name = this.getView().byId("ObjectPageLayout").getSelectedSection();

		},

		onClick: function (oEvent) {

			// 	this._Dialog = sap.ui.xmlfragment("my.Test.view.HelloDialog", this);
			// 	this._Dialog.open();

			window.open("https://sway.office.com/ZoGFAEPX0RUTUPpX?ref=email", "_blank");

		},

		// onClose: function () {
		// 	this._Dialog.close();
		// },

		onInit: function () {

			var oModel1 = new sap.ui.model.json.JSONModel({

				Health: [{
						"Event_Name": "Dance sessions",
						"Number_of_times": "4"
					}, {
						"Event_Name": "Yoga Sessions",
						"Number_of_times": "2"
					}, {
						"Event_Name": "Walk Challenge",
						"Number_of_times": "3"
					}

				],

				Innotech: [{
						"Event_Name": "Demo Sessions",
						"Number_of_times": "4"
					}, {
						"Event_Name": "Online Learning Announcement",
						"Number_of_times": "3"
					}, {
						"Event_Name": "Innovative Challenge",
						"Number_of_times": "1"
					}

				],

				People: [{
						"Event_Name": "R&R",
						"Number_of_times": "1"
					}, {
						"Event_Name": "Online Games",
						"Number_of_times": "3"
					}

				],

				Social: [{
						"Event_Name": "Online Classes",
						"Number_of_times": "2"
					}, {
						"Event_Name": "Goodies Distribution",
						"Number_of_times": "1"
					}

				],

				Business: [{
						"Event_Name": "News Letter",
						"Number_of_times": "2"
					}, {
						"Event_Name": "Coffee Corners",
						"Number_of_times": "3"
					},

					{
						"Event_Name": "Buzz Shots Videos",
						"Number_of_times": "2"
					}

				],

				Home: [{

						"Event_Name": "Dance sessions",
						"Number_of_times": "4"
					}, {
						"Event_Name": "Yoga Sessions",
						"Number_of_times": "2"
					}, {
						"Event_Name": "Walk Challenge",
						"Number_of_times": "3"

					},

					{
						"Event_Name": "Demo Sessions",
						"Number_of_times": "4"
					}, {
						"Event_Name": "Online Learning Announcement",
						"Number_of_times": "3"
					}, {
						"Event_Name": "Innovative Challenge",
						"Number_of_times": "1"
					},

					{
						"Event_Name": "R&R",
						"Number_of_times": "1"
					}, {
						"Event_Name": "Online Games",
						"Number_of_times": "3"
					},

					{
						"Event_Name": "Online Classes",
						"Number_of_times": "2"
					}, {
						"Event_Name": "Goodies Distribution",
						"Number_of_times": "1"
					},

					{
						"Event_Name": "News Letter",
						"Number_of_times": "2"
					}, {
						"Event_Name": "Coffee Corners",
						"Number_of_times": "3"
					},

					{
						"Event_Name": "Buzz Shots Videos",
						"Number_of_times": "2"
					}

				]

			});

			this.getView().setModel(oModel1);

			this.byId("PillarCombo").setSelectedKey("Home");

			// //      1.Get the id of the VizFrame		
			// var oVizFrame = this.getView().byId("idcolumn");

			// //      2.Create a JSON Model and set the data
			// var oModel = new sap.ui.model.json.JSONModel();
			// var data = {
			// 	'Percentage': [{
			// 			"Technical_Skill": "ABAP",
			// 			"Value": "90"
			// 		}, {
			// 			"Technical_Skill": "OO-ABAP",
			// 			"Value": "90"
			// 		}, {
			// 			"Technical_Skill": "ABAP ON HANA",
			// 			"Value": "80"
			// 		}, {
			// 			"Technical_Skill": "UI5/FIORI",
			// 			"Value": "80"
			// 		}, {
			// 			"Technical_Skill": "CDS",
			// 			"Value": "80"
			// 		},

			// 		{
			// 			"Technical_Skill": "RAP",
			// 			"Value": "80"
			// 		}
			// 	]
			// };
			// oModel.setData(data);

			// //      3. Create Viz dataset to feed to the data to the graph
			// var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			// 	dimensions: [{
			// 		name: 'Technical_Skill',
			// 		value: "{Technical_Skill}"
			// 	}],

			// 	measures: [{
			// 		name: 'Percentage',
			// 		value: '{Value}'
			// 	}],

			// 	data: {
			// 		path: "/Percentage"
			// 	}
			// });
			// oVizFrame.setDataset(oDataset);
			// oVizFrame.setModel(oModel);
			// oVizFrame.setVizType('column');

			// //      4.Set Viz properties
			// oVizFrame.setVizProperties({
			// 	plotArea: {
			// 		colorPalette: d3.scale.category20().range()
			// 	}
			// });

			// var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 		'uid': "valueAxis",
			// 		'type': "Measure",
			// 		'values': ["Percentage"]
			// 	}),
			// 	feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			// 		'uid': "categoryAxis",
			// 		'type': "Dimension",
			// 		'values': ["Technical_Skill"]
			// 	});
			// oVizFrame.addFeed(feedValueAxis);
			// oVizFrame.addFeed(feedCategoryAxis);

		},

		onClose: function () {
			this._Dialog.close();
		},

		onUpdate: function (oContext) {
			this._Dialog = sap.ui.xmlfragment("my.Test.view.UpdateEvent", this);
			this._Dialog.open();
		},

		onNotifUpdate: function (oContext) {
			this._Dialog = sap.ui.xmlfragment("my.Test.view.UpdateNotification", this);
			this._Dialog.open();
		},

		onChangePillar: function (oContext) {

			var Pillar = this.byId("PillarCombo").getSelectedKey();

			switch (Pillar) {
			case "Home":
				this.byId("blockHome").setVisible(true);
				this.byId("blockHealth").setVisible(false);
				this.byId("blockInnotech").setVisible(false);
				this.byId("blockPeople").setVisible(false);
				this.byId("blockSocial").setVisible(false);
				this.byId("blockBusiness").setVisible(false);
				this.byId("table").setVisible(true);
				this.byId("table1").setVisible(false);
				this.byId("table2").setVisible(false);
				this.byId("table3").setVisible(false);
				this.byId("table4").setVisible(false);
				this.byId("table5").setVisible(false);
				break;
			case "Health":
				this.byId("blockHome").setVisible(false);
				this.byId("blockHealth").setVisible(true);
				this.byId("blockInnotech").setVisible(false);
				this.byId("blockPeople").setVisible(false);
				this.byId("blockSocial").setVisible(false);
				this.byId("blockBusiness").setVisible(false);
				this.byId("table").setVisible(false);
				this.byId("table1").setVisible(true);
				this.byId("table2").setVisible(false);
				this.byId("table3").setVisible(false);
				this.byId("table4").setVisible(false);
				this.byId("table5").setVisible(false);
				break;
			case "Innotech":
				this.byId("blockHome").setVisible(false);
				this.byId("blockHealth").setVisible(false);
				this.byId("blockInnotech").setVisible(true);
				this.byId("blockPeople").setVisible(false);
				this.byId("blockSocial").setVisible(false);
				this.byId("blockBusiness").setVisible(false);
				this.byId("table").setVisible(false);
				this.byId("table1").setVisible(false);
				this.byId("table2").setVisible(true);
				this.byId("table3").setVisible(false);
				this.byId("table4").setVisible(false);
				this.byId("table5").setVisible(false);
				break;
			case "People":
				this.byId("blockHome").setVisible(false);
				this.byId("blockHealth").setVisible(false);
				this.byId("blockInnotech").setVisible(false);
				this.byId("blockPeople").setVisible(true);
				this.byId("blockSocial").setVisible(false);
				this.byId("blockBusiness").setVisible(false);
				this.byId("table").setVisible(false);
				this.byId("table1").setVisible(false);
				this.byId("table2").setVisible(false);
				this.byId("table3").setVisible(true);
				this.byId("table4").setVisible(false);
				this.byId("table5").setVisible(false);
				break;
			case "Social":
				this.byId("blockHome").setVisible(false);
				this.byId("blockHealth").setVisible(false);
				this.byId("blockInnotech").setVisible(false);
				this.byId("blockPeople").setVisible(false);
				this.byId("blockSocial").setVisible(true);
				this.byId("blockBusiness").setVisible(false);
				this.byId("table").setVisible(false);
				this.byId("table1").setVisible(false);
				this.byId("table2").setVisible(false);
				this.byId("table3").setVisible(false);
				this.byId("table4").setVisible(true);
				this.byId("table5").setVisible(false);
				break;
			case "Business":
				this.byId("blockHome").setVisible(false);
				this.byId("blockHealth").setVisible(false);
				this.byId("blockInnotech").setVisible(false);
				this.byId("blockPeople").setVisible(false);
				this.byId("blockSocial").setVisible(false);
				this.byId("blockBusiness").setVisible(true);
				this.byId("table").setVisible(false);
				this.byId("table1").setVisible(false);
				this.byId("table2").setVisible(false);
				this.byId("table3").setVisible(false);
				this.byId("table4").setVisible(false);
				this.byId("table5").setVisible(true);

			}

		}

	});
});
