/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCompetencias.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.competenciasItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.competenciasItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

