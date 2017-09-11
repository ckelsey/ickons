'use strict';

(function (root, factory) {
	'use strict';
	/* istanbul ignore next */
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['angular'], factory);
	} else if (typeof module === 'object' && module.exports) {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		// to support bundler like browserify
		var angularObj = angular || require('angular');
		if ((!angularObj || !angularObj.module) && typeof angular != 'undefined') {
			angularObj = angular;
		}
		module.exports = factory(angularObj);
	} else {
		// Browser globals (root is window)
		factory(root.angular);
	}

}(this, function (angular) {
	'use strict';

	var module = angular.module('ickons', [])

		.directive("iCKonAddImage", () => { return { restrict: "A", templateUrl: "./components/add-image.svg" } })

		.directive("iCKonAddText", () => { return { restrict: "A", templateUrl: "./components/add-text.svg" } })

		.directive("iCKonArrowLeft", () => { return { restrict: "A", templateUrl: "./components/arrow-left.svg" } })

		.directive("iCKonArrowRight", () => { return { restrict: "A", templateUrl: "./components/arrow-right.svg" } })

		.directive("iCKonAudio", () => { return { restrict: "A", templateUrl: "./components/audio.svg" } })

		.directive("iCKonBolt", () => { return { restrict: "A", templateUrl: "./components/bolt.svg" } })

		.directive("iCKonBookmark", () => { return { restrict: "A", templateUrl: "./components/bookmark.svg" } })

		.directive("iCKonChart", () => { return { restrict: "A", templateUrl: "./components/chart.svg" } })

		.directive("iCKonChat", () => { return { restrict: "A", templateUrl: "./components/chat.svg" } })

		.directive("iCKonChatOutline", () => { return { restrict: "A", templateUrl: "./components/chat-outline.svg" } })

		.directive("iCKonCheckThick", () => { return { restrict: "A", templateUrl: "./components/check-thick.svg" } })

		.directive("iCKonCheck", () => { return { restrict: "A", templateUrl: "./components/check.svg" } })

		.directive("iCKonChild", () => { return { restrict: "A", templateUrl: "./components/child.svg" } })

		.directive("iCKonCloseThin", () => { return { restrict: "A", templateUrl: "./components/close-thin.svg" } })

		.directive("iCKonClose", () => { return { restrict: "A", templateUrl: "./components/close.svg" } })

		.directive("iCKonClothing", () => { return { restrict: "A", templateUrl: "./components/clothing.svg" } })

		.directive("iCKonCoffee", () => { return { restrict: "A", templateUrl: "./components/coffee.svg" } })

		.directive("iCKonController", () => { return { restrict: "A", templateUrl: "./components/controller.svg" } })

		.directive("iCKonCopy", () => { return { restrict: "A", templateUrl: "./components/copy.svg" } })

		.directive("iCKonCss", () => { return { restrict: "A", templateUrl: "./components/css.svg" } })

		.directive("iCKonDrink", () => { return { restrict: "A", templateUrl: "./components/drink.svg" } })

		.directive("iCKonDrinks", () => { return { restrict: "A", templateUrl: "./components/drinks.svg" } })

		.directive("iCKonDrop", () => { return { restrict: "A", templateUrl: "./components/drop.svg" } })

		.directive("iCKonEdit", () => { return { restrict: "A", templateUrl: "./components/edit.svg" } })

		.directive("iCKonElement", () => { return { restrict: "A", templateUrl: "./components/element.svg" } })

		.directive("iCKonExercise", () => { return { restrict: "A", templateUrl: "./components/exercise.svg" } })

		.directive("iCKonEyedropper", () => { return { restrict: "A", templateUrl: "./components/eyedropper.svg" } })

		.directive("iCKonFile", () => { return { restrict: "A", templateUrl: "./components/file.svg" } })

		.directive("iCKonFilter", () => { return { restrict: "A", templateUrl: "./components/filter.svg" } })

		.directive("iCKonFolder", () => { return { restrict: "A", templateUrl: "./components/folder.svg" } })

		.directive("iCKonFood", () => { return { restrict: "A", templateUrl: "./components/food.svg" } })

		.directive("iCKonFullscreen", () => { return { restrict: "A", templateUrl: "./components/fullscreen.svg" } })

		.directive("iCKonFullscreen2", () => { return { restrict: "A", templateUrl: "./components/fullscreen-2.svg" } })

		.directive("iCKonFunction", () => { return { restrict: "A", templateUrl: "./components/function.svg" } })

		.directive("iCKonVr", () => { return { restrict: "A", templateUrl: "./components/vr.svg" } })

		.directive("iCKonVrNvidia", () => { return { restrict: "A", templateUrl: "./components/vr_nvidia.svg" } })

		.directive("iCKonBinoculars", () => { return { restrict: "A", templateUrl: "./components/binoculars.svg" } })

		.directive("iCKonGradient", () => { return { restrict: "A", templateUrl: "./components/gradient.svg" } })

		.directive("iCKonHeart", () => { return { restrict: "A", templateUrl: "./components/heart.svg" } })

		.directive("iCKonHeartOutline", () => { return { restrict: "A", templateUrl: "./components/heart-outline.svg" } })

		.directive("iCKonHierarchy", () => { return { restrict: "A", templateUrl: "./components/hierarchy.svg" } })

		.directive("iCKonHistory", () => { return { restrict: "A", templateUrl: "./components/history.svg" } })

		.directive("iCKonHome", () => { return { restrict: "A", templateUrl: "./components/home.svg" } })

		.directive("iCKonHorn", () => { return { restrict: "A", templateUrl: "./components/horn.svg" } })

		.directive("iCKonHtml", () => { return { restrict: "A", templateUrl: "./components/html.svg" } })

		.directive("iCKonImage", () => { return { restrict: "A", templateUrl: "./components/image.svg" } })

		.directive("iCKonImageOutline", () => { return { restrict: "A", templateUrl: "./components/image-outline.svg" } })

		.directive("iCKonInfo", () => { return { restrict: "A", templateUrl: "./components/info.svg" } })

		.directive("iCKonJs", () => { return { restrict: "A", templateUrl: "./components/js.svg" } })

		.directive("iCKonLayers", () => { return { restrict: "A", templateUrl: "./components/layers.svg" } })

		.directive("iCKonLink", () => { return { restrict: "A", templateUrl: "./components/link.svg" } })

		.directive("iCKonLogout", () => { return { restrict: "A", templateUrl: "./components/logout.svg" } })

		.directive("iCKonLoupe", () => { return { restrict: "A", templateUrl: "./components/loupe.svg" } })

		.directive("iCKonMediafly", () => { return { restrict: "A", templateUrl: "./components/mediafly.svg" } })

		.directive("iCKonMinus", () => { return { restrict: "A", templateUrl: "./components/minus.svg" } })

		.directive("iCKonMove", () => { return { restrict: "A", templateUrl: "./components/move.svg" } })

		.directive("iCKonMsdoc", () => { return { restrict: "A", templateUrl: "./components/msdoc.svg" } })

		.directive("iCKonNew", () => { return { restrict: "A", templateUrl: "./components/new.svg" } })

		.directive("iCKonOpen", () => { return { restrict: "A", templateUrl: "./components/open.svg" } })

		.directive("iCKonPacman", () => { return { restrict: "A", templateUrl: "./components/pacman.svg" } })

		.directive("iCKonPdf", () => { return { restrict: "A", templateUrl: "./components/pdf.svg" } })

		.directive("iCKonPlay", () => { return { restrict: "A", templateUrl: "./components/play.svg" } })

		.directive("iCKonPpt", () => { return { restrict: "A", templateUrl: "./components/ppt.svg" } })

		.directive("iCKonRedo", () => { return { restrict: "A", templateUrl: "./components/redo.svg" } })

		.directive("iCKonReorder", () => { return { restrict: "A", templateUrl: "./components/reorder.svg" } })

		.directive("iCKonReset", () => { return { restrict: "A", templateUrl: "./components/reset.svg" } })

		.directive("iCKonSaveDisk", () => { return { restrict: "A", templateUrl: "./components/save-disk.svg" } })

		.directive("iCKonSave", () => { return { restrict: "A", templateUrl: "./components/save.svg" } })

		.directive("iCKonScale", () => { return { restrict: "A", templateUrl: "./components/scale.svg" } })

		.directive("iCKonBank", () => { return { restrict: "A", templateUrl: "./components/bank.svg" } })

		.directive("iCKonCreditCard", () => { return { restrict: "A", templateUrl: "./components/credit-card.svg" } })

		.directive("iCKonBasket", () => { return { restrict: "A", templateUrl: "./components/basket.svg" } })

		.directive("iCKonBuilding", () => { return { restrict: "A", templateUrl: "./components/building.svg" } })

		.directive("iCKonCar", () => { return { restrict: "A", templateUrl: "./components/car.svg" } })

		.directive("iCKonPlane", () => { return { restrict: "A", templateUrl: "./components/plane.svg" } })

		.directive("iCKonCogs", () => { return { restrict: "A", templateUrl: "./components/cogs.svg" } })

		.directive("iCKonShare", () => { return { restrict: "A", templateUrl: "./components/share.svg" } })

		.directive("iCKonShareOutline", () => { return { restrict: "A", templateUrl: "./components/share-outline.svg" } })

		.directive("iCKonSliders", () => { return { restrict: "A", templateUrl: "./components/sliders.svg" } })

		.directive("iCKonTarget", () => { return { restrict: "A", templateUrl: "./components/target.svg" } })

		.directive("iCKonThreeSixty", () => { return { restrict: "A", templateUrl: "./components/360.svg" } })

		.directive("iCKonThreeSixtyNvidia", () => { return { restrict: "A", templateUrl: "./components/360_2.svg" } })

		.directive("iCKonTrash", () => { return { restrict: "A", templateUrl: "./components/trash.svg" } })

		.directive("iCKonTrophy", () => { return { restrict: "A", templateUrl: "./components/trophy.svg" } })

		.directive("iCKonUndo", () => { return { restrict: "A", templateUrl: "./components/undo.svg" } })

		.directive("iCKonUploadOutline", () => { return { restrict: "A", templateUrl: "./components/upload-outline.svg" } })

		.directive("iCKonVial", () => { return { restrict: "A", templateUrl: "./components/vial.svg" } })

		.directive("iCKonVideo", () => { return { restrict: "A", templateUrl: "./components/video.svg" } })

		.directive("iCKonView", () => { return { restrict: "A", templateUrl: "./components/view.svg" } })

		.directive("iCKonXls", () => { return { restrict: "A", templateUrl: "./components/xls.svg" } })
	return module.name
}));