var pageBody = document.querySelector('body');
var formHeader = document.createElement('header');
var formContainer = document.createElement('div');
var formFooter = document.createElement('footer');

pageBody.appendChild(formHeader);
pageBody.appendChild(formContainer);
pageBody.appendChild(formFooter);

var formHeaderText;

for (var i = 0; i < formData.length; i++) {

    input = document.createElement('input');
    var control = formData[i];
    var controlType = input.type;
    var controlLabel = input.label;
    var controlId = input.id;
    var controlIcon = input.icon;
    var controlOptions = input.options;

    formContainer.appendChild(input);

    var placeHolder = controlLabel.toString();

    // var createInput = function(type) {
    //     var label = document.createElement('label');
    //     label.setAttribute('for', control.id);
    //     type.setAttribute('for', control.type);
    // }();
    
}
// var formContent;
// var firstNameInput;
// var lastNameInput;
// var emailInput;
// var websiteURL;
// var languageSelect;
// var commentField;
// var mobileNumber;
// var homeNumber;

var formFooter;
var submitFormButton;
