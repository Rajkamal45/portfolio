// Sample blog data (replace with your actual blog data)

const blogPosts = [
    { title: "First Blog Post", content: "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", image: "path_to_image/image2.jpg" },
    { title: "Second Blog Post", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", image: "path_to_image/image2.jpg" },
    { title: "Third Blog Post", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", image: "path_to_image/image3.jpg" }
];

// Function to display all blog posts
function displayBlogPosts() {
    const blogList = document.getElementById("blogList");
    blogList.innerHTML = "";

    blogPosts.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `<h3><a href="blogPost.html?index=${index}">${post.title}</a></h3>`;
        blogList.appendChild(postDiv);
    });
}

// Function to search for a blog post
function searchBlog() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredPosts = blogPosts.filter(post => post.title.toLowerCase().includes(searchInput) || post.content.toLowerCase().includes(searchInput));

    const blogList = document.getElementById("blogList");
    blogList.innerHTML = "";

    filteredPosts.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.innerHTML = `<h3><a href="blogPost.html?index=${index}">${post.title}</a></h3>`;
        blogList.appendChild(postDiv);
    });
}

// Function to get query parameter
function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to display the blog post content on the details page
function displayBlogPost() {
    const index = getQueryParameter("index");
    const blogPostContent = document.getElementById("blogPostContent");

    if (index !== null && blogPosts[index]) {
        const post = blogPosts[index];
        blogPostContent.innerHTML = `<h1>${post.title}</h1><p>${post.content}</p>`;
    } else {
        blogPostContent.innerHTML = "<p>Blog post not found.</p>";
    }
}

// Check if we are on the main blog page or the individual blog post page
if (document.getElementById("blogList")) {
    // Initial display of all blog posts if on the main blog page
    displayBlogPosts();
} else if (document.getElementById("blogPostContent")) {
    // Display the individual blog post content if on the details page
    displayBlogPost();
};
