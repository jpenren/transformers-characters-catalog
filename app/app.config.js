
angular
    .module('app')
    .constant('IMAGE_API_KEY', 'AIzaSyBz-VFSOP4nTT1_CvkcsRVcQAAW4GqAVic')
    .constant('IMAGE_API_URL', 'https://www.googleapis.com/customsearch/v1?cx=006526179263721937451%3Apjm-ehlimhs&dateRestrict=2000&fileType=jpg&imgColorType=color&imgSize=large&searchType=image&fields=items(image%2FthumbnailLink%2Clink%2Ctitle)&key=')
    .constant('DATA_API_URL', 'https://raw.githubusercontent.com/jpenren/transformers-characters-catalog/master/transformers.json');
