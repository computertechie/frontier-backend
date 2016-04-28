/**
 * Created by tuckerstewart on 4/7/16.
 */

/** We still need to start taking in data somehow */
var dumbyInput = '#9#1717985826#25122#26214#';

module.exports = {
    parseData: function (stringToParse) {

        var inputArray = stringToParse.split("#");
        var outputArray = [];

        for (i = 0; i < inputArray.length; i++) {
            var reading = {};
            reading.value = inputArray[i];
            reading.sensor = i;
            outputArray.push(reading);
        }
        return outputArray;
    },
    //we just need to use set interval to run this, we need figure out how often we want to do this. Its the frontends call.
    getWeather: function() {
        $.ajax({
            url: "http://api.wunderground.com/api/fbfbe58c897cb268/geolookup/q/pws:KMTBILLI38.json",
            dataType: "json",
            success: function (parsed_json) {
                //var location = parsed_json['location']['city'];
                //var time = parsed_json['current_observation']['local_time_rfc822'];

            }
        });
    }
};