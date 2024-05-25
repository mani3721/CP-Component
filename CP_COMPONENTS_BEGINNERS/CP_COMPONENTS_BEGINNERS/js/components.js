
// common modals
function append_to_container(file_container, file_to_append) {
    $.ajax({
        url: file_to_append + ".html",
        success: function (data) {
            $(file_container).append(data);
        },
        error: function() {
            console.log('Error to fetching ' + file_to_append + ".html file");
        }
    });
}


append_to_container(".app-main", "buttons");

