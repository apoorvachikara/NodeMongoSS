
$(function() {
  
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
            }
        },
        fields: [
            { name: "_id", type: "text",  title: "_id"},
            { name: "caseId", type: "String",  title: "caseId"},
            { name: "caseState", type: "text",  title: "caseState"},
            { name: "caseStatus", type: "text", title: "caseStatus" },
            { name: "createdDate", type: "number", title: "createdDate" },
            { name: "lastModifiedDate", type: "number", title: "lastModifiedDate" }
        ]
    });
    
});

