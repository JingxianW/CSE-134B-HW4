export { createPost, customConfirm };

// Create Blog Post
function createPost(message) {
    document.getElementById('create_message').textContent = message;
    
    document.getElementById('create_dialog').showModal();
  
    return new Promise(resolve => {
      document.getElementById('create_btn').addEventListener('click', () => {
        // Get the values of the input fields
        const postTitle = document.getElementById('post_title').value;
        const postDate = document.getElementById('post_date').value;
        const postSummary = document.getElementById('post_summary').value;
        console.log(postTitle);
        console.log(postDate);
        console.log(postSummary);
        // Create an object with the blog post details and resolve the promise with it
        const blogPost = [postTitle, postDate, postSummary]

        // console.log(blogPost);

        // document.getElementById('create_dialog').close();
        resolve(blogPost);
        // resolve(postTitle)
      });
  
      document.getElementById('cancel_btn').addEventListener('click', async (event) => {
        // Resolve the promise with false to indicate that the user canceled
        // let input = window.confirm('Are you sure you want to cancel it?');
		    event.preventDefault();
        // resolve(input);
        let input = await customConfirm('Are you sure you want to cancel?');
        // customAlert('This is an alert!');   
        if (input) {
            document.getElementById('create_dialog').close();
            resolve(null);
        }
        else {
          // document.getElementById('create_dialog').close();
          return;
        }
      });

      // document.getElementById('create_dialog').showModal();
    });

  }

// Custom Dialog for Confirm
function customConfirm(message) {
  document.getElementById('confirm_message').textContent = message;
  
  const confirmDialog = document.getElementById('custom_confirm_dialog');
  if (!confirmDialog.hasAttribute('open')) {
    confirmDialog.showModal();
  }
  // document.getElementById('custom_confirm_dialog').showModal();

  return new Promise(resolve => {
    document.getElementById('yes_btn').addEventListener('click', () => {
      document.getElementById('custom_confirm_dialog').close();
      resolve(true);
    });

    document.getElementById('no_btn').addEventListener('click', () => {
      document.getElementById('custom_confirm_dialog').close();
      resolve(false);
    });
  });
  
}