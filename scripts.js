

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzOE-mtqH-INV_86uOVUuMAUxglaoMJseQRRKrfCfYykt8lVac/exec'
console.log($form.serialize());

$('#submit-form').on('click', function(e) {
  console.log($form.serialize());
  console.log('test');
  e.preventDefault();
  //add thinking state to button
  // $('.button').changeTExt('spinnter');
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
    success: function(x) {
      alert('thank you for your submission!');
      //add submitted text to button
      // $('.form').appendChild('<div>success</div>');

    }
    //fail state
  });
})
