$(function() {
  var picbox = $('#picbox'),
      back = $('.back', picbox);

      picbox.filedrop({
        paramname: 'pic',
        maxfilesize: 2,
        maxfiles: 6,
        url: 'upload.php',

        uploadFinished: function(i, file, reponse) {
          $.data(file).addClass('done');
        },
        error: function(err, file) {
          switch(err) {
            case 'BrowserNotSupported':
              showMessage("Your browser does not support HTML5 file uploads");
              break;
            case 'TooManyFiles':
              alert("You surpassed the max number of files allowed");
              break;
            case 'FileTooLarge':
              alert(file.name + " is too big, please upload a smaller file");
              break;
            default: 
              break;
          }
        },
        beforeEach: function(file) {
          if (!file.type.match(/^image\//)) {
            alert("Your file is not an image");
            return false;
          }
        },
        uploadStart: function(i, file, len) {
          createImage(file);
        },
        progressUpdated: function(i, file, progress) {
          $.data(file).find('.progress').width(progress);
        }
      });
});
