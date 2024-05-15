
function showProjects() {
    // Hide headshot and paragraph text
    document.getElementById('headshot').style.display = 'none';
    document.querySelector('.home-section p').style.display = 'none';
    document.getElementById('about-container').classList.add('hidden');
    document.getElementById('badge-container').classList.add('hidden');

    // Show projects content
    document.getElementById('project-container').classList.remove('hidden');
}

function showProjectList(category) {
    // Remove 'category-active' class from all list items
    var categorylistItems = document.querySelectorAll('.project-category li');
    categorylistItems.forEach(function(item) {
        item.classList.remove('category-active');
    });

    // Remove 'list-active' class from all list items
    var listItems = document.querySelectorAll('.project-list li');
    listItems.forEach(function(item) {
        item.classList.remove('list-active');
    });

    // Add 'active' class to the clicked list item
    var list = document.querySelector('.project-category');
    list.addEventListener('click', (event) => {
        var lastClickedItem = event.target;
        lastClickedItem.classList.add('category-active');
    })

    // Hide all project lists
    var projectLists = document.querySelectorAll('.project-list');
    projectLists.forEach(function(list) {
        list.style.display = 'none';
    });

    // Show the selected project list
    var selectedList = document.getElementById(category + 'Projects');
    selectedList.style.display = 'block';
}

function hideProjectList() {
    // Hide all project lists
    var projectLists = document.querySelectorAll('.project-list');
    projectLists.forEach(function(list) {
        list.style.display = 'none';
    });

    // Remove 'active' class from all category list items
    var listItems = document.querySelectorAll('.project-category li');
    listItems.forEach(function(item) {
        item.classList.remove('category-active');
    });

    // Hide project descriptions container
    document.getElementById('project-description-container').classList.add('hidden');

    // Hide project image container
    document.getElementById('project-image-container').classList.add('hidden');
}

function showProjectDescription(project) {
    // Remove 'list-active' class from all list items
    var listItems = document.querySelectorAll('.project-list li');
    listItems.forEach(function(item) {
        item.classList.remove('list-active');
    });

    // Add 'active' class to the clicked list item
    var lastClickedItem = event.target;
    lastClickedItem.classList.add('list-active');
    // })

    var projectContainer = document.getElementById('project-description-container');
    var projectImageContainer = document.getElementById('project-image-container');

    // Show project image container
    projectImageContainer.classList.remove('hidden');
    projectImageContainer.classList.add('project-image-animation');

    // Show project descriptions container
    projectContainer.classList.remove('hidden');
    projectContainer.classList.add('project-description-animation');
    
    // Delay adding 'hidden' class
    setTimeout(function() {
        projectContainer.classList.remove('project-description-animation');
        projectImageContainer.classList.remove('project-image-animation');
    }, 400);
    
    // Hide all project images
    var projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(function(image) {
        image.style.display = 'none';
    });

    // Hide all project descriptions
    var projectDescriptions = document.querySelectorAll('.project-description');
    projectDescriptions.forEach(function(description) {
        description.style.display = 'none';
    });

    // Show the selected project image
    var selectedImage = document.getElementById(project + 'Image');
    selectedImage.style.display = 'block';

    // Show the selected project description
    var selectedDescription = document.getElementById(project + 'Description');
    selectedDescription.style.display = 'block';
}

function showAbout() {
    // Hide headshot, paragraph text, and projects content
    document.getElementById('headshot').style.display = 'none';
    document.querySelector('.home-section p').style.display = 'none';
    document.getElementById('project-container').classList.add('hidden');
    document.getElementById('project-description-container').classList.add('hidden');
    document.getElementById('badge-container').classList.add('hidden');

    // Show about container
    document.getElementById('about-container').classList.remove('hidden');

    // Call the doubleSkills function
    doubleSkills();
}

function doubleSkills() {
    removeDuplicateItems();
    //Appends the skill section with doubles to implement infinite scroll
    const scrollerInner = document.getElementById("inner-scroller");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner.appendChild(duplicatedItem);
    });
}

function goHome() {
    // Show headshot and paragraph text
    document.getElementById('headshot').style.display = 'block';
    document.querySelector('.home-section p').style.display = 'block';
    document.getElementById('badge-container').classList.remove('hidden');

    // Hide projects content
    document.getElementById('project-container').classList.add('hidden');
    document.getElementById('project-description-container').classList.add('hidden');
    document.getElementById('about-container').classList.add('hidden');

    // Remove Animations from headshot and paragraph text
    document.getElementById('headshot').style.animation = 'none';
    document.querySelector('.home-section p').style.animation = 'none';
    document.getElementById('badge-container').style.animation = 'none';
}

function removeDuplicateItems() {
    const list = document.getElementById('inner-scroller');
    const items = Array.from(list.children);

    const uniqueItemContents = new Set();

    // Filter out duplicate items
    items.forEach(item => {
        const itemContent = item.innerHTML;
        if (!uniqueItemContents.has(itemContent)) {
            uniqueItemContents.add(itemContent);
        } else {
            list.removeChild(item); // Remove the duplicate item from the DOM
        }
    });
}