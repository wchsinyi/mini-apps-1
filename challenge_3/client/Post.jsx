// import $ from 'jquery';
function post(input){
    // write this in the body; 
    // input = input.map(i=>i[0]);
    $.ajax({
        url:'http://127.0.0.1:3000/postData',
        data: input,
        type: 'POST',
        success: function(err, res){
            console.log('hi')
            err? console.log(err) : console.log('sucess and response is', res);
        },
        err: function(a, str, c){
            console.log('here');
            console.log(str);
        },
        timeout:2000

    })
}

export default post;



// http vs https is special 