/**
 * angular-strap
 * @version v2.0.5 - 2014-08-27
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';
angular.module('mgcrea.ngStrap.tab').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tab/tab.tpl.html', '<ul class="nav nav-tabs" role="tablist"><li ng-repeat="$pane in $panes" ng-class="{active: $index == $panes.$active}"><a role="tab" data-toggle="tab" ng-click="$setActive($index)" data-index="{{ $index }}" ng-bind-html="$pane.title"></a></li></ul><div ng-transclude class="tab-content"></div>');
  }
]);