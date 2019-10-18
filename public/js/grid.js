
$(function() {
    var dataLoaded;
    $.getJSON('/db/clients.json', function(data) {
        dataLoaded = data;
        console.log(data);

    });
    $("#jsGrid").jsGrid({
        height: "70%",
        width: "100%",
        // filtering: true,
        // inserting: true,
        // editing: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 10,
        pageButtonCount: 5,
        controller: {
            loadData: function(filter) {
                return $.ajax({
                    type: "GET",
                    url: "/client",
                    data: filter
                });
            },
            insertItem: function(item) {
                return $.ajax({
                    type: "POST",
                    url: "/clients",
                    data: item
                });
            },
            updateItem: function(item) {
                return $.ajax({
                    type: "PUT",
                    url: "/clients",
                    data: item
                });
            },
            deleteItem: function(item) {
                return $.ajax({
                    type: "DELETE",
                    url: "/clients",
                    data: item
                });
            }
        },
        fields: [
            { name: "_id", type: "text",  title: "_id"},
            { name: "caseid", type: "text",  title: "caseid"},
            { name: "caseState", type: "text",  title: "caseState"},
            { name: "caseStatus", type: "text", title: "caseStatus" },
            { name: "createdDate", type: "number", title: "createdDate" },
            { name: "lastModifiedDate", type: "number", title: "lastModifiedDate" }
        ]
    });
    
});

