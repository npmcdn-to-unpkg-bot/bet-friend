(function(angular, undefined) {
  angular.module('constants')
    .constant('_SERVER_', {
      url: 'http://10.0.3.2:8081/PackScanPlatform/'
    })
    .constant('_START_REQUEST_', '_START_REQUEST_')
    .constant('_END_REQUEST_', '_END_REQUEST_')
    .constant('_NOTIFY_APPLICATION_', '_NOTIFY_APPLICATION_')
    .constant('_TOAST_APPLICATION_', '_TOAST_APPLICATION_')
    .constant('_CHECK_USER_', '_CHECK_USER_');
})(angular);
