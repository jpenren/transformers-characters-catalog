(function () {
    'use strict';

    angular
        .module ('app')
        .component ('characterImages', characterImages());


    function characterImages() {

        function CharacterImagesController(){
            var vm = this;
            vm.getImages = getImages;
            vm.asThumbnail = asThumbnail;

            function getImages() {
                if(!vm.character.images){
                    return [];
                }

                return vm.character.images.slice(0,vm.numberOfImages);
            }

            function asThumbnail() {
                return vm.thumbnail == 'true';
            }
        }

        return {
            bindings: {
                character: '<',
                numberOfImages: '@',
                thumbnail : '@',
                cssClass: '@'
            },
            controller: CharacterImagesController,
            template: '<img ng-repeat="image in $ctrl.getImages()" class="character-image {{$ctrl.cssClass}}" title="{{image.title}}" ng-src="{{$ctrl.asThumbnail() ? image.thumbnailUrl : image.url}}" />'
        }
    }

} ());