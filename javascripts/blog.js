export { createBlog };

function createBlog(message) {
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

        console.log(blogPost);

        // document.getElementById('create_dialog').close();
        resolve(blogPost);
      });
  
      document.getElementById('cancel_btn').addEventListener('click', () => {
        // Resolve the promise with false to indicate that the user canceled
        resolve(false);
  
        // Clear the input fields and close the dialog box
        document.getElementById('post_title').value = '';
        document.getElementById('post_date').value = '';
        document.getElementById('post_summary').value = '';
        document.getElementById('create_dialog').close();
      });
    });
  }