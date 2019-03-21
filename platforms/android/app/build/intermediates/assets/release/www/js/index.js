/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
    },


    buttonPressed: function() {
        console.log('button pressed');
        navigator.notification.alert(
            'Button pressed!',  // message
            ()=>{
                console.log('done pressing button callback')
                this.style.visibility = "hidden";
        },         // callback
            'Title',            // title
            'Ok'                  // buttonName
        );
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        document.getElementById("mybutton").addEventListener("click", this.buttonPressed);

        var onSuccess = function(position) {
            console.log('Success!');
            console.log(position);

            function alertDismissed() {
                // do something
            }
            navigator.notification.alert(
                'GPS coordinates pulled!',  // message
                alertDismissed,         // callback
                'GPS coordinates',            // title
                'Ok'                  // buttonName
            );
            navigator.vibrate(3000);
            // alert('Latitude: '          + position.coords.latitude          + '\n' +
            //       'Longitude: '         + position.coords.longitude         + '\n' +
            //       'Altitude: '          + position.coords.altitude          + '\n' +
            //       'Accuracy: '          + position.coords.accuracy          + '\n' +
            //       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            //       'Heading: '           + position.coords.heading           + '\n' +
            //       'Speed: '             + position.coords.speed             + '\n' +
            //       'Timestamp: '         + position.timestamp                + '\n');
        };
    
        function onError(error) {
            console.log('error1');
            console.log(error);
            // alert('code: '    + error.code    + '\n' +
            //       'message: ' + error.message + '\n');
        }
    
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

















    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();