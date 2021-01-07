function enableEditMode()
{
richTextField.document.designMode = 'On';
}
function execCmd(command)
{
    richTextField.document.execCommand(command, false, null);
}

// const source = document.querySelector('iframe.richTextField');

// function paste() {
    
//     navigator.clipboard.readText().then(clipText =>
//         document.getElementById('richTextField').innerText = clipText);
//   }
  
// //   paste.addEventListener('click', (e) => { 
// //     document.execCommand('paste');
// // });

// var oDoc, sDefTxt;
// function formatDoc(sCmd, sValue) {
//   if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
// }

// function validateMode() {
//   if (!document.compForm.switchMode.checked) { return true ; }
//   alert("Uncheck \"Show HTML\".");
//   oDoc.focus();
//   return false;
// }
function execCommandWithArg(command, arg)
{
    richTextField.document.execCommand(command, false, arg);
}


var showSource = false;
var enableEdit = true;

function toggleSource(){
    if(showSource){
        richTextField.document.getElementsByTagName('body')[0].innerHTML = richTextField.document.getElementsByTagName('body')[0].textContent;
        showSource = false;
    }else{
        richTextField.document.getElementsByTagName('body')[0].textContent = richTextField.document.getElementsByTagName('body')[0].innerHTML;
        showSource = true;
    }
}


function toggleEdit(){
    if(enableEdit){
        richTextField.document.designMode = 'Off';
        enableEdit = false;
    }else{
        richTextField.document.designMode = 'On';
        enableEdit = true
    }
}
