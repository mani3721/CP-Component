
// globlal variables
var app_main = $(".app-container");
///// globlal variables




$(document).ready(function() {
    append_to_container(app_main, "left-panel");
    append_to_container(app_main, "app-main");
    append_to_container(".app-main", "buttons");
});


// //// functions ///// ///
function append_to_container(file_container, file_to_append) {
    $.ajax({
        url: file_to_append + ".html",
        success: function (data) {
            $(file_container).append(data);
        },
        error: function() {
            console.log('Error to fetching' + file_to_append + ".html file");
        }
    });
}

