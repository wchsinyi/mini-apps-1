// import $ from 'jquery';
function post(input) {
    // write this in the body; 
    // input = input.map(i=>i[0]);
    $.ajax({
        url: 'http://127.0.0.1:3000/postData',
        data: input,
        type: 'POST',
        success: function (err, res) {
            console.log('hi');
            err ? console.log(err) : console.log('sucess and response is', res);
        },
        err: function (a, str, c) {
            console.log('here');
            console.log(str);
        },
        timeout: 2000

    });
}

export default post;

// http vs https is special
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9Qb3N0LmpzeCJdLCJuYW1lcyI6WyJwb3N0IiwiaW5wdXQiLCIkIiwiYWpheCIsInVybCIsImRhdGEiLCJ0eXBlIiwic3VjY2VzcyIsImVyciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJhIiwic3RyIiwiYyIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQW9CO0FBQ2hCO0FBQ0E7QUFDQUMsTUFBRUMsSUFBRixDQUFPO0FBQ0hDLGFBQUksZ0NBREQ7QUFFSEMsY0FBTUosS0FGSDtBQUdISyxjQUFNLE1BSEg7QUFJSEMsaUJBQVMsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQWtCO0FBQ3ZCQyxvQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQUgsa0JBQUtFLFFBQVFDLEdBQVIsQ0FBWUgsR0FBWixDQUFMLEdBQXdCRSxRQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NGLEdBQXRDLENBQXhCO0FBQ0gsU0FQRTtBQVFIRCxhQUFLLFVBQVNJLENBQVQsRUFBWUMsR0FBWixFQUFpQkMsQ0FBakIsRUFBbUI7QUFDcEJKLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZRSxHQUFaO0FBQ0gsU0FYRTtBQVlIRSxpQkFBUTs7QUFaTCxLQUFQO0FBZUg7O0FBRUQsZUFBZWYsSUFBZjs7QUFJQSIsImZpbGUiOiJQb3N0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmZ1bmN0aW9uIHBvc3QoaW5wdXQpe1xuICAgIC8vIHdyaXRlIHRoaXMgaW4gdGhlIGJvZHk7IFxuICAgIC8vIGlucHV0ID0gaW5wdXQubWFwKGk9PmlbMF0pO1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDonaHR0cDovLzEyNy4wLjAuMTozMDAwL3Bvc3REYXRhJyxcbiAgICAgICAgZGF0YTogaW5wdXQsXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZXJyLCByZXMpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpJylcbiAgICAgICAgICAgIGVycj8gY29uc29sZS5sb2coZXJyKSA6IGNvbnNvbGUubG9nKCdzdWNlc3MgYW5kIHJlc3BvbnNlIGlzJywgcmVzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyOiBmdW5jdGlvbihhLCBzdHIsIGMpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlcmUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0cik7XG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVvdXQ6MjAwMFxuXG4gICAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9zdDtcblxuXG5cbi8vIGh0dHAgdnMgaHR0cHMgaXMgc3BlY2lhbCAiXX0=