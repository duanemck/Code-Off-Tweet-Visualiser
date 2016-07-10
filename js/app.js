(function () {
    'use strict';
    var module = angular.module('jsinsa', ['ngSanitize']);

    module.controller('tweetController', function ($scope, $interval, $sce, $timeout) {

        $scope.tweets = [];
        var newTweets = [];

        var config = {
            "id": '472497070914297856',
            "domId": '',
            "dataOnly": true,
            "enableLinks": false,
            "showUser": true,
            "showTime": true,
            "showRetweet": false,
            "customCallback": handleTweets,
            "showInteraction": false,

        }

        function momentDateFormatter(date, dateString) {
            return moment(dateString).fromNow();
        }

        twitterFetcher.fetch(config);
        $interval(function () {
            twitterFetcher.fetch(config);
        }, 5000);

        $interval(function () {
            if (newTweets.length) {
                
                var tweet = newTweets.splice(0, 1)[0];
                tweet.author = $sce.trustAsHtml(tweet.author);
                tweet.tweet = $sce.trustAsHtml(tweet.tweet);
                $scope.tweets.push(tweet);
                tweet.id = $scope.tweets.length;
            }
        }, 500);


        $interval(function () {
            if ($scope.tweets.length > 0) {
                var tweet = $scope.tweets.splice(0, 1)[0];
                console.log($scope.tweets.length);
                $timeout(function () {
                    $scope.readyToGo = tweet;
                    $('#go').css({ 'z-Index': 5000 });
                    $timeout(function () {
                        $('#go').solitaireVictory();
                        $('#go').css({ 'z-Index': 1 });
                        $scope.readyToGo = null;
                    }, 1000);
                });
            }
            //console.log($scope.tweets);
        }, 2000);

        function handleTweets(tweets) {
            tweets = tweets.reverse();
            for (var i = 0; i < tweets.length; i++) {
                newTweets.push(tweets[i]);
                //console.log(tweets[i])
            }
        }

    })
})();