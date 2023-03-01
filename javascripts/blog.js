export { createPost, customConfirm, editPost };

// Create Blog Post
function createPost(message) {
    document.getElementById('create_message').textContent = message;

    document.getElementById('post_title').value = '';
    document.getElementById('post_date').value = '';
    document.getElementById('post_summary').value = '';

    document.getElementById('create_post_dialog').showModal();
  
    return new Promise(resolve => {
      document.getElementById('submit_btn').addEventListener('click', () => {
        const postTitle = document.getElementById('post_title').value;
        const postDate = document.getElementById('post_date').value;
        const postSummary = document.getElementById('post_summary').value;

        const blogPost = [postTitle, postDate, postSummary]

        resolve(blogPost);
      });
  
      document.getElementById('cancel_btn').addEventListener('click', async (event) => {
		    event.preventDefault();
        
        let answer = await customConfirm('Are you sure you want to cancel the blog post creation?');
 
        if (answer) {
            document.getElementById('create_post_dialog').close();
            resolve(null);
        }
        else {
          return;
        }
      });
    });

  }

// Custom Dialog for Confirm
function customConfirm(message) {
  document.getElementById('confirm_message').textContent = message;
  
  const confirmDialog = document.getElementById('custom_confirm_dialog');
  if (!confirmDialog.hasAttribute('open')) {
    confirmDialog.showModal();
  }

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

// Edit Blog Post
function editPost(message, post) {
  document.getElementById('edit_message').textContent = message;

  document.getElementById('edit_post_title').value = post.firstElementChild.textContent;
  document.getElementById('edit_post_date').value = post.firstElementChild.nextElementSibling.textContent.substring(6);
  document.getElementById('edit_post_summary').value = post.firstElementChild.nextElementSibling.nextElementSibling.textContent.substring(9);

  document.getElementById('edit_dialog').showModal();

  return new Promise(resolve => {
    document.getElementById('edit_btn').addEventListener('click', () => {

      const editPostTitle = document.getElementById('edit_post_title').value;
      const editPostDate = document.getElementById('edit_post_date').value;
      const editPostSummary = document.getElementById('edit_post_summary').value;

      const editBlogPost = [editPostTitle, editPostDate, editPostSummary]

      resolve(editBlogPost);
    });

    document.getElementById('edit_cancel_btn').addEventListener('click', async (event) => {
      event.preventDefault();

      let answer = await customConfirm('Are you sure you want to cancel the edit?');

      if (answer) {
        document.getElementById('edit_dialog').close();
        resolve(null);
      } 
      else {
        return;
      }
    });
  });
}