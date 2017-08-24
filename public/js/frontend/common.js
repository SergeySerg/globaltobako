/**********call-back**************/
$( document ).ready(function() {
  $('#submit-send').on('click', function (event) {
    //console.info('Клік');
    $('#submit-send').attr('disabled', true);
    var data = new FormData($('form#callback')[0]);
    $.ajax({
      url: '',
      method: 'POST',
      processData: false,
      contentType: false,
      data: data,
      dataType: "json",
      success: function (data) {
        if (data.success) {
          //alert('OK');
          swal(trans['base.success'], "", "success");
          jQuery("#callback").trigger("reset");
          $("#submit-send").attr('disabled', false);
        }
        else {
          swal(trans['base.error'], data.message, "error");
          $("#submit-send").attr('disabled', false);
        }
      },
      error: function (data) {
        swal(trans['base.error']);
        $("#submit-send").attr('disabled', false);
      }

    });
    event.preventDefault();
  });
  /**********END call-back**************/
});