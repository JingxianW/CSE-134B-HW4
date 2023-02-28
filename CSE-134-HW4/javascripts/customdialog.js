export { customAlert, customConfirm, customPrompt };

// Custom Dialog for Alert
function customAlert(message) {
  document.getElementById('alert_message').textContent = message;

  document.getElementById('custom_alert_dialog').showModal();

  document.getElementById('alert_btn').addEventListener('click', () => {
    document.getElementById('custom_alert_dialog').close();
  });
}

// Custom Dialog for Confirm
function customConfirm(message) {
  let temp = document.querySelector('template').content.cloneNode(true).getElementById('custom_confirm_dialog');
  
  temp.querySelector('#confirm_message').textContent = message;

  document.body.appendChild(temp);
  temp.style.display = 'block';

  return new Promise(resolve => {
    temp.querySelector('#confirm_btn').addEventListener('click', () => {
      temp.remove();
      resolve(true);
    });

    temp.querySelector('#cancel_btn').addEventListener('click', () => {
      temp.remove();
      resolve(false);
    });
  });
  
}

// Custom Dialog for Prompt
function customPrompt(message) {
  document.getElementById('label_message').textContent = message;

  document.getElementById('custom_prompt_dialog').showModal();

  return new Promise(resolve => {
    document.getElementById('prompt_ok_btn').addEventListener('click', () => {
      document.getElementById('custom_prompt_dialog').close();
      resolve(document.getElementById('prompt_input').value);
    });

    document.getElementById('prompt_cancel_btn').addEventListener('click', () => {
      document.getElementById('custom_prompt_dialog').close();
      resolve(false);
    });
  });
}